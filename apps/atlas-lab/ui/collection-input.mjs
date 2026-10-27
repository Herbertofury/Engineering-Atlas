// Input interpretation only. The Rust queue independently validates every request.
export function collectionJob(input) {
  if (typeof input !== 'string' || input.length > 512) throw new Error('Enter one slug/ID or up to 20 canonical IDs separated by commas.');
  const value = input.trim();
  if (!value.includes(',')) {
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(value)) throw new Error('Invalid project ID or slug.');
    return {CollectModrinth:{project:value}};
  }
  const projects = value.split(',').map(id=>id.trim());
  if (projects.length > 20 || projects.some(id=>! /^[A-Za-z0-9]{8}$/.test(id)) || new Set(projects).size !== projects.length) {
    throw new Error('Batch entries must be 2–20 unique eight-character canonical IDs.');
  }
  return {CollectModrinthBatch:{projects}};
}
