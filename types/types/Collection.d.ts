export default class Collection<K, T> {
    constructor(keyGetter: KeyGetter<K, T>, ...items: T[]);
    private _getItemKey;
    private _itemsMap;
    private _items;
    get items(): readonly T[];
    private _updateItemsArray;
    replace(...items: T[]): void;
    add(...items: T[]): void;
    has(key: K): boolean;
    get(key: K): T | undefined;
    remove(key: K): void;
    pick(keys: K[]): Collection<K, T>;
}
declare type KeyGetter<K, T> = (item: T) => K;
export {};
