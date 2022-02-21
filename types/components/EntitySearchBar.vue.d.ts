import { Vue } from 'vue-property-decorator';
import { default as Diagram, Entity, EntityDefinition, EntityType, SearchResult } from '@/diagram';
import TextField from './TextField.vue';
import type DiagramVm from './Diagram.vue';
export interface Suggestion extends SearchResult {
    id: string;
    entity?: Entity;
    entityDefinition?: EntityDefinition;
}
declare type Cache = Map<string, Promise<Suggestion[]>>;
export default class EntitySearchBar extends Vue {
    readonly diagramVm: DiagramVm;
    readonly entityType?: EntityType;
    readonly selectedSuggestion?: Suggestion;
    readonly textField: TextField;
    readonly suggestionsEl: HTMLElement;
    focused: boolean;
    inputFocused: boolean;
    suggestionsFocused: boolean;
    showSuggestions: boolean;
    inputText: string;
    suggestionsPromise: Promise<void> | null;
    suggestions: Suggestion[] | null;
    activeSuggestionIndex: number;
    viewportRect: DOMRect | null;
    textFieldRect: DOMRect | null;
    get diagram(): Diagram;
    get cache(): Cache;
    get suggestionsStyle(): {
        top?: undefined;
        left?: undefined;
        width?: undefined;
        maxHeight?: undefined;
    } | {
        top: string;
        left: string;
        width: string;
        maxHeight: string;
    };
    get loadingSuggestions(): boolean;
    get noSuggestions(): boolean;
    get activeSuggestion(): Suggestion | null;
    onDestroy?: () => void;
    mounted(): void;
    beforeDestroy(): void;
    onInputKeyDown(e: KeyboardEvent): void;
    getSuggestionsFromDiagram(): Suggestion[];
    fetchSuggestionsFromServer(): Promise<Suggestion[]>;
    loadSuggestions(debounce?: boolean): Promise<void>;
    scrollActiveSuggestionIntoView(): void;
    selectSuggestion(suggestion: Suggestion | null): void;
    onEntityTypeChanged(): void;
    onSelectedSuggestionChanged(): void;
    onFocusedChanged(): void;
    onInputTextChanged(): void;
    onSuggestionsChanged(): void;
}
export {};
