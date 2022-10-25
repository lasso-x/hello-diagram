import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type { default as Diagram, Relation } from '../diagram';
import type Graph from './Graph.vue';
import type cytoscape from 'cytoscape';
export default class GraphEdge extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    readonly graphVm: Graph;
    readonly id: string;
    edge?: cytoscape.EdgeSingular;
    fromNode?: cytoscape.NodeSingular;
    toNode?: cytoscape.NodeSingular;
    sourceNodePosition: cytoscape.Position;
    targetNodePosition: cytoscape.Position;
    sourceEndpointPosition: cytoscape.Position;
    targetEndpointPosition: cytoscape.Position;
    labelPosition: cytoscape.Position;
    customPath: any;
    customTaxi: any;
    hidden: boolean;
    selected: boolean;
    get relation(): Relation | undefined;
    get style(): {
        zIndex: string;
        transform: string;
        visibility: string;
        color: string;
    };
    get labels(): string[];
    mounted(): void;
    beforeDestroy(): void;
    onData(): void;
    onNodePosition(): void;
    fixCustomTaxi(): void;
    buildCustomTaxi(): void;
    updateNodePositions(): void;
    onCustomTaxiChange(): void;
    updateEndpointPositions(): void;
    updateLabelPosition(): void;
}
