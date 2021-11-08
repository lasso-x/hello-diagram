import { Vue } from 'vue-property-decorator';
export default class FieldContainer extends Vue {
    readonly label?: string;
    readonly helperText?: string;
}
