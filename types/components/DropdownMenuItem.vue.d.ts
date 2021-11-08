import { Vue } from 'vue-property-decorator';
import DropdownMenu from './DropdownMenu.vue';
export default class DropdownMenuItem extends Vue {
    readonly dropdownMenuVm: DropdownMenu;
    readonly icon?: string;
    readonly label: string;
    readonly disabled: boolean;
}
