import { Vue } from 'vue-property-decorator';
import { EntitySelectorModel } from './EntitySelector.vue';
import type DiagramVue from './Diagram.vue';
import type { Entity, EntityType, RelationType } from '@/diagram';
export default class AddRelationDialog extends Vue {
    readonly diagramVm: DiagramVue;
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
    get relationFields(): import("../diagram").Field[];
    get supportedEntityTypes(): EntityType[];
    get canConfirm(): boolean;
    close(): void;
    confirm(): Promise<void>;
    dismiss(): void;
}
