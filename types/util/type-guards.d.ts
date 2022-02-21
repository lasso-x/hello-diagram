declare type Lit = string | number | bigint | boolean | symbol | unknown[] | Record<string, unknown> | ((...args: unknown[]) => unknown) | null | undefined;
export declare const isRecord: <K extends string = string>(v: unknown) => v is Record<K, unknown>;
export declare const isOneOf: <T extends Lit>(v: unknown, t: T[]) => v is T;
export {};
