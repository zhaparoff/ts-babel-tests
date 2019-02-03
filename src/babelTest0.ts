// No forEach() call

import { IItemCollection } from "./itemCollection";

export function logCollection<T>(collection: IItemCollection<T>): void {
    if (collection == null) {
        throw new Error("Collection is required.");
    }

    console.log(collection);
}
