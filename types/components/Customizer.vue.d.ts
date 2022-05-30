import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
export default class Customizer extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    $el: HTMLElement;
    get compact(): boolean;
    mounted(): void;
    onFocusOut(e: FocusEvent): void;
}
