import { Vue } from 'vue-property-decorator';
export default class TextField extends Vue {
    readonly autofocus: boolean;
    readonly name?: string;
    readonly type: string;
    readonly autocomplete?: string;
    readonly value?: any;
    readonly inputEl: HTMLInputElement;
    focused: boolean;
    mounted(): void;
}
