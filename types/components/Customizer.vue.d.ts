import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
export default class Customizer extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    get compact(): boolean;
}
