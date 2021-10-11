import { Vue } from 'vue-property-decorator';
export default class BaseButton extends Vue {
    readonly label?: string;
    readonly icon?: string;
    readonly leadingIcon?: string;
    readonly trailingIcon?: string;
    get finalLeadingIcon(): string;
    get finalTrailingIcon(): string;
    readonly disabled: boolean;
}
