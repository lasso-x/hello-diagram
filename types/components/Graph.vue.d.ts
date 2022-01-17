import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, LayoutDefinition, Relation } from '@/diagram';
import cytoscape from 'cytoscape';
import 'cytoscape-panzoom/cytoscape.js-panzoom.css';
import DiagramVue from './Diagram.vue';
export default class Graph extends Vue {
    readonly diagramVm: DiagramVue;
    readonly printMode: boolean;
    readonly graphContainerEl: HTMLElement;
    _graph?: cytoscape.Core;
    addedItems: Map<string, Entity | Relation>;
    onDestroy?: () => void;
    get diagram(): Diagram;
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
