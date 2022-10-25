import { Vue } from 'vue-property-decorator';
export default class Dialog extends Vue {
    readonly dismissable?: boolean;
    readonly title?: string;
    readonly content?: string;
    readonly size: string | number;
    readonly onClose?: () => void;
    contentEl: HTMLElement | null;
    contentInnerEl: HTMLElement | null;
    scrollable: boolean;
    get maxWidth(): number;
    get slotProps(): {
        close: () => void;
    };
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    updateRefs(): void;
    onContentInnerElResize(rect: DOMRect): void;
    close(): void;
}
