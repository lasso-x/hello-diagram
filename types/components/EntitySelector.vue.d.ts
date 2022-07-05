import { Vue } from 'vue-property-decorator';
import { ContextItem, EntityType } from '@/diagram';
import type DiagramVm from './Diagram.vue';
import DataCreator from './DataCreator.vue';
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
    readonly diagramVm: DiagramVm;
    readonly dataCreator?: DataCreator;
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
    validate(contextItem: ContextItem): boolean;
    updateModel(): void;
    created(): void;
}
