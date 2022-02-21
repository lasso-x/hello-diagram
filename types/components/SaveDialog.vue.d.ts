import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
import type Diagram from '@/diagram';
export default class SaveDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly diagram: Diagram;
    readonly save: () => unknown;
    close(): void;
}
