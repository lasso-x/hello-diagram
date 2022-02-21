import { Vue } from 'vue-property-decorator';
export default class CheckBoxField extends Vue {
    readonly name?: string;
    readonly disabled: boolean;
    readonly label?: string;
    readonly checked: boolean;
    focused: boolean;
}
