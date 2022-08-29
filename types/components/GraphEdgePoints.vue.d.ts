import { Vue } from 'vue-property-decorator';
import type Graph from './Graph.vue';
import type { Core, Position, EdgeSingular } from 'cytoscape';
import type { default as Diagram } from '@/diagram';
declare type Side = 'top' | 'bottom' | 'left' | 'right';
declare type NPoint = {
    x: number;
    y: number;
    temp?: boolean;
};
declare type NEndpoint = {
    side: Side;
    axis: 'x' | 'y';
    x: number;
    y: number;
};
export default class GraphEdgePoints extends Vue {
    readonly diagram: Diagram;
    readonly graphVm: Graph;
    get graph(): Core;
    log: (...data: any[]) => void;
    _edge: EdgeSingular | null;
    lineThickness: number;
    n_sourceEndpoint: NEndpoint | null;
    n_targetEndpoint: NEndpoint | null;
    n_points: NPoint[];
    n_dragging: {
        lines: GraphEdgePoints['n_lines'];
        offset: Position;
        endpointMode?: boolean;
        moved?: boolean;
    } | null;
    get n_lines(): {
        points: NPoint[];
        axis: import("../diagram").Axis;
        crossAxis: import("../diagram").Axis;
        isFirst: boolean;
        isLast: boolean;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly rotation: number;
        axisValue1: number;
        axisValue2: number;
        crossAxisValue: number;
        crossAxisValueSnapped: number;
        length: number;
    }[];
    get lineHeight(): number;
    get linePadding(): number;
    get pointSizeInner(): number;
    get pointSize(): number;
    get pointPadding(): number;
    onDestroy: (() => void) | null;
    mounted(): void;
    beforeDestroy(): void;
    setEdge(edge: EdgeSingular | null): void;
    updateEdge(): void;
    onEdgeData(): void;
    updatePoints(): void;
    mousePosToModelPos(clientX: number, clientY: number): {
        x: number;
        y: number;
    };
    onLineDblClick(i: number, event: MouseEvent): void;
    onPointDblClick(i: number, event: MouseEvent): void;
    updateCustomTaxi(commit?: boolean): void;
}
export {};
