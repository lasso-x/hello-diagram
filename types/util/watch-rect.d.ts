declare const watchedProps: readonly ["top", "left", "right", "bottom", "width", "height"];
declare type WatchedProps = typeof watchedProps[number];
export declare type RectDiff = {
    [Prop in WatchedProps]?: DOMRect[Prop];
};
export declare type Callback = (rect: DOMRect, oldRect: DOMRect | null, diff: RectDiff) => void;
export declare function watchRect(element: HTMLElement, callback: Callback): {
    unwatch: () => void;
};
export declare function unwatchRect(element: HTMLElement, callback: Callback): void;
export {};
