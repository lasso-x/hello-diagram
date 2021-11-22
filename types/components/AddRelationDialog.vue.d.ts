import { Vue } from 'vue-property-decorator';
import DiagramVue from './Diagram.vue';
import { Entity, EntityType, Field, RelationType } from '@/diagram';
export default class AddRelationDialog extends Vue {
    readonly diagramVm: DiagramVue;
    readonly relationType: RelationType;
    readonly entity: Entity;
    readonly asParent: false;
    readonly onConfirm?: () => void;
    readonly onDismiss?: () => void;
    entityFields: (Field & {
        value: any;
    })[];
    relationFields: (Field & {
        value: any;
    })[];
    entityMode: 'search' | 'custom';
    entityType: EntityType | null;
    get diagram(): import("../diagram").default;
    get relationTypeLabel(): string;
    get supportedEntityTypes(): EntityType[];
    get entityTypeDropdownOptions(): {
        id: string;
        label: string;
        value: EntityType;
    }[];
    close(): void;
    confirm(): void;
    dismiss(): void;
    onSupportedEntityTypesChanged(): void;
    onEntityTypeChanged(): void;
    onRelationTypeChanged(): void;
}
