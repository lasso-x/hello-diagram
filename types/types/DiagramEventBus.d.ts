import { Entity, LayoutDefinition, Relation } from '@/diagram';
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
    initial?: boolean;
} | {
    name: 'graph.fit';
} | {
    name: 'editor.open';
    target: Entity | Relation;
});
export default class DiagramEventBus extends EventBus<DiagramEvent> {
}
