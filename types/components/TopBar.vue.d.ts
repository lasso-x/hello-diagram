import DiagramVue from '../DiagramVue';
import type DiagramVm from './Diagram.vue';
import type Diagram from '../diagram';
export default class TopBar extends DiagramVue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    showSaveAsDropdownMenu: boolean;
    showLoadDropdownMenu: boolean;
    showLayoutDropdownMenu: boolean;
    showEditDropdownMenu: boolean;
    log: (...data: any[]) => void;
    get compact(): boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    get showTaxiToggle(): boolean;
    save(overwrite?: boolean): Promise<void>;
    expand(): Promise<void>;
    undo(): void;
    redo(): void;
    reset(): void;
    showAddDialog(): void;
    showSaveDialog(): void;
    showEditDiagramDialog(): void;
    showConfirmDeleteDiagramDialog(): void;
}
