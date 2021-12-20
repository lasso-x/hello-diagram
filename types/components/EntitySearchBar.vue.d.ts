import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, EntityType, SearchResult } from '@/diagram';
import TextField from './TextField.vue';
import DiagramVue from './Diagram.vue';
interface Suggestion extends SearchResult {
    entity: Entity;
}
export default class EntitySearchBar extends Vue {
    readonly diagramVm: DiagramVue;
    readonly entityType?: EntityType;
    readonly selectedSuggestion?: Suggestion;
    readonly textField: TextField;
    readonly suggestionsEl: HTMLElement;
    focused: boolean;
    inputFocused: boolean;
    suggestionsFocused: boolean;
    showSuggestions: boolean;
    inputText: string;
    suggestionsPromise: Promise<Suggestion[]> | null;
    suggestions: Suggestion[] | null;
    activeSuggestionIndex: number;
    viewportRect: DOMRect | null;
    textFieldRect: DOMRect | null;
    get diagram(): Diagram;
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
    loadSuggestions(): Promise<void>;
    scrollActiveSuggestionIntoView(): void;
    selectSuggestion(suggestion: Suggestion | null): void;
    onEntityTypeChanged(): void;
    onSelectedSuggestionChanged(): void;
    onFocusedChanged(): void;
    onInputTextChanged(): void;
    onSuggestionsChanged(): void;
}
export {};
