import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
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
    position: cytoscape.Position;
    customPath: any;
    hidden: boolean;
    selected: boolean;
    positioning: boolean;
    get relation(): import("../diagram").Relation | undefined;
    get style(): {
        zIndex: string;
        transform: string;
        visibility: string;
        color: string;
    };
    get labels(): string[];
    created(): void;
    beforeDestroy(): void;
    updatePosition(): void;
    onPosition(): void;
    onData(): void;
}
