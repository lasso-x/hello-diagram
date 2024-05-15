declare const watchedProps: readonly ["top", "left", "right", "bottom", "width", "height"];
type WatchedProps = typeof watchedProps[number];
export type RectDiff = {
    [Prop in WatchedProps]?: DOMRect[Prop];
};
export type Callback = (rect: DOMRect, oldRect: DOMRect | null, diff: RectDiff) => void;
export declare function watchRect(element: HTMLElement, callback: Callback): {
    unwatch: () => void;
};
export declare function unwatchRect(element: HTMLElement, callback: Callback): void;
export {};
