import { Vue } from 'vue-property-decorator';
import type Graph from './Graph.vue';
import type { Core, Position, EdgeSingular } from 'cytoscape';
declare type Side = 'top' | 'bottom' | 'left' | 'right';
declare type Point = {
    isSource: boolean;
    isTarget: boolean;
    directionAxis?: 'x' | 'y';
    x: number;
    y: number;
    bounds: Record<'x' | 'y', Record<'min' | 'max', number | null>>;
};
declare type Line = {
    position: Position;
    length: number;
    rotation: number;
};
declare type NPoint = {
    x: number;
    y: number;
};
declare type NEndpoint = {
    side: Side;
    axis: 'x' | 'y';
    x: number;
    y: number;
};
declare type NLine = {
    axis: 'x' | 'y';
    points: [NPoint, NPoint];
    x: number;
    y: number;
    length: number;
};
export default class GraphEdgePoints extends Vue {
    readonly graphVm: Graph;
    get graph(): Core;
    log: (...data: any[]) => void;
    _edge: EdgeSingular | null;
    n_sourceEndpoint: NEndpoint | null;
    n_targetEndpoint: NEndpoint | null;
    n_points: NPoint[];
    n_lines: NLine[];
    n_dragging: {
        lines: NLine[];
        offset: Position;
        moved?: boolean;
    } | null;
    get n_liness(): {
        points: NPoint[];
        axis: import("cytoscape").PositionDimension;
        crossAxis: import("cytoscape").PositionDimension;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly rotation: number;
        axisValue1: number;
        axisValue2: number;
        crossAxisValue: number;
        length: number;
    }[];
    get n_tLines(): {
        line: NLine;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly rotation: number;
    }[];
    points: Point[];
    get lines(): Line[];
    dragging: {
        point?: Point;
        line?: [Point, Point];
        offset: Position;
        moved?: boolean;
    } | null;
    onDestroy: (() => void) | null;
    mounted(): void;
    beforeDestroy(): void;
    setEdge(edge: EdgeSingular | null): void;
    updateEdge(): void;
    updatePoints(): void;
    mousePosToModelPos(clientX: number, clientY: number): {
        x: number;
        y: number;
    };
    snapPos(pos: Position): Position;
}
export {};
