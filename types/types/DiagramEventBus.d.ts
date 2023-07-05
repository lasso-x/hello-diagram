import type { Entity, GeneratePngOptions, LayoutDefinition, Relation } from '../diagram';
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
    name: 'graph.updatedElements';
} | {
    name: 'graph.deleteSelected';
} | {
    name: 'editor.open';
    target: Entity | Relation;
} | {
    name: 'editor.previewUpdated';
} | {
    name: 'editor.close';
} | ({
    name: 'print';
    mode: 'print' | 'pdf' | 'png';
    paper: boolean;
    includeMargin: boolean;
} & GeneratePngOptions) | {
    name: 'printDone';
    file?: {
        filename: string;
        blob: Blob;
    };
});
export default class DiagramEventBus extends EventBus<DiagramEvent> {
}
