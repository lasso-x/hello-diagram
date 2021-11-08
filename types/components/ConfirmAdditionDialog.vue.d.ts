import { Vue } from 'vue-property-decorator';
import { DiagramDataDefinition } from '@/types/DiagramData';
import DiagramVue from './Diagram.vue';
export default class ConfirmAdditionDialog extends Vue {
    readonly diagramVm: DiagramVue;
    readonly data: DiagramDataDefinition;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    get diagram(): import("../diagram").default;
    get activeDiagram(): import("../diagram").ActiveDiagram;
    get content(): string;
    close(): void;
    confirm(): void;
    dismiss(): void;
}
