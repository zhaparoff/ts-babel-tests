// @ts-nocheck
// JS: Array.prototype.forEach() is called for the same scope array
function logCollectionInternal(array) {
  if (array == null) {
    throw new Error("Collection is required.");
  }

  array.forEach(function (item) {
    console.log(item);
  });
}

export function logCollection() {
  logCollectionInternal(["1", "2", "3"]);
}