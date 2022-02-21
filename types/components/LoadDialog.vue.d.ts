import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
import type SavedDiagram from '@/types/SavedDiagram';
export default class LoadDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    loading: boolean;
    selectedSavedDiagram: SavedDiagram | 'new' | null;
    setAsDefault: boolean;
    get canSetDefault(): boolean;
    created(): void;
    close(): void;
    load(savedDiagram?: SavedDiagram): Promise<void>;
    showEditDiagramDialog(savedDiagram: SavedDiagram): void;
}
