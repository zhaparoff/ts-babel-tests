// TS: Custom forEach() is called from interface

import { IItemCollection } from "./itemCollection";

export function logCollection<T>(collection: IItemCollection<T>): void {
    if (collection == null) {
        throw new Error("Collection is required.");
    }

    collection.forEach(i => console.log(i));
}
