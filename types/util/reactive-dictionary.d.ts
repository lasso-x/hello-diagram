export default class ReactiveDictionary<K, V> {
    constructor();
    private _reffer;
    private _obj;
    has(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V): V;
    delete(key: K): void;
}
