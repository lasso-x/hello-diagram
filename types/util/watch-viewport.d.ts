import { Callback } from './watch-rect';
export declare function watchViewport(callback: Callback): {
    unwatch: () => void;
};
export declare function unwatchViewport(callback: Callback): void;
