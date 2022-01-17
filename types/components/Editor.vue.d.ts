import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, Relation } from '@/diagram';
import DiagramVue from './Diagram.vue';
interface AddMenuItem {
    key: string;
    label: string;
    onClick: () => void;
}
interface EditorFieldGroup {
    id: string;
    title: string;
    fields: EditorField[];
}
declare type EditorField = (EditorTextField | EditorNumberField | EditorRadioField | EditorColorField);
interface EditorBaseField {
    id: string;
    title: string;
    dataKey?: string;
    styleKey?: string;
    editable?: boolean;
    valueBeforeChanges?: any;
    initialValue?: any;
    initialValueLabel?: string;
    resetValue?: any;
    value: any;
}
interface EditorTextField extends EditorBaseField {
    type: 'text';
}
interface EditorNumberField extends EditorBaseField {
    type: 'number';
}
interface EditorRadioField extends EditorBaseField {
    type: 'radio-buttons';
    options: EditorRadioFieldOption[];
}
interface EditorRadioFieldOption {
    label: string;
    value: any;
}
interface EditorColorField extends EditorBaseField {
    type: 'color';
}
export default class Editor extends Vue {
    readonly diagramVm: DiagramVue;
    readonly diagram: Diagram;
    readonly object: Entity | Relation;
    readonly close: () => void;
    showAddDropdownMenu: boolean;
    fieldGroups: EditorFieldGroup[];
    get label(): string;
    get description(): string | undefined;
    get addMenuItems(): AddMenuItem[][] | null;
    get changedFieldGroups(): {
        fields: EditorField[];
        id: string;
        title: string;
    }[];
    get hasChanges(): boolean;
    remove(): void;
    saveChanges(): void;
    onObjectChanged(): void;
}
export {};
