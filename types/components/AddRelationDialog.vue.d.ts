import { Vue } from 'vue-property-decorator';
import DataCreator from './DataCreator.vue';
import EntitySelector, { EntitySelectorModel } from './EntitySelector.vue';
import type DiagramVm from './Diagram.vue';
import { Entity, EntityType, RelationType } from '../diagram';
export default class AddRelationDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly relationDataCreator?: DataCreator;
    readonly entitySelector?: EntitySelector;
    readonly relationType: RelationType;
    readonly entity: Entity;
    readonly asParent: boolean;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    isConfirming: boolean;
    relationData: Record<string, any>;
    entitySelectorModel: EntitySelectorModel;
    get diagram(): import("../diagram").default;
    get relationTypeLabel(): string;
    get supportedEntityTypes(): EntityType[];
    get canConfirm(): boolean;
    close(): void;
    confirm(): Promise<void>;
    dismiss(): void;
}
