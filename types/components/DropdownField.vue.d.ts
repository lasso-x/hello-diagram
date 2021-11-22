import { Vue } from 'vue-property-decorator';
interface DropdownFieldOption {
    id: string;
    label: string;
    value: any;
}
export default class DropdownField extends Vue {
    readonly options: DropdownFieldOption[];
    readonly value?: any;
    showDropdownMenu: boolean;
    get selectedOption(): DropdownFieldOption | undefined;
}
export {};
