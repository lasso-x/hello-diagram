import { Vue } from 'vue-property-decorator';
export default class Dialog extends Vue {
    readonly dismissable?: boolean;
    readonly title?: string;
    readonly content?: string;
    readonly size: string | number;
    readonly onClose?: () => void;
    get maxWidth(): number;
    close(): void;
    get slotProps(): {
        close: () => void;
    };
}
