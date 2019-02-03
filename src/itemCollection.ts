import { IterativeDelegate } from "./IterativeDelegate";

export interface IItemCollection<T> {
    /**
     * Applies an operation to all items in this collection.
     */
    forEach(delegate: IterativeDelegate<T>): void;
}

export class ItemCollection<T> implements IItemCollection<T> {
    private storage: T[] = [];

    public forEach(delegate: IterativeDelegate<T>): void {
        this.storage.forEach(item => delegate(item));
    }
}
