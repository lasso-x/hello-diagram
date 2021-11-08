import { Vue } from 'vue-property-decorator';
import Diagram from '@/diagram';
import DiagramVue from './Diagram.vue';
export default class TopBar extends Vue {
    readonly diagramVm: DiagramVue;
    readonly diagram: Diagram;
    showSaveDropdownMenu: boolean;
    showLoadDropdownMenu: boolean;
    showLayoutDropdownMenu: boolean;
    showEditDropdownMenu: boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    expand(): void;
    undo(): void;
    redo(): void;
    reset(): void;
}
