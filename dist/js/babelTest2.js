import "core-js/modules/web.dom.iterable";
// @ts-nocheck
// JS: Array.prototype.forEach() is called for array from external scope
export function logCollection(array) {
  if (array == null) {
    throw new Error("Collection is required.");
  }

  array.forEach(function (item) {
    console.log(item);
  });
}