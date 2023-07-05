export default class ReactiveMap<K, V> {
    constructor(iterable?: Iterable<[K, V]>);
    private _dictionary;
    private _entries;
    get size(): number;
    has(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V): void;
    delete(key: K): void;
    clear(): void;
    entries(): [K, V][];
    keys(): K[];
    values(): V[];
    forEach(callbackfn: (value: V, key: K, map: this) => void): void;
    [Symbol.iterator](): IterableIterator<[K, V]>;
}
