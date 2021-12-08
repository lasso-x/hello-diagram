export default class Collection<T extends {
    id: string;
}> {
    constructor(items?: T[]);
    items: readonly T[];
    add: (...items: T[]) => void;
    has: (target: string | T) => boolean;
    get: (id: string) => T | undefined;
    pick: (ids: string[]) => Collection<T>;
    remove: (...targets: (string | T)[]) => void;
}
