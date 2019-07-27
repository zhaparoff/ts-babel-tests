export function logSet(set) {
  if (set == null) {
    throw new Error("Set is required.");
  }

  console.log(set.entries.length);
}