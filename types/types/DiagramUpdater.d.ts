import type { ActiveDiagram, Entity, EntityDefinition, Field, Relation, RelationDefinition } from '../diagram';
import ReactiveSet from '../util/reactive-set';
export interface CurrentGraph {
    entities: Map<string, Entity>;
    relations: Map<string, Relation>;
}
export interface NewGraph {
    entities: Map<string, EntityDefinition>;
    relations: Map<string, RelationDefinition>;
}
export interface ComparisonGraph {
    entities: Map<string, ComparisonGraphEntity>;
    relations: Map<string, ComparisonGraphRelation>;
}
export interface ComparisonGraphEntity {
    current: Entity | null;
    new: EntityDefinition | null;
}
export interface ComparisonGraphRelation {
    current: Relation | null;
    new: RelationDefinition | null;
    fromEntity: ComparisonGraphEntity;
    toEntity: ComparisonGraphEntity;
}
export interface Addition {
    checked: boolean;
    entities: Map<string, {
        entity: EntityDefinition;
        fields: DataChangeField[];
        previouslyDeleted: boolean;
    }>;
    relations: Map<string, {
        relation: RelationDefinition;
        fields: DataChangeField[];
        previouslyDeleted: boolean;
    }>;
}
export interface Removal {
    checked: boolean;
    entities: Map<string, {
        entity: Entity;
        fields: DataChangeField[];
        isCustom: boolean;
    }>;
    relations: Map<string, {
        relation: Relation;
        fields: DataChangeField[];
        isCustom: boolean;
    }>;
}
export interface DataChange {
    checked: boolean;
    entities: Map<string, {
        entity: Entity;
        fields: DataChangeField[];
    }>;
    relations: Map<string, {
        relation: Relation;
        fields: DataChangeField[];
    }>;
}
export interface DataChangeField {
    checked: boolean;
    field: Field;
    currentValue: any;
    currentValueLabel: string;
    currentInitialValue: any;
    currentInitialValueLabel: string;
    newValue: any;
    newValueLabel: string;
}
export default class DiagramUpdater {
    private static defaultGraphCache;
    private static inclusiveGraphCache;
    private activeDiagram;
    private entityTypeOrders;
    private relationTypeOrders;
    private __previouslyDeleted;
    private promises;
    private cacheKeys;
    loading: boolean;
    loaded: boolean;
    additions: ReactiveSet<Addition>;
    removals: ReactiveSet<Removal>;
    dataChanges: ReactiveSet<DataChange>;
    updateCount: number;
    defaultCheckedUpdateCount: number;
    constructor(activeDiagram: ActiveDiagram);
    private get previouslyDeleted();
    get hasUpdates(): boolean;
    clear(): void;
    updateCacheKeys(): void;
    loadIfCached(): Promise<boolean>;
    load(): Promise<boolean>;
    commit(runLayout?: boolean): void;
    private getDefaultGraphCacheKey;
    private getInclusiveGraphCacheKey;
    private fetchDefaultGraph;
    private fetchInclusiveGraph;
    private createNewGraph;
    private sortResponseData;
    private createComparisonGraph;
    private createFields;
    private getAdditions;
    private getRemovals;
    private getDataChanges;
}
