import Vue from 'vue';
import DiagramEventBus from './types/DiagramEventBus';
import DiagramData, { DiagramDataDefinition } from './types/DiagramData';
export default class Diagram {
    static init(config: DiagramConfig): Diagram;
    container?: HTMLElement;
    element?: Element;
    vm?: Vue;
    eventBus: DiagramEventBus;
    mainEntityId: string;
    entityTypes: EntityTypes;
    relationTypes: RelationTypes;
    fieldGroups: FieldGroup[];
    fields: Field[];
    filters: Filter[];
    layouts: LayoutDefinition[];
    methods: {
        getEntityData?: (options: {
            ids: string[];
            relationTypes: string[];
            parents: number;
            children: number;
        }) => Promise<DiagramDataDefinition>;
    };
    saveSettingsToLocalStorage: boolean;
    activeDiagram: ActiveDiagram;
    constructor(config: DiagramConfig);
    render(container: Element): HTMLDivElement;
}
export interface DiagramConfig {
    mainEntityId: string;
    entityTypes?: EntityTypeDefinition[];
    relationTypes?: RelationTypeDefinition[];
    fieldGroups?: FieldGroupDefinition[];
    filters?: FilterDefinition[];
    layouts?: LayoutDefinition[];
    methods?: {
        onBeforePrint?: () => void;
        onAfterPrint?: () => void;
        getSavedDiagrams?: () => Promise<unknown>;
        saveDiagram?: (savedDiagram: unknown) => Promise<void>;
        deleteSavedDiagram?: (savedDiagram: unknown) => Promise<void>;
        downloadPdf?: (blob: Blob) => Promise<void>;
        getEntityData?: (options: {
            ids: string[];
            relationTypes: string[];
            parents: number;
            children: number;
        }) => Promise<DiagramDataDefinition>;
    };
    savedDiagram?: unknown[];
    enableSaving?: boolean;
    enableSharing?: boolean;
    enableEditing?: boolean;
    saveSettingsToLocalStorage?: boolean;
}
export declare class ActiveDiagram {
    constructor(diagram: Diagram, data?: DiagramDataDefinition);
    diagram: Diagram;
    id: string;
    title: string;
    description: string;
    shared: boolean;
    data: DiagramData;
    settings: Settings;
    expand(): Promise<void>;
    setData(data: DiagramDataDefinition): void;
}
export declare class EntityTypes {
    constructor(items: EntityTypeDefinition[]);
    items: EntityType[];
    itemsMap: Map<string, EntityType>;
    has(idOritem: string | EntityType): boolean;
    get(id: string): EntityType;
    getMultiple(ids: string[]): EntityType[];
    pick(ids: string[]): EntityTypes;
}
export declare class RelationTypes {
    constructor(items: RelationTypeDefinition[]);
    items: RelationType[];
    itemsMap: Map<string, RelationType>;
    has(idOritem: string | RelationType): boolean;
    get(id: string): RelationType;
    getMultiple(ids: string[]): RelationType[];
    pick(ids: string[]): RelationTypes;
}
export declare class EntityType {
    id: string;
    icon?: string;
    labels: {
        singular: string;
        plural: string;
        editorLabel?: (data: Record<string, any>) => string;
    };
    style: EntityStyle;
    constructor(options: EntityTypeDefinition);
}
export interface EntityTypeDefinition {
    id: string;
    icon?: string;
    labels: {
        singular: string;
        plural: string;
        editorLabel?: (data: Record<string, any>) => string;
    };
    style?: EntityStyle;
}
export declare class RelationType {
    id: string;
    labels: {
        singular: string;
        plural: string;
        newParent?: string;
        newChild?: string;
        existingParents?: string;
        existingChildren?: string;
        singularFrom?: string;
        pluralFrom?: string;
        singularTo?: string;
        pluralTo?: string;
        editorLabel?: (data: Record<string, any>) => string;
    };
    style: RelationStyle;
    supports: RelationTypeSupport[];
    constructor(options: RelationTypeDefinition);
}
export declare type RelationTypeDefinition = {
    id: string;
    labels: {
        singular: string;
        plural: string;
        newParent?: string;
        newChild?: string;
        existingParents?: string;
        existingChildren?: string;
        singularFrom?: string;
        pluralFrom?: string;
        singularTo?: string;
        pluralTo?: string;
        editorLabel?: (data: Record<string, any>) => string;
    };
    style?: RelationStyle;
    supports: RelationTypeSupportDefinition[];
};
export declare class RelationTypeSupport {
    from: string;
    to: string;
    allowAddExisting: boolean;
    constructor(options: RelationTypeSupportDefinition);
}
export interface RelationTypeSupportDefinition {
    from: string;
    to: string;
    allowAddExisting?: boolean;
}
export declare class Entity {
    diagram: Diagram;
    readonly isEntity = true;
    readonly isRelation = false;
    type: EntityType;
    id: string;
    data: Record<string, any>;
    position: {
        x: number;
        y: number;
    } | null;
    style: EntityStyle;
    constructor(diagram: Diagram, options: EntityDefinition);
    get isMainEntity(): boolean;
    getFieldValue(field: Field): any;
}
export interface EntityDefinition {
    type: string;
    id: string;
    data?: Record<string, any>;
    position?: {
        x: number;
        y: number;
    };
    style?: EntityStyle;
}
export interface EntityStyle {
    backgroundColor?: string;
    borderColor?: string;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    borderWidth?: number;
    labelsBackgroundColor?: string;
}
export declare class Relation {
    diagram: Diagram;
    readonly isEntity = false;
    readonly isRelation = true;
    type: RelationType;
    id: string;
    from: string;
    to: string;
    data: Record<string, any>;
    style: RelationStyle;
    constructor(diagram: Diagram, options: RelationDefinition);
    getFieldValue(field: Field): any;
}
export interface RelationDefinition {
    type: string;
    id: string;
    from: string;
    to: string;
    data?: Record<string, any>;
    style?: RelationStyle;
}
export interface RelationStyle {
    arrowFrom?: boolean;
    arrowTo?: boolean;
    lineStyle?: 'solid' | 'dotted' | 'dashed';
}
export declare class FieldGroup {
    id: string;
    title: string;
    fields: Field[];
    constructor(diagram: Diagram, options: FieldGroupDefinition);
}
export interface FieldGroupDefinition {
    id: string;
    title: string;
    fields: FieldDefinition[];
}
export declare class Field {
    diagram: Diagram;
    fieldGroup: FieldGroup;
    id: string;
    fullId: string;
    type: 'text' | 'boolean' | 'radio-buttons';
    title: string;
    entityTypes: EntityTypes;
    relationTypes: RelationTypes;
    dataKey: string;
    getInitialValue?: (data: Record<string, any>) => any;
    formatter?: (value: any) => any;
    isEntityLabel: boolean;
    isRelationLabel: boolean;
    addToLegend: boolean;
    legendColor: string | null;
    startActive: boolean;
    display: boolean;
    constructor(diagram: Diagram, fieldGroup: FieldGroup, options: FieldDefinition);
    get active(): boolean;
    set active(active: boolean);
}
export interface FieldDefinition {
    id: string;
    type?: 'text' | 'boolean';
    title: string;
    entityTypes?: string[];
    relationTypes?: string[];
    dataKey: string;
    getInitialValue?: (data: Record<string, any>) => any;
    formatter?: (value: any) => any;
    isEntityLabel?: boolean;
    isRelationLabel?: boolean;
    addToLegend?: boolean;
    legendColor?: string;
    startActive?: boolean;
    display?: boolean;
}
export declare class Filter {
    diagram: Diagram;
    id: string;
    title: string;
    type: string | null;
    filter: (entity: any) => boolean;
    startActive: boolean;
    constructor(diagram: Diagram, options: FilterDefinition);
    get active(): boolean;
    set active(active: boolean);
}
export interface FilterDefinition {
    id: string;
    title: string;
    type?: string;
    filter?: (entity: any) => boolean;
    startActive?: boolean;
}
export interface LayoutDefinition {
    id: string;
    name: string;
    default?: boolean;
    directed?: boolean;
    inverted?: boolean;
    grid?: boolean;
    spacingFactor?: number;
    maximal?: boolean;
    animate?: boolean;
    animationDuration?: number;
    animationEasing?: string;
}
export declare class Settings {
    diagram: Diagram;
    activeFields: Record<string, boolean | undefined>;
    activeFilters: Record<string, boolean | undefined>;
    activeLayout: LayoutDefinition | null;
    constructor(diagram: Diagram);
    reset(): void;
    loadFromLocalStorage(): void;
    saveToLocalStorage(): void;
}
export * from './example';
