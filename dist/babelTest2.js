import "core-js/modules/web.dom.iterable";
// forEach() is called for class
export function logCollection(collection) {
  if (collection == null) {
    throw new Error("Collection is required.");
  }

  collection.forEach(function (i) {
    return console.log(i);
  });
}