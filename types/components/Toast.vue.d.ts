import { Vue } from 'vue-property-decorator';
export default class Toast extends Vue {
    readonly boxEl: HTMLElement;
    readonly content?: string;
    readonly dismissable: boolean;
    readonly duration: number;
    readonly showLoadingSpinner: boolean;
    $el: HTMLElement;
    height: number;
    closed: boolean;
    timeoutId: number | null;
    onEnter(): void;
    onLeave(): void;
    onResize(rect: DOMRect): void;
    clearTimeout(): void;
    setTimeout(): void;
    close(): void;
    onDurationChanged(): void;
}
