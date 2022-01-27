import { ContextMenuActions } from '@/diagram';
import { Vue } from 'vue-property-decorator';
interface StateMenu {
    id: string;
    opener: HTMLElement | null;
    close: () => void;
    closeOnLongMouseOut?: boolean;
    actions: StateMenuAction[][];
}
interface StateMenuAction {
    id: string;
    icon?: string;
    label: string;
    trailingIcon?: string;
    disabled?: boolean;
    submenu?: StateMenu;
    onClick?: () => void;
}
export default class ContextMenu extends Vue {
    readonly position: {
        x: number;
        y: number;
    };
    readonly close: () => void;
    readonly actions: ContextMenuActions;
    $refs: {
        positionEl?: HTMLElement;
    };
    menus: StateMenu[];
    mounted(): void;
}
export {};
