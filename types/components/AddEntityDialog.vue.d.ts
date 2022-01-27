import { Vue } from 'vue-property-decorator';
import { EntitySelectorModel } from './EntitySelector.vue';
import type DiagramVue from './Diagram.vue';
import type { Position } from 'cytoscape';
export default class AddEntityDialog extends Vue {
    readonly diagramVm: DiagramVue;
    readonly position?: Position;
    isConfirming: boolean;
    entitySelectorModel: EntitySelectorModel;
    get diagram(): import("../diagram").default;
    get canConfirm(): boolean;
    close(): void;
    confirm(): Promise<void>;
}
