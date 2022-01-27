import { Vue } from 'vue-property-decorator';
import type { DiagramDataDefinition } from '@/types/DiagramData';
import type DiagramVue from './Diagram.vue';
export default class ConfirmAdditionDialog extends Vue {
    readonly diagramVm: DiagramVue;
    readonly data: DiagramDataDefinition;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    get diagram(): import("../diagram").default;
    get content(): string;
    close(): void;
    confirm(): void;
    dismiss(): void;
}
