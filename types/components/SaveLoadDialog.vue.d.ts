import { Vue } from 'vue-property-decorator';
import type DiagramVue from './Diagram.vue';
export default class SaveLoadDialog extends Vue {
    readonly diagramVm: DiagramVue;
    textareaText: string;
    get diagram(): import("../diagram").default;
    close(): void;
    save(): void;
    load(): void;
}
