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
    get mainEntity(): Entity | undefined;
    get canUndo(): boolean;
    get canRedo(): boolean;
    add(options: Exclude<Change['add'], undefined>): void;
    remove(options: Exclude<Change['remove'], undefined>): void;
    edit(options: Exclude<Change['edit'], undefined>): void;
    commitChange(change: Change, isInitial?: boolean): void;
    undo(trackEvents?: boolean): void;
    redo(trackEvents?: boolean): void;
    reset(): void;
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
    apply: (trackEvents?: boolean) => boolean;
    revert: (trackEvents?: boolean) => void;
}
export interface Change {
    add?: {
        entities?: EntityDefinition[];
        relations?: RelationDefinition[];
    };
    remove?: {
        entities?: string[];
        relations?: string[];
    };
    edit?: {
        entities?: EntityEdit[];
        relations?: RelationEdit[];
    };
    layout?: string;
    moveEntities?: EntityMove[];
}
export interface EntityEdit {
    id: string;
    data?: Record<string, any>;
    style?: EntityStyle;
}
export interface RelationEdit {
    id: string;
    data?: Record<string, any>;
    style?: RelationStyle;
}
export interface EntityMove {
    id: string;
    x: number;
    y: number;
}
