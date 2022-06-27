import { Vue } from 'vue-property-decorator';
export default class FieldContainer extends Vue {
    readonly disabled: boolean;
    readonly label?: string;
    readonly helperText?: string;
    readonly error?: boolean;
}
