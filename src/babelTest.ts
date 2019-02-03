export type IterativeDelegate<T> = (item: T, index?: number) => void;

export interface ItemCollection<T> {
    /**
     * Applies an operation to all items in this collection.
     */
    forEach(delegate: IterativeDelegate<T>): void;
}

export function logCollection<T>(collection: ItemCollection<T>): void {
    if (collection == null) {
        throw new Error("Collection is required.");
    }

    collection.forEach(i => console.log(i));
}
