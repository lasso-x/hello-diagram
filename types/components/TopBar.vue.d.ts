import { Vue } from 'vue-property-decorator';
import Diagram from '../diagram';
export default class TopBar extends Vue {
    readonly diagram: Diagram;
    showSaveDropdownMenu: boolean;
    showLoadDropdownMenu: boolean;
    showEditDropdownMenu: boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    undo(): void;
    redo(): void;
    reset(): void;
}
