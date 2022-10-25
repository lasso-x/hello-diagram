import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '../diagram';
import type SavedDiagram from '../types/SavedDiagram';
export default class EditDiagramDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    readonly title?: string;
    readonly ignoreOwnership?: boolean;
    readonly savedDiagram?: SavedDiagram;
    readonly save: () => unknown;
    saving: boolean;
    fields: {
        title: string;
        description: string;
        shared: boolean;
    };
    get isOwner(): boolean;
    created(): void;
    isPromise(o: unknown): o is Promise<unknown>;
    close(): void;
}
