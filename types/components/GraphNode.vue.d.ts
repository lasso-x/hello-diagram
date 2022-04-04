import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
import type Graph from './Graph.vue';
import type cytoscape from 'cytoscape';
interface Field {
    legendColor?: string | null;
    text: string;
}
export default class GraphNode extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    readonly graphVm: Graph;
    readonly id: string;
    el?: HTMLElement;
    node?: cytoscape.NodeSingular;
    position: cytoscape.Position;
    hidden: boolean;
    selected: boolean;
    labels: Field[];
    fields: Field[];
    get entity(): import("../diagram").Entity | undefined;
    get entityStyle(): import("../diagram").EntityStyle;
    get style(): {
        transform: string;
        visibility: string;
        minWidth: string | undefined;
        maxWidth: string | undefined;
        borderWidth: string;
        borderStyle: "solid" | "dotted" | "dashed" | undefined;
        borderColor: string | undefined;
        boxShadow: string;
    };
    get labelsStyle(): {
        color: string;
        backgroundColor: string | undefined;
    };
    get fieldsStyle(): {
        borderWidth: string;
        borderTopWidth: string;
        borderStyle: "solid" | "dotted" | "dashed" | undefined;
        borderColor: string | undefined;
        color: string;
        backgroundColor: string | undefined;
    };
    created(): void;
    mounted(): void;
    beforeDestroy(): void;
    updateFields(): void;
    onPosition(): void;
    onData(): void;
    onRectChanged(rect: DOMRect, oldRect: DOMRect | null): void;
}
export {};
