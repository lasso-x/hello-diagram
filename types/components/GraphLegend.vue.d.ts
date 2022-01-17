import { Vue } from 'vue-property-decorator';
import DiagramVue from './Diagram.vue';
export default class GraphLegend extends Vue {
    readonly diagramVm: DiagramVue;
    get diagram(): import("../diagram").default;
    get fields(): import("../diagram").Field[];
}
