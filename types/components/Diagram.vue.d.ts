import { Vue } from 'vue-property-decorator';
import Diagram from '../diagram';
export default class DiagramVue extends Vue {
    readonly diagram: Diagram;
    editor: {
        show: boolean;
        object: unknown;
    };
    mounted(): void;
    showEditor(object: unknown): void;
    hideEditor(): void;
}
