import { Vue } from 'vue-property-decorator';
import { Entity, LayoutDefinition, Relation } from '@/diagram';
import cytoscape from 'cytoscape';
import 'cytoscape-panzoom/cytoscape.js-panzoom.css';
import type DiagramVm from './Diagram.vue';
export default class Graph extends Vue {
    readonly diagramVm: DiagramVm;
    get graphVm(): this;
    readonly printMode: boolean;
    readonly graphContainerEl: HTMLElement;
    readonly graphNodesEl: HTMLElement;
    _graph?: cytoscape.Core;
    addedItems: Map<string, Entity | Relation>;
    entities: Entity[];
    relations: Relation[];
    elementHovered: boolean;
    contextMenu: {
        show: boolean;
        position: cytoscape.Position;
        modelPosition: cytoscape.Position;
        selectedItems: (Entity | Relation)[];
    };
    onDestroy?: () => void;
    get diagram(): import("../diagram").default;
    get el(): HTMLElement;
    get fitPadding(): 0 | 16;
    mounted(): void;
    beforeDestroy(): void;
    redirectCytoscapeBlur(event: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    onResize(): void;
    initialize(): void;
    clearElements(): void;
    updateElements(): Promise<void>;
    runFilters(): void;
    layout(layout?: LayoutDefinition | null, animate?: boolean): Promise<void> | undefined;
    fit(): void;
}
