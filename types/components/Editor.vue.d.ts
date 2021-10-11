import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, Relation } from '../diagram';
interface AddMenuItem {
    key: string;
    label: string;
    onClick: () => void;
}
interface EditorFieldGroup {
    id: string;
    title: string;
    fields: ({
        id: string;
        label: string;
        dataKey: string;
        name: string;
        originalValue: string;
        value: string;
    })[];
}
export default class Editor extends Vue {
    readonly diagram: Diagram;
    readonly object: Entity | Relation;
    readonly close: () => void;
    showAddDropdownMenu: boolean;
    fieldGroups: EditorFieldGroup[];
    get label(): string | undefined;
    get addMenuItems(): {
        new: AddMenuItem[];
        existing: AddMenuItem[];
    } | null;
    get changedFieldGroups(): {
        fields: {
            id: string;
            label: string;
            dataKey: string;
            name: string;
            originalValue: string;
            value: string;
        }[];
        id: string;
        title: string;
    }[];
    get hasChanges(): number;
    saveChanges(): void;
    onObjectChanged(): void;
}
export {};
