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
    relationFields: (Omit<Field, 'getValue'> & {
        value: any;
    })[];
    entityFields: (Omit<Field, 'getValue'> & {
        value: any;
    })[];
    entityType: EntityType | null;
    entityMode: 'search' | 'custom';
    selectedSearchEntity: {
        entity: Entity;
    } | null;
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
    onRelationTypeChanged(): void;
    onEntityTypeChanged(): void;
}
