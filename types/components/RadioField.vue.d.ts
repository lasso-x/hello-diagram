import { Vue } from 'vue-property-decorator';
export default class RadioField extends Vue {
    readonly name?: string;
    readonly options: ({
        label: string;
        value: any;
    })[];
    readonly value: any;
    finalOptions: ({
        label: string;
        value: any;
        focused: boolean;
    })[];
    onOptionsChanged(): void;
}
