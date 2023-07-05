export default class ReactiveSet<T> {
    constructor(iterable?: Iterable<T>);
    private _map;
    get size(): number;
    has(value: T): boolean;
    add(value: T): void;
    delete(value: T): void;
    clear(): void;
    entries(): [T, T][];
    keys(): T[];
    values(): T[];
    forEach(callbackfn: (value: T, value2: T, set: this) => void): void;
    [Symbol.iterator](): IterableIterator<T>;
}
