import { Vue } from 'vue-property-decorator';
import type DiagramVue from './Diagram.vue';
import type Diagram from '@/diagram';
export default class Customizer extends Vue {
    readonly diagramVm: DiagramVue;
    readonly diagram: Diagram;
    get compact(): boolean;
}
