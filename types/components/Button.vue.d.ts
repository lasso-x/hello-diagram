import { Vue } from 'vue-property-decorator';
export default class Button extends Vue {
    readonly type: string;
    readonly label?: string;
    readonly icon?: string;
    readonly leadingIcon?: string;
    readonly trailingIcon?: string;
    readonly disabled: boolean;
}
