import type { Entity, LayoutDefinition, Relation } from '@/diagram';
import EventBus from './EventBus';
export declare type DiagramEvent = ({
    name: 'dataUpdated';
} | {
    name: 'undo';
} | {
    name: 'redo';
} | {
    name: 'settingsChanged';
} | {
    name: 'activeFieldsChanged';
} | {
    name: 'activeFiltersChanged';
} | {
    name: 'graph.layout';
    layout: LayoutDefinition;
    applyToLastChange?: boolean;
} | {
    name: 'graph.fit';
} | {
    name: 'graph.spreadTaxiEdges';
} | {
    name: 'editor.open';
    target: Entity | Relation;
} | {
    name: 'print';
    mode: 'print' | 'pdf' | 'png';
    orientation: 'portrait' | 'landscape';
    size: 'A5' | 'A4' | 'A3';
    fitToPaper: boolean;
    includeMargin: boolean;
} | {
    name: 'printDone';
    file?: {
        filename: string;
        blob: Blob;
    };
});
export default class DiagramEventBus extends EventBus<DiagramEvent> {
}
