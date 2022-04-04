import Vue from 'vue';
import DiagramEventBus from './types/DiagramEventBus';
import DiagramData, { DiagramDataDefinition, Change } from './types/DiagramData';
import SavedDiagram from './types/SavedDiagram';
export default class Diagram {
    static init(config: DiagramConfig): Diagram;
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
    methods: Pick<DiagramConfigMethods, ('getSavedDiagrams' | 'saveDiagram' | 'deleteSavedDiagram' | 'getDefaultSavedDiagramId' | 'setDefaultSavedDiagramId' | 'getPrintTitle' | 'getPrintFilename' | 'convertPngToPdf' | 'getEntityData' | 'searchEntities' | 'getContextMenuActions')>;
    initialZoomLevel: number | null;
    compactWidth: number;
    dragAndDropGridSize: number;
    enableEditing: boolean;
    enableStyleEditing: boolean;
    enableDragAndDrop: boolean;
    enableExpand: boolean;
    enableSaving: boolean;
    enableSharing: boolean;
    saveSettingsToLocalStorage: boolean;
    isLoading: boolean;
    loadSavedDiagramsPromise: Promise<SavedDiagram[]> | null;
    savedDiagrams: SavedDiagram[];
    savedDiagramsMap: Map<string, SavedDiagram>;
    defaultSavedDiagramId: string | null;
    activeDiagram: ActiveDiagram;
    hasActiveDiagram: boolean;
    hasUnsavedChanges: boolean;
    isSaving: boolean;
    constructor(config: DiagramConfig);
    render(container: Element): HTMLDivElement;
    setActiveDiagram(activeDiagram: ActiveDiagram): void;
    loadSavedDiagrams(): Promise<void>;
    getDefaultSavedDiagramId(): Promise<string | null>;
    setDefaultSavedDiagramId(id: string | null): Promise<void>;
    save(overwrite?: boolean): Promise<void>;
    load(savedDiagram?: SavedDiagram): Promise<void>;
    reset(): void;
    search(type: EntityType, searchString: string): Entity[];
    search(type: RelationType, searchString: string): Relation[];
}
export interface DiagramConfig {
    mainEntityId: string;
    entityTypes?: EntityTypeDefinition[];
    relationTypes?: RelationTypeDefinition[];
    fieldGroups?: FieldGroupDefinition[];
    filters?: FilterDefinition[];
    layouts?: LayoutDefinition[];
    methods?: DiagramConfigMethods;
    initialZoomLevel?: number;
    compactWidth?: number;
    dragAndDropGridSize?: number;
    enableEditing?: boolean;
    enableStyleEditing?: boolean;
    enableDragAndDrop?: boolean;
    enableExpand?: boolean;
    enableSaving?: boolean;
    enableSharing?: boolean;
    saveSettingsToLocalStorage?: boolean;
}
export interface DiagramConfigMethods {
    getSavedDiagrams?: () => Promise<SavedDiagram[]>;
    saveDiagram?: (context: {
        savedDiagram: SavedDiagram;
        generatePng: (options?: {
            orientation?: 'portrait' | 'landscape';
            size?: 'A5' | 'A4' | 'A3';
        }) => Promise<Blob>;
    }) => Promise<string | void>;
    deleteSavedDiagram?: (savedDiagram: SavedDiagram) => Promise<void>;
    getDefaultSavedDiagramId?: () => Promise<string | null>;
    setDefaultSavedDiagramId?: (id: string | null) => Promise<void>;
    getPrintTitle?: (context: PrintContext) => string;
    getPrintFilename?: (context: PrintContext) => string;
    convertPngToPdf?: (context: {
        blob: Blob;
        title: string;
        filename: string;
        size: 'A5' | 'A4' | 'A3';
        orientation: 'portrait' | 'landscape';
    }) => Promise<Blob>;
    getEntityData?: (options: {
        ids: string[];
        relationTypes: string[];
        parents: number;
        children: number;
    }) => Promise<DiagramDataDefinition>;
    searchEntities?: (context: {
        query: string;
        type: string;
    }) => Promise<EntityDefinition[]>;
    getContextMenuActions?: (context: {
        position: {
            x: number;
            y: number;
        };
        selectedItems: ContextItem[];
        selectedEntities: ContextItem[];
        selectedRelations: ContextItem[];
        hasSelectedItems: boolean;
        onlySelectedItem: ContextItem | null;
        commitChange: (change: Change) => void;
    }) => ContextMenuActions;
}
export interface PrintContext {
    mainEntity: ContextItem;
    hasDataChanges: boolean;
    date: Date;
    formattedDate: string;
    formattedTime: string;
}
export declare type ContextMenuActions = Arrayable<ContextMenuAction | null>[];
export interface ContextMenuAction {
    icon?: string;
    label: string;
    disabled?: boolean;
    submenu?: ContextMenuActions;
    onClick?: () => void;
}
export declare class ActiveDiagram {
    constructor(diagram: Diagram, options?: {
        id?: string;
        title?: string;
        description?: string;
        shared?: boolean;
        data?: DiagramData;
        settings?: Settings;
    });
    diagram: Diagram;
    id: string;
    title: string;
    description: string;
    shared: boolean;
    data: DiagramData;
    settings: Settings;
    reset(): void;
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
    labels: EntityTypeDefinition['labels'];
    style: EntityStyle;
    styleBuilder?: EntityStyleBuilder;
    printStyle?: EntityStyle;
    printStyleBuilder?: EntityStyleBuilder;
    searchable: boolean;
    searchResultBuilder: SearchResultBuilder;
    fieldGroups: FieldGroup[];
    fields: Field[];
    searchableFields: Field[];
    supportedRelations: Map<string, {
        type: RelationType;
        supports: RelationTypeSupport[];
        supportsParent: boolean;
        supportsAddExistingParents: boolean;
        supportsChild: boolean;
        supportsAddExistingChildren: boolean;
    }>;
    constructor(options: EntityTypeDefinition);
}
export interface EntityTypeDefinition {
    id: string;
    icon?: string;
    labels: {
        singular: string;
        plural: string;
        editorLabel?: (data: Record<string, any>) => string;
        editorDescription?: (data: Record<string, any>) => string;
    };
    style?: EntityTypeStyleArgument;
    printStyle?: EntityTypeStyleArgument;
    searchable?: boolean;
    searchResultBuilder?: SearchResultBuilder;
}
export declare type EntityTypeStyleArgument = EntityStyle | EntityStyleBuilder;
export declare type EntityStyleBuilder = (context: ContextItem) => EntityStyle;
export declare class RelationType {
    id: string;
    labels: RelationTypeDefinition['labels'];
    style: RelationStyle;
    styleBuilder?: RelationStyleBuilder;
    printStyle?: RelationStyle;
    printStyleBuilder?: RelationStyleBuilder;
    supports: RelationTypeSupport[];
    searchable: boolean;
    fieldGroups: FieldGroup[];
    fields: Field[];
    searchableFields: Field[];
    constructor(options: RelationTypeDefinition);
}
export declare type RelationTypeDefinition = {
    id: string;
    labels: {
        singular: string;
        plural: string;
        singularFrom?: string;
        pluralFrom?: string;
        singularTo?: string;
        pluralTo?: string;
        editorLabel?: (data: Record<string, any>) => string;
        editorDescription?: (data: Record<string, any>) => string;
        newParent?: string;
        newChild?: string;
        existingParents?: string;
        existingChildren?: string;
    };
    style?: RelationTypeStyleArgument;
    printStyle?: RelationTypeStyleArgument;
    supports: RelationTypeSupportDefinition[];
    searchable?: boolean;
};
export declare type RelationTypeStyleArgument = RelationStyle | RelationStyleBuilder;
export declare type RelationStyleBuilder = (context: ContextItem) => RelationStyle;
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
export declare type SearchResultBuilder = (context: ContextItem) => SearchResult;
export interface SearchResult {
    text: string;
    supertext?: string | null;
    subtext?: string | null;
}
export declare class Entity {
    diagram: Diagram;
    readonly isEntity = true;
    readonly isRelation = false;
    type: EntityType;
    id: string;
    initialState: Pick<Entity, 'position' | 'data' | 'style'>;
    position?: {
        x: number;
        y: number;
    };
    data: Record<string, any>;
    style: EntityStyle;
    isMainEntity: boolean;
    isParent: boolean;
    isChild: boolean;
    expanded: boolean;
    builtTypeStyle: EntityStyle;
    builtTypePrintStyle: EntityStyle;
    builtStyle: EntityStyle;
    builtPrintStyle: EntityStyle;
    constructor(diagram: Diagram, options: EntityDefinition);
    get fieldGroups(): FieldGroup[];
    buildStyle(): void;
}
export interface EntityDefinition {
    type: string;
    id: string;
    position?: {
        x: number;
        y: number;
    };
    data?: Record<string, any>;
    style?: EntityStyle;
}
export interface EntityStyle {
    minWidth?: number;
    maxWidth?: number | 'none';
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
    initialState: Pick<Relation, 'data' | 'style'>;
    data: Record<string, any>;
    style: RelationStyle;
    isParent: boolean;
    isChild: boolean;
    builtTypeStyle: RelationStyle;
    builtTypePrintStyle: RelationStyle;
    builtStyle: RelationStyle;
    builtPrintStyle: RelationStyle;
    constructor(diagram: Diagram, options: RelationDefinition);
    get fieldGroups(): FieldGroup[];
    buildStyle(): void;
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
    taxi?: boolean;
    arrowFrom?: boolean;
    arrowTo?: boolean;
    arrowSize?: number;
    lineWidth?: number;
    lineStyle?: 'solid' | 'dotted' | 'dashed';
    lineColor?: string;
}
export declare class FieldGroup {
    id: string;
    title: string;
    fields: Field[];
    constructor(diagram: Diagram, options: {
        id: string;
        title: string;
        fields: (Field | FieldDefinition)[];
    });
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
    type: 'text' | 'boolean';
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
    searchable: boolean;
    editable: boolean;
    constructor(diagram: Diagram, fieldGroup: FieldGroup, options: FieldDefinition);
    get active(): boolean;
    set active(active: boolean);
    getValue(data: Record<string, any>): any;
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
    searchable?: boolean;
    editable?: boolean;
}
export declare class Filter {
    diagram: Diagram;
    id: string;
    title: string;
    filter: (context: ContextItem) => any;
    filterWhen: 'active' | 'inactive';
    startActive: boolean;
    constructor(diagram: Diagram, options: FilterDefinition);
    get active(): boolean;
    set active(active: boolean);
}
export interface FilterDefinition {
    id: string;
    title: string;
    filter: (context: ContextItem) => any;
    filterWhen?: 'active' | 'inactive';
    startActive?: boolean;
}
export interface LayoutDefinition {
    id: string;
    name: string;
    default?: boolean;
    type?: 'breadthfirst' | 'dagre';
    inverted?: boolean;
    spacingFactor?: number;
    animate?: boolean;
    animationDuration?: number;
    animationEasing?: string;
    directed?: boolean;
    grid?: boolean;
    maximal?: boolean;
    nodeSep?: number;
    edgeSep?: number;
    rankSep?: number;
    rankDir?: 'TB' | 'LR';
    align?: 'UL' | 'UR' | 'DL' | 'DR';
    ranker?: 'network-simplex' | 'tight-tree' | 'longest-path';
}
export declare class Settings {
    diagram: Diagram;
    initialState: Pick<Settings, 'activeFields' | 'activeFilters' | 'activeLayout'>;
    activeFields: Record<string, boolean | undefined>;
    activeFilters: Record<string, boolean | undefined>;
    activeLayout: LayoutDefinition | null;
    constructor(diagram: Diagram);
    init(): void;
    reset(): void;
    loadFromLocalStorage(): void;
    saveToLocalStorage(): void;
}
export declare const createContextItem: (item: Entity | Relation) => ContextItem;
export interface ContextItem {
    isEntity: boolean;
    isRelation: boolean;
    type: string;
    id: string;
    data: Record<string, any>;
    isMainEntity: boolean;
    isParent: boolean;
    isChild: boolean;
    activeLayout: LayoutDefinition | null;
}
export declare type Arrayable<T> = T | T[];
export * from './example';
