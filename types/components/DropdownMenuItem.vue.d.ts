import { Vue } from 'vue-property-decorator';
export default class DropdownMenuItem extends Vue {
    readonly icon?: string;
    readonly label: string;
    readonly disabled: boolean;
}
