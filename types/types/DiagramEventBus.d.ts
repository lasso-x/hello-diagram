import { Entity, Relation } from '../diagram';
import EventBus from './EventBus';
export declare type DiagramEvent = ({
    name: 'entityDataChanged';
    entity: Entity;
} | {
    name: 'relationDataChanged';
    relation: Relation;
} | {
    name: 'settingsChanged';
} | {
    name: 'activeFieldsChanged';
} | {
    name: 'activeFiltersChanged';
});
export default class DiagramEventBus extends EventBus<DiagramEvent> {
}
