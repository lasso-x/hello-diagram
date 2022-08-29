import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
export default class GraphLegend extends Vue {
    readonly diagramVm: DiagramVm;
    get diagram(): import("../diagram").default;
    get hideLogo(): boolean | undefined;
    get fields(): import("../diagram").Field[];
}
