import { ItemCollection } from "./itemCollection";

export function logCollection<T>(collection: ItemCollection<T>): void {
    if (collection == null) {
        throw new Error("Collection is required.");
    }

    collection.forEach(i => console.log(i));
}
