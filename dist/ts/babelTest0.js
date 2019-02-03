// TS: No forEach() call
export function logCollection(collection) {
  if (collection == null) {
    throw new Error("Collection is required.");
  }

  console.log(collection);
}