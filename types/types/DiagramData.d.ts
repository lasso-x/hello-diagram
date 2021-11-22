import Diagram, { Entity, EntityDefinition, EntityStyle, Relation, RelationDefinition, RelationStyle } from '@/diagram';
export default class DiagramData {
    constructor(diagram: Diagram, options?: {
        data?: DiagramDataDefinition;
        changes?: Change[];
    });
    diagram: Diagram;
    initialData: {
        entities: Entity[];
        relations: Relation[];
        changes: Change[];
    };
    changes: CompiledChange[];
    undoneChanges: CompiledChange[];
    entitiesMap: Map<string, Entity>;
    entities: Entity[];
    relationsMap: Map<string, Relation>;
    relations: Relation[];
    get canUndo(): boolean;
    get canRedo(): boolean;
    add(options: Omit<AdditionChange, 'type'>): void;
    remove(options: Omit<RemovalChange, 'type'>): void;
    edit(options: Omit<EditChange, 'type'>): void;
    commitChange(change: Change, isInitial?: boolean): void;
    undo(trackEvents?: boolean): void;
    redo(trackEvents?: boolean): void;
    reset(): void;
    parseEntities(entities: EntityDefinition[]): Entity[];
    parseRelations(relations: RelationDefinition[]): Relation[];
    private _compileChange;
    private _addEntities;
    private _addRelations;
    private _removeEntities;
    private _removeRelations;
    private _updateEntitiesArray;
    private _updateRelationsArray;
}
export interface DiagramDataDefinition {
    entities?: EntityDefinition[];
    relations?: RelationDefinition[];
}
export interface CompiledChange {
    change: Change;
    apply: (trackEvents?: boolean) => void | false;
    revert: (trackEvents?: boolean) => void;
}
export declare type Change = (AdditionChange | RemovalChange | EditChange);
export interface AdditionChange {
    type: 'addition';
    entities?: EntityDefinition[];
    relations?: RelationDefinition[];
}
export interface RemovalChange {
    type: 'removal';
    entityIds?: string[];
    relationIds?: string[];
}
export interface EditChange {
    type: 'edit';
    entities?: ({
        id: string;
        data?: Record<string, any>;
        style?: EntityStyle;
    })[];
    relations?: ({
        id: string;
        data?: Record<string, any>;
        style?: RelationStyle;
    })[];
}
