import { Vue } from 'vue-property-decorator';
import DiagramVue from './Diagram.vue';
export default class GraphPrint extends Vue {
    readonly diagramVm: DiagramVue;
    readonly printContentEl?: HTMLDivElement;
    printing: boolean;
    scaling: number;
    title: string;
    mode: 'print' | 'pdf' | 'png';
    orientation: 'portrait' | 'landscape';
    size: 'A5' | 'A4' | 'A3';
    includeMargin: boolean;
    get diagram(): import("../diagram").default;
    get finalSize(): {
        width: number;
        height: number;
        margin: number;
    };
    mounted(): void;
    onReadyToPrint(): Promise<void>;
}
