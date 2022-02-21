import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
import type SavedDiagram from '@/types/SavedDiagram';
export default class EditDiagramDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    readonly title?: string;
    readonly savedDiagram?: SavedDiagram;
    readonly save: () => unknown;
    loading: boolean;
    fields: {
        title: string;
        description: string;
        shared: boolean;
    };
    created(): void;
    close(): void;
}
