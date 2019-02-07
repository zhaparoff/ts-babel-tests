// TS: Custom forEach() is called from interface
export function logCollection(collection) {
  if (collection == null) {
    throw new Error("Collection is required.");
  }

  collection.forEach(i => console.log(i));
}