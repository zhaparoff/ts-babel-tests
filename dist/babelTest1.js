import "core-js/modules/web.dom.iterable";
export function logCollection(collection) {
  if (collection == null) {
    throw new Error("Collection is required.");
  }

  collection.forEach(function (i) {
    return console.log(i);
  });
}