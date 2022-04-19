import { Vue } from 'vue-property-decorator';
import DropdownMenu from './DropdownMenu.vue';
export default class DropdownMenuItem extends Vue {
    readonly dropdownMenuVm: DropdownMenu;
    readonly icon?: string;
    readonly iconColor?: string;
    readonly label: string;
    readonly trailingIcon?: string;
    readonly trailingIconColor?: string;
    readonly disabled: boolean;
    readonly closeMenuOnClick: boolean;
    isMousedOver: boolean;
    longMouseOverPromise: Promise<void> | null;
    onClick(event: MouseEvent): void;
    onMouseOver(event: MouseEvent): void;
    onMouseOut(event: MouseEvent): void;
}
