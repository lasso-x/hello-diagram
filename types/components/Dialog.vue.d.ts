import { Vue } from 'vue-property-decorator';
export default class Dialog extends Vue {
    dismissable?: boolean;
    title?: string;
    content?: string;
    onClose?: () => void;
    close(): void;
    get slotProps(): {
        close: () => void;
    };
}
