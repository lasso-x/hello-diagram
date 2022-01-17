import { Vue } from 'vue-property-decorator';
import Diagram from '@/diagram';
import DiagramVue from './Diagram.vue';
import PrintDialog from './PrintDialog.vue';
export default class TopBar extends Vue {
    readonly diagramVm: DiagramVue;
    readonly diagram: Diagram;
    showSaveAsDropdownMenu: boolean;
    showLoadDropdownMenu: boolean;
    showLayoutDropdownMenu: boolean;
    showEditDropdownMenu: boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    showPrintDialog(mode: PrintDialog['mode']): void;
    save(): void;
    saveAsNew(): void;
    expand(): Promise<void>;
    undo(): void;
    redo(): void;
    reset(): void;
    showSaveLoadDialog(): void;
    showAddDialog(): void;
}
