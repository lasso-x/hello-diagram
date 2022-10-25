import { Vue } from 'vue-property-decorator';
import type Diagram from '../diagram';
import SavedDiagram from '../types/SavedDiagram';
export default class ConfirmDeleteDiagramDialog extends Vue {
    readonly diagram: Diagram;
    readonly savedDiagram?: SavedDiagram;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    loading: boolean;
    close(): void;
    confirm(): Promise<void>;
    dismiss(): void;
}
