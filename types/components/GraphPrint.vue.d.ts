import { Vue } from 'vue-property-decorator';
import Graph from './Graph.vue';
import type DiagramVm from './Diagram.vue';
import type cytoscape from 'cytoscape';
export default class GraphPrint extends Vue {
    readonly diagramVm: DiagramVm;
    readonly printContentEl?: HTMLDivElement;
    readonly graphVm?: Graph;
    printing: boolean;
    graphScaling: number;
    title: string;
    mode: 'print' | 'pdf' | 'png';
    orientation: 'portrait' | 'landscape';
    size: 'A5' | 'A4' | 'A3';
    fitToPaper: boolean;
    includeMargin: boolean;
    rotate: boolean;
    contentSize: {
        width: number;
        height: number;
    };
    get paperSize(): {
        width: number;
        height: number;
        margin: number;
    };
    get diagram(): import("../diagram").default;
    mounted(): void;
    onReadyToPrint(graph: cytoscape.Core): Promise<void>;
}
