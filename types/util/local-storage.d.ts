declare type Definition<P> = {
    [K in keyof P]: Prop<P[K]>;
};
declare type Prop<T = unknown, PT = T> = {
    validator?: (value: unknown) => value is T;
    parser?: (value: T) => PT;
};
declare function createLocalStorage<P>(namespace: string, definition: Definition<P>): void;
declare const storage1: void;
