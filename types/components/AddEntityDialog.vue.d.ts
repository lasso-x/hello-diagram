import { Vue } from 'vue-property-decorator';
import { EntitySelectorModel } from './EntitySelector.vue';
import DiagramVue from './Diagram.vue';
export default class AddEntityDialog extends Vue {
    readonly diagramVm: DiagramVue;
    isConfirming: boolean;
    entitySelectorModel: EntitySelectorModel;
    get diagram(): import("../diagram").default;
    get canConfirm(): boolean;
    close(): void;
    confirm(): Promise<void>;
}
