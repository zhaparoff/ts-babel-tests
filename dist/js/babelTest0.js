// @ts-nocheck
// JS: No forEach() call
export function logCollection(array) {
  if (array == null) {
    throw new Error("Collection is required.");
  }

  console.log(array);
}