import { Vue } from 'vue-property-decorator';
import { EntityType } from '@/diagram';
import DiagramVue from './Diagram.vue';
import { Suggestion } from './EntitySearchBar.vue';
export declare type EntitySelectorModel = ({
    entityType: EntityType;
} & ({
    mode: 'search';
    selectedSuggestion: Suggestion;
} | {
    mode: 'custom';
    entityData: Record<string, any>;
})) | null;
export default class EntitySelector extends Vue {
    readonly diagramVm: DiagramVue;
    readonly entityTypes?: EntityType[];
    entityType: EntityType | null;
    mode: 'search' | 'custom';
    selectedSuggestion: Suggestion | null;
    entityData: Record<string, any>;
    get diagram(): import("../diagram").default;
    get finalEntityTypes(): EntityType[];
    get searchEnabled(): boolean;
    get entityTypeDropdownOptions(): {
        id: string;
        label: string;
        value: EntityType;
    }[];
    get entityFields(): import("../diagram").Field[];
    updateModel(): void;
    created(): void;
}
