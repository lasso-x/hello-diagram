import { Vue } from 'vue-property-decorator';
export default class BaseButton extends Vue {
    readonly label?: string;
    readonly icon?: string;
    readonly leadingIcon?: string;
    readonly trailingIcon?: string;
    readonly iconColor?: string;
    readonly leadingIconColor?: string;
    readonly trailingIconColor?: string;
    get finalLeadingIcon(): string;
    get finalTrailingIcon(): string;
    get finalLeadingIconColor(): string;
    get finalTrailingIconColor(): string;
    readonly disabled: boolean;
}
