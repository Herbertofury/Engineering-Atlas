//! Fresh-process Linux RSS/HWM observation, not an allocation counter or app-wide claim.
use atlas_lab::{
    build_identity::sha256_hex,
    modrinth::{parse_project, parse_project_record, parse_project_record_owned},
};
use std::io::Read;
fn memory_field(text: &str, name: &str) -> Result<u64, Box<dyn std::error::Error>> {
    let lines: Vec<_> = text.lines().filter(|s| s.starts_with(name)).collect();
    if lines.len() != 1 {
        return Err("Missing or duplicate OS memory field".into());
    }
    let parts: Vec<_> = lines[0].split_whitespace().collect();
    if parts.len() != 3 || parts[2] != "kB" {
        return Err("Unexpected OS memory unit".into());
    }
    Ok(parts[1]
        .parse::<u64>()?
        .checked_mul(1024)
        .ok_or("OS memory overflow")?)
}
fn memory() -> Result<serde_json::Value, Box<dyn std::error::Error>> {
    let status = std::fs::read_to_string("/proc/self/status")?;
    let rollup = std::fs::read_to_string("/proc/self/smaps_rollup")?;
    Ok(
        serde_json::json!({"status_rss_bytes":memory_field(&status,"VmRSS:")?,"status_high_water_rss_bytes":memory_field(&status,"VmHWM:")?,"rollup_rss_bytes":memory_field(&rollup,"Rss:")?,"rollup_pss_bytes":memory_field(&rollup,"Pss:")?,"rollup_private_clean_bytes":memory_field(&rollup,"Private_Clean:")?,"rollup_private_dirty_bytes":memory_field(&rollup,"Private_Dirty:")?,"source":"Linux self status and smaps_rollup; whole isolated process, not allocation delta","limits":"Status RSS accounting can be asynchronous; rollup is a separate instantaneous snapshot, not a high-water value or joint atomic read"}),
    )
}
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args: Vec<String> = std::env::args().collect();
    if args.len() != 4
        || !matches!(args[2].as_str(), "baseline" | "candidate")
        || !matches!(args[3].as_str(), "exact" | "spare")
    {
        return Err(
            "Usage: project_process_memory_lab INPUT.json baseline|candidate exact|spare".into(),
        );
    }
    let before_input = memory()?;
    let mut bytes = Vec::new();
    std::fs::File::open(&args[1])?
        .take(2 * 1024 * 1024 + 1)
        .read_to_end(&mut bytes)?;
    let project = parse_project(&bytes)?;
    let expected = serde_json::to_value(&project)?;
    let before_records = memory()?;
    let mut records = Vec::with_capacity(8);
    for _ in 0..8 {
        let mut input = Vec::with_capacity(bytes.len() * if args[3] == "spare" { 2 } else { 1 });
        input.extend_from_slice(&bytes);
        let record = if args[2] == "candidate" {
            parse_project_record_owned(input, &project.id)?
        } else {
            let result = parse_project_record(&input, &project.id)?;
            drop(input);
            result
        };
        records.push(record);
    }
    for r in &records {
        assert_eq!(r.raw_json().as_bytes(), bytes);
        assert_eq!(serde_json::to_value(r.project())?, expected);
    }
    let retained = memory()?;
    let count = records.len();
    drop(records);
    let after_drop = memory()?;
    println!(
        "{}",
        serde_json::to_string_pretty(
            &serde_json::json!({"schema_version":1,"lane":args[2],"capacity_mode":args[3],"source_bytes":bytes.len(),"source_sha256":sha256_hex(&bytes),"project_id":project.id,"repeated_records":count,"complete_output_equal":true,"before_input":before_input,"before_records":before_records,"retained":retained,"after_drop":after_drop,"harness_sha256":sha256_hex(include_bytes!("project_process_memory_lab.rs")),"adapter_sha256":sha256_hex(include_bytes!("../src/modrinth.rs")),"limitations":["Eight repeats of one retained input; generated stress replay, not eight unique provider records","Whole fresh Linux process including runtime, input, validation and measurement overhead","OS accounting is page-granular and allocator-dependent; after-drop RSS need not fall","Not browser/GPU memory, Windows, shared-service RSS or a target-project adoption result","No elapsed-time or warm-cache speed claim"]})
        )?
    );
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn parses_only_requested_field_and_converts_kib() {
        assert_eq!(
            memory_field("Rss: 12 kB\nPss: 5 kB\n", "Rss:").unwrap(),
            12288
        );
    }
    #[test]
    fn missing_duplicate_invalid_units_and_values_fail_closed() {
        for text in [
            "Pss: 2 kB",
            "Rss: 1 kB\nRss: 2 kB",
            "Rss: 4 MB",
            "Rss: -1 kB",
            "Rss: NaN kB",
            "Rss: 18446744073709551615 kB",
            "Rss: 2 kB extra",
        ] {
            assert!(memory_field(text, "Rss:").is_err());
        }
    }
}
