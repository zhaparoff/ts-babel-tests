// TS: custom forEach() is called from class
export function logCollection(collection) {
  if (collection == null) {
    throw new Error("Collection is required.");
  }

  collection.forEach(i => console.log(i));
}