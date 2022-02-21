import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type { default as Diagram, Entity, Relation } from '@/diagram';
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
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    object: Entity | Relation | null;
    showAddDropdownMenu: boolean;
    fieldGroups: EditorFieldGroup[];
    get label(): string;
    get description(): string | undefined;
    get changedFieldGroups(): {
        fields: EditorField[];
        id: string;
        title: string;
    }[];
    get hasChanges(): boolean;
    created(): void;
    remove(): void;
    saveChanges(): void;
    onObjectChanged(object: Editor['object']): void;
}
export {};
