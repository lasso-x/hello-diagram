import Vue from 'vue';
import DiagramEventBus from './types/DiagramEventBus';
import DiagramData, { DiagramDataDefinition, Change } from './types/DiagramData';
import SavedDiagram from './types/SavedDiagram';
import DiagramUpdater from './types/DiagramUpdater';
import { Store } from './store';
export default class Diagram {
    static init(config: DiagramConfig): Diagram;
    static defaultGraphCache: Map<string, Promise<DiagramDataDefinition | null>>;
    store: Store;
    element?: Element;
    vm?: Vue;
    eventBus: DiagramEventBus;
    userId: string;
    mainEntityId: string;
    initialSavedDiagram: SavedDiagram | null;
    entityTypes: EntityTypes;
    relationTypes: RelationTypes;
    fieldGroups: FieldGroup[];
    fields: Field[];
    filters: Filter[];
    layouts: LayoutDefinition[];
    methods: DiagramConfigMethods;
    spreadTaxiEdges: boolean;
    initialZoomLevel: number | null;
    initialPan: NonNullable<DiagramConfig['initialPan']> | null;
    fitOnResize: boolean;
    compactWidth: number;
    dragAndDropGridSize: number;
    hideDanglingEntitiesAfterFilter: boolean;
    enableEditing: boolean;
    enableStyleEditing: boolean;
    showInactiveEditorFields: boolean;
    enableDragAndDrop: boolean;
    enableTaxiEditing: boolean;
    enableExpand: boolean;
    enableSaving: boolean;
    enableDocuments: boolean;
    enableSharing: boolean;
    updater: {
        enabled: boolean;
        dialog: {
            description: string;
        };
    };
    printSettings: {
        orientation?: 'portrait' | 'landscape';
        size?: 'A5' | 'A4' | 'A3';
        fitToPaper?: boolean;
        includeMargin?: boolean;
        hideLogo?: boolean;
    };
    saveSettingsToLocalStorage: boolean;
    userPreferences: UserPreferences;
    isLoading: boolean;
    loadSavedDiagramsPromise: Promise<SavedDiagram[]> | null;
    savedDiagrams: SavedDiagram[];
    savedDiagramsMap: Map<string, SavedDiagram>;
    defaultDiagram: {
        new?: boolean;
        savedDiagramId?: string;
    };
    activeDiagram: ActiveDiagram;
    hasActiveDiagram: boolean;
    hasUnsavedChanges: boolean;
    hasSavedSinceLoad: boolean;
    isSaving: boolean;
    constructor(config: DiagramConfig);
    render(container: Element): HTMLDivElement;
    setActiveDiagram(activeDiagram: ActiveDiagram): void;
    loadSavedDiagrams(): Promise<void>;
    getDefaultDiagram(): Promise<{
        new?: boolean | undefined;
        savedDiagramId?: string | undefined;
    }>;
    setDefaultDiagram(defaultDiagram: Diagram['defaultDiagram']): Promise<void>;
    save(overwrite?: boolean): Promise<void>;
    updateSavedDiagram(savedDiagram: SavedDiagram): Promise<void>;
    generatePng(options?: GeneratePngOptions): Promise<Blob>;
    loadSavedDiagram(savedDiagram: SavedDiagram): Promise<void>;
    loadNewDiagram(): Promise<void>;
    load(savedDiagram?: SavedDiagram): Promise<void>;
    deleteSavedDiagram(savedDiagram: SavedDiagram): Promise<void>;
    reset(): void;
    search(type: EntityType, searchString: string): Entity[];
    search(type: RelationType, searchString: string): Relation[];
    fetchDefaultGraph(): Promise<DiagramDataDefinition | null>;
}
export interface DiagramConfig {
    userId?: string;
    mainEntityId: string;
    savedDiagram?: SavedDiagram;
    entityTypes?: EntityTypeDefinition[];
    relationTypes?: RelationTypeDefinition[];
    fieldGroups?: FieldGroupDefinition[];
    filters?: FilterDefinition[];
    layouts?: LayoutDefinition[];
    methods?: DiagramConfigMethods;
    spreadTaxiEdges?: boolean;
    initialZoomLevel?: number;
    initialPan?: {
        x?: 'left' | 'center' | 'right';
        y?: 'top' | 'center' | 'bottom';
    };
    fitOnResize?: boolean;
    compactWidth?: number;
    dragAndDropGridSize?: number;
    hideDanglingEntitiesAfterFilter?: boolean;
    enableEditing?: boolean;
    enableStyleEditing?: boolean;
    showInactiveEditorFields?: boolean;
    enableDragAndDrop?: boolean;
    enableTaxiEditing?: boolean;
    enableExpand?: boolean;
    enableSaving?: boolean;
    enableDocuments?: boolean;
    enableSharing?: boolean;
    updater?: {
        enabled?: boolean;
        dialog?: {
            description?: string;
        };
    };
    printSettings?: {
        orientation?: 'portrait' | 'landscape';
        size?: 'A5' | 'A4' | 'A3';
        fitToPaper?: boolean;
        includeMargin?: boolean;
        hideLogo?: boolean;
    };
    saveSettingsToLocalStorage?: boolean;
}
export interface DiagramConfigMethods {
    getSavedDiagrams?: () => Promise<SavedDiagram[]>;
    loadSavedDiagram?: (savedDiagram: SavedDiagram) => Promise<SavedDiagram>;
    saveDiagram?: (context: {
        savedDiagram: SavedDiagram;
        isActiveDiagram: boolean;
        generatePng: (options?: GeneratePngOptions) => Promise<Blob>;
    }) => Promise<string | void>;
    deleteSavedDiagram?: (savedDiagram: SavedDiagram) => Promise<void>;
    getDefaultDiagram?: () => Promise<Diagram['defaultDiagram']>;
    setDefaultDiagram?: (defaultDiagram: Diagram['defaultDiagram']) => Promise<void>;
    getUserPreferences?(): Promise<UserPreferencesDefinition | null>;
    getUserPreferences?(): Promise<unknown>;
    setUserPreferences?: (userPreferences: UserPreferencesDefinition) => Promise<void>;
    getPrintTitle?: (context: PrintContext) => string;
    getPrintFilename?: (context: PrintContext) => string;
    convertPngToPdf?: (context: {
        blob: Blob;
        title: string;
        filename: string;
        size: 'A5' | 'A4' | 'A3';
        orientation: 'portrait' | 'landscape';
        includeMargin: boolean;
        pageCount: number;
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
    }) => ContextMenuActions | {
        before?: ContextMenuActions;
        after?: ContextMenuActions;
    };
    openFullscreen?: () => void;
}
export interface GeneratePngOptions {
    paperOrientation?: 'portrait' | 'landscape';
    paperSize?: 'A5' | 'A4' | 'A3';
    width?: number;
    height?: number;
    grow?: boolean | 'width' | 'height';
    scaling?: number;
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
    iconColor?: string;
    label: string;
    disabled?: boolean;
    submenu?: ContextMenuActions;
    onClick?: () => void;
}
export declare class ActiveDiagram {
    constructor(diagram: Diagram, options?: {
        id?: string;
        ownerUserId?: string;
        title?: string;
        description?: string;
        shared?: boolean;
        data?: DiagramData;
        settings?: Settings;
        metadata?: Record<string, any>;
    });
    diagram: Diagram;
    id: string;
    ownerUserId: string;
    title: string;
    description: string;
    shared: boolean;
    data: DiagramData;
    settings: Settings;
    metadata: Record<string, any>;
    updater: DiagramUpdater;
    expanding: boolean;
    reset(): void;
    expand(entities?: Entity[]): Promise<void>;
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
    customCreatable: boolean;
    searchable: boolean;
    searchResultBuilder: SearchResultBuilder;
    showDetailsButton?: EntityTypeDefinition['showDetailsButton'];
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
        entityLabel?: (context: {
            data: Record<string, any>;
        }) => string;
        editorLabel?: (data: Record<string, any>) => string;
        editorDescription?: (data: Record<string, any>) => string;
    };
    style?: EntityTypeStyleArgument;
    printStyle?: EntityTypeStyleArgument;
    customCreatable?: boolean;
    searchable?: boolean;
    searchResultBuilder?: SearchResultBuilder;
    showDetailsButton?: Callbackable<(context: ContextItem) => {
        label?: string;
        onClick: () => void;
    } | null | undefined>;
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
    customCreatable: boolean;
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
    customCreatable?: boolean;
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
    isCustom: boolean;
    initialState: Pick<Entity, 'position' | 'data' | 'style'>;
    position?: {
        x: number;
        y: number;
    };
    data: Record<string, any>;
    style: EntityStyle;
    previewData: Record<string, any> | null;
    previewStyle: EntityStyle | null;
    isMainEntity: boolean;
    isParent: boolean;
    isChild: boolean;
    expanded: boolean;
    connectedRelations: Relation[];
    incomingRelations: Relation[];
    outgoingRelations: Relation[];
    builtTypeStyle: EntityStyle;
    builtTypePrintStyle: EntityStyle;
    builtStyle: EntityStyle;
    builtPrintStyle: EntityStyle;
    builtPreviewStyle: EntityStyle | null;
    constructor(diagram: Diagram, options: EntityDefinition);
    get label(): string;
    get fieldGroups(): FieldGroup[];
    buildBaseStyle({ context }: {
        context: ContextItem;
    }): EntityStyle;
    buildTypeStyle({ context, builtBaseStyle }: {
        context: ContextItem;
        builtBaseStyle: EntityStyle;
    }): EntityStyle;
    buildTypePrintStyle({ context, builtTypeStyle }: {
        context: ContextItem;
        builtTypeStyle: EntityStyle;
    }): EntityStyle;
    buildStyle({ builtTypeStyle, style }: {
        builtTypeStyle: EntityStyle;
        style: EntityStyle;
    }): EntityStyle;
    buildPrintStyle({ builtTypePrintStyle, style }: {
        builtTypePrintStyle: EntityStyle;
        style: EntityStyle;
    }): EntityStyle;
    buildAndApplyStyles(): void;
    buildAndApplyPreviewStyle(): void;
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
    isCustom: boolean;
    initialState: Pick<Relation, 'data' | 'style' | 'customTaxi'>;
    data: Record<string, any>;
    style: RelationStyle;
    customTaxi: CustomTaxi | null;
    previewData: Record<string, any> | null;
    previewStyle: RelationStyle | null;
    isParent: boolean;
    isChild: boolean;
    connectedEntities: Entity[];
    fromEntity: Entity | null;
    toEntity: Entity | null;
    builtTypeStyle: RelationStyle;
    builtTypePrintStyle: RelationStyle;
    builtStyle: RelationStyle;
    builtPrintStyle: RelationStyle;
    builtPreviewStyle: RelationStyle | null;
    constructor(diagram: Diagram, options: RelationDefinition);
    get fieldGroups(): FieldGroup[];
    buildBaseStyle({ context }: {
        context: ContextItem;
    }): RelationStyle;
    buildTypeStyle({ context, builtBaseStyle }: {
        context: ContextItem;
        builtBaseStyle: RelationStyle;
    }): RelationStyle;
    buildTypePrintStyle({ context, builtTypeStyle }: {
        context: ContextItem;
        builtTypeStyle: RelationStyle;
    }): RelationStyle;
    buildStyle({ builtTypeStyle, style }: {
        builtTypeStyle: RelationStyle;
        style: RelationStyle;
    }): RelationStyle;
    buildPrintStyle({ builtTypePrintStyle, style }: {
        builtTypePrintStyle: RelationStyle;
        style: RelationStyle;
    }): RelationStyle;
    buildAndApplyStyles(): void;
    buildAndApplyPreviewStyle(): void;
}
export interface RelationDefinition {
    type: string;
    id: string;
    from: string;
    to: string;
    data?: Record<string, any>;
    style?: RelationStyle;
    customTaxi?: CustomTaxi | null;
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
    showTitleInGraph: boolean;
    fields: Field[];
    constructor(diagram: Diagram, options: {
        id: string;
        title: string;
        showTitleInGraph?: boolean;
        fields: (Field | FieldDefinition)[];
    });
}
export interface FieldGroupDefinition {
    id: string;
    title: string;
    showTitleInGraph?: boolean;
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
    htmlFormatter?: (value: any) => any;
    validator?: (value: any, context: ContextItem) => true | {
        error: string;
    };
    isEntityLabel: boolean;
    isRelationLabel: boolean;
    addToLegend: boolean;
    legendColor: string | null;
    startActive: boolean;
    display: boolean;
    hideFromCustomizer: boolean;
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
    htmlFormatter?: (value: any) => any;
    validator?: (value: any, context: ContextItem) => boolean | {
        error: string;
    };
    isEntityLabel?: boolean;
    isRelationLabel?: boolean;
    addToLegend?: boolean;
    legendColor?: string;
    startActive?: boolean;
    display?: boolean;
    hideFromCustomizer?: boolean;
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
    saveToLocalStorage: boolean;
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
    saveToLocalStorage?: boolean;
}
export interface LayoutDefinition {
    id: string;
    name: string;
    default?: boolean;
    type?: 'breadthfirst' | 'dagre';
    taxi?: boolean;
    enableTaxiToggle?: boolean;
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
    initialState: Pick<Settings, 'activeFields' | 'activeFilters' | 'activeLayout' | 'enableTaxi'>;
    activeFields: Partial<Record<string, boolean>>;
    activeFilters: Partial<Record<string, boolean>>;
    activeLayout: LayoutDefinition | null;
    enableTaxi: boolean;
    constructor(diagram: Diagram);
    clone(): Settings;
    getDefaults(): {
        activeFields: Partial<Record<string, boolean>>;
        activeFilters: Partial<Record<string, boolean>>;
        activeLayout: LayoutDefinition | null;
        enableTaxi: boolean;
    };
    setInitialState(): void;
    reset(): void;
    setActiveLayout(layout: LayoutDefinition | null): void;
    setEnableTaxi(enableTaxi?: boolean): void;
}
export interface UserPreferencesDefinition {
    runLayoutAfterAddition?: boolean;
    settings?: {
        activeFields?: Partial<Record<string, boolean>>;
        activeFilters?: Partial<Record<string, boolean>>;
        activeLayout?: string | null;
        enableTaxi?: boolean;
    };
}
export declare class UserPreferences {
    diagram: Diagram;
    defaults: Pick<UserPreferences, ('runLayoutAfterAddition')>;
    runLayoutAfterAddition: boolean;
    settings: Settings;
    loaded: boolean;
    constructor(diagram: Diagram);
    getDefaults(): {
        runLayoutAfterAddition: boolean;
    };
    createDefinition(): UserPreferencesDefinition;
    load(): Promise<void>;
    save(): Promise<void>;
}
export declare const createContextItems: (items: (Entity | Relation)[]) => ContextItem[];
export declare const createContextItem: (item: Entity | Relation) => ContextItem;
export interface ContextItem {
    isEntity: boolean;
    isRelation: boolean;
    type: string;
    id: string;
    data: Record<string, any>;
    isParent: boolean;
    isChild: boolean;
    activeLayout: LayoutDefinition | null;
    isMainEntity: boolean;
    connectedRelations: ContextItem[];
    incomingRelations: ContextItem[];
    outgoingRelations: ContextItem[];
    fromEntity: ContextItem | null;
    toEntity: ContextItem | null;
    connectedEntities: ContextItem[];
}
export declare type Arrayable<T> = T | T[];
export declare type Callbackable<T extends (...args: any) => any> = T | ReturnType<T>;
export declare type Side = 'top' | 'bottom' | 'left' | 'right';
export declare type Axis = 'x' | 'y';
export interface CustomTaxi {
    from: CustomTaxiEndpoint;
    to: CustomTaxiEndpoint;
    segmentPoints: CustomTaxiSegmentPoint[];
}
export interface CustomTaxiEndpoint {
    side: Side;
    x: number;
    y: number;
}
export interface CustomTaxiSegmentPoint {
    x: number;
    y: number;
    temp?: boolean;
}
export * from './example';
