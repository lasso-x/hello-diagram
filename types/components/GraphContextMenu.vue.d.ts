/// <reference types="cytoscape" />
import { Vue } from 'vue-property-decorator';
import Diagram, { ContextItem, ContextMenuActions } from '@/diagram';
import type { Change } from '@/types/DiagramData';
import type DiagramVm from './Diagram.vue';
import type Graph from './Graph.vue';
export default class GraphContextMenu extends Vue {
    readonly diagram: Diagram;
    readonly diagramVm: DiagramVm;
    $refs: {
        positionEl?: HTMLElement;
    };
    showAddDropdownMenu: boolean;
    get graphVm(): Graph;
    get show(): boolean;
    set show(show: boolean);
    get position(): import("cytoscape").Position;
    get modelPosition(): import("cytoscape").Position;
    get selectedItems(): (import("../diagram").Entity | import("../diagram").Relation)[];
    get hasSelectedItems(): boolean;
    get onlySelectedItem(): import("../diagram").Entity | import("../diagram").Relation | null;
    get context(): {
        position: import("cytoscape").Position;
        selectedItems: ContextItem[];
        selectedEntities: ContextItem[];
        selectedRelations: ContextItem[];
        hasSelectedItems: boolean;
        onlySelectedItem: ContextItem | null;
        commitChange: (change: Change) => void;
    };
    get actions(): ContextMenuActions;
    showAddDialog(): void;
    removeSelectedItems(): void;
}
