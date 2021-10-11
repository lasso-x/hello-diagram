import { Vue } from 'vue-property-decorator';
export default class TextField extends Vue {
    readonly autofocus: boolean;
    readonly label?: string;
    readonly name?: string;
    readonly type: string;
    readonly autocomplete?: string;
    readonly helperText?: string;
    readonly value: string;
    readonly inputEl: HTMLInputElement;
    focused: boolean;
    mounted(): void;
}
