import { Vue } from 'vue-property-decorator';
export declare type Opener = Vue | HTMLElement;
export default class DropdownMenu extends Vue {
    get dropdownMenuVm(): this;
    readonly opener?: Opener;
    readonly closeOnFocusOut: boolean;
    readonly closeOnLongMouseOut: boolean;
    readonly close?: () => void;
    readonly boundsEl: HTMLElement;
    readonly dropdownMenuEl: HTMLElement;
    openerEl: HTMLElement | null;
    parentDropdownMenu: DropdownMenu | null;
    childDropdownMenus: Set<DropdownMenu>;
    openerRect: DOMRect | null;
    boundsRect: DOMRect | null;
    dropdownMenuRect: DOMRect | null;
    isFocused: boolean;
    isMousedOver: boolean;
    longMouseOutPromise: Promise<void> | null;
    ignoreFocusOut: boolean;
    ignoreMouseOut: boolean;
    get ancestorDropdownMenus(): DropdownMenu[];
    get dropdownMenuStyle(): {
        visibility: string;
        minWidth?: undefined;
        maxWidth?: undefined;
        maxHeight?: undefined;
        transform?: undefined;
    } | {
        minWidth: string;
        maxWidth: string;
        maxHeight: string;
        transform: string;
        visibility?: undefined;
    };
    mounted(): void;
    beforeDestroy(): void;
    updateButtonRect(rect: DOMRect): void;
    updateBoundsRect(rect: DOMRect): void;
    updateDropdownMenuRect(rect: DOMRect): void;
    onFocusIn(): void;
    onFocusOut(event: FocusEvent): void;
    onMouseOver(): void;
    onMouseOut(event: MouseEvent): void;
    onOpenerChanged(): void;
    onOpenerElChanged(openerEl?: HTMLElement | null, oldOpenerEl?: HTMLElement | null): void;
}
