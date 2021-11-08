/**
 * Merges source object into target object and returns a revert function.
 */
export declare function merge(target: any, source: any): () => void;
/**
 * Sets the value of an object property and returns a revert function.
 */
export declare function set(object: any, key: string, value: any): () => any;
