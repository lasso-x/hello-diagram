import Vue from 'vue';
export interface TooltipOptions {
    el?: HTMLElement;
    text: string;
    placement?: TooltipPlacement;
    offset?: TooltipOffset;
    overrideShow?: boolean;
}
export declare type TooltipPlacement = 'auto' | 'top' | 'left' | 'right' | 'bottom';
export declare type TooltipOffset = number | {
    all?: number;
    x?: number;
    y?: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
};
export interface TooltipRootStore {
    tooltipsSet: Set<TooltipOptions>;
    tooltips: TooltipOptions[];
    add: (tooltip: TooltipOptions) => void;
    remove: (tooltip: TooltipOptions) => void;
}
export declare const getStore: (vueRoot: Vue) => TooltipRootStore;
export declare const isPlacement: (v: unknown) => v is TooltipPlacement;
export declare const isOffset: (v: unknown) => v is TooltipOffset;
