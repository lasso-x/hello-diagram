import { Vue } from 'vue-property-decorator';
import type { DiagramDataDefinition } from '@/types/DiagramData';
import type DiagramVm from './Diagram.vue';
export default class ConfirmAdditionDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly data: DiagramDataDefinition;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    runLayout: boolean;
    get diagram(): import("../diagram").default;
    get content(): string;
    close(): void;
    confirm(): void;
    dismiss(): void;
}
