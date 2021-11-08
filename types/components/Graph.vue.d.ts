import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, Relation } from '@/diagram';
import cytoscape from 'cytoscape';
import 'cytoscape-panzoom/cytoscape.js-panzoom.css';
export default class Graph extends Vue {
    readonly diagram: Diagram;
    readonly graphContainerEl: HTMLElement;
    _graph?: cytoscape.Core;
    addedItems: Map<string, Entity | Relation>;
    activeDiagramChanged: boolean;
    onDestroy?: () => void;
    get el(): HTMLElement;
    mounted(): void;
    beforeDestroy(): void;
    redirectCytoscapeBlur(event: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    onResize(): void;
    initialize(): void;
    updateElements(): void;
    runLayout(animate?: boolean): Promise<void> | undefined;
    fitInGraph(): void;
}
