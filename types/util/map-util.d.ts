export declare type MapKey<M> = M extends Map<infer K, any> ? K : never;
export declare type MapValue<M> = M extends Map<any, infer V> ? V : never;
export declare function mapGetOrSet<M extends Map<any, any>>(map: M, key: MapKey<M>, getDefault: () => MapValue<M>): MapValue<M>;
