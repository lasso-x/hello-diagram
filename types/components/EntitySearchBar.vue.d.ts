import { Vue } from 'vue-property-decorator';
import Diagram, { EntityType } from '@/diagram';
import TextField from './TextField.vue';
import DiagramVue from './Diagram.vue';
interface Suggestion {
    id: string;
    name: string;
}
export default class EntitySearchBar extends Vue {
    log: (...data: any[]) => void;
    readonly diagramVm: DiagramVue;
    readonly entityType?: EntityType;
    readonly entityId?: string;
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
    onDestroy?: () => void;
    mounted(): void;
    beforeDestroy(): void;
    loadSuggestions(): Promise<void>;
    selectSuggestion(suggestion: Suggestion | null): void;
    onEntityTypeChanged(): void;
    onInputTextChanged(): void;
}
export {};
