import { Vue } from 'vue-property-decorator';
interface EditorFieldOption {
    label: string;
    value: any;
}
export default class EditorField extends Vue {
    readonly id?: string;
    readonly type: string;
    readonly title?: string;
    readonly editable: boolean;
    readonly options?: unknown[];
    readonly helperText?: string;
    readonly initialValue?: any;
    readonly initialValueLabel?: string;
    readonly resetValue?: any;
    readonly value?: any;
    readonly errorMessage?: string;
    finalType: 'text' | 'number' | 'radio-buttons' | 'color';
    finalOptions: EditorFieldOption[];
    get hasInitialValue(): boolean;
    get hasResetValue(): boolean;
    get showChangedFrom(): boolean;
    get showReset(): boolean;
    mounted(): void;
}
export {};
