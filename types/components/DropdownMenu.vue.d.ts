import { Vue } from 'vue-property-decorator';
export default class DropdownMenu extends Vue {
    get dropdownMenuVm(): this;
    readonly buttonEl?: HTMLElement;
    readonly close?: () => void;
    readonly boundsEl: HTMLElement;
    readonly dropdownMenuEl: HTMLElement;
    buttonRect: DOMRect | null;
    boundsRect: DOMRect | null;
    dropdownMenuRect: DOMRect | null;
    get dropdownMenuStyle(): {
        minWidth: string;
        maxWidth: string;
        maxHeight: string;
        transform: string;
    } | null;
    mounted(): void;
    updateButtonRect(rect: DOMRect): void;
    updateBoundsRect(rect: DOMRect): void;
    updateDropdownMenuRect(rect: DOMRect): void;
    onFocusOut(event: FocusEvent): void;
    onButtonElChanged(buttonEl?: HTMLElement | null, oldButtonEl?: HTMLElement | null): void;
}
