import { Vue } from 'vue-property-decorator';
export default class ConfirmResetDialog extends Vue {
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    close(): void;
    confirm(): void;
    dismiss(): void;
}
