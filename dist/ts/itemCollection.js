// TS: Array.prototype.forEach() is called for array
export class ItemCollection {
  storage = [];

  forEach(delegate) {
    this.storage.forEach(item => delegate(item));
  }

}