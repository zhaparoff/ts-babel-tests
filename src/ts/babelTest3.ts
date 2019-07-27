export function logSet<T>(set: Set<T>): void {
    if (set == null) {
        throw new Error("Set is required.");
    }

    console.log(set.entries.length);
}
