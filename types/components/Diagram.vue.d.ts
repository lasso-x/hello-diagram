import { Vue } from 'vue-property-decorator';
import Diagram, { Entity, Relation } from '@/diagram';
import { VueConstructor } from 'vue';
export default class DiagramVue extends Vue {
    get diagramVm(): this;
    readonly diagram: Diagram;
    editor: {
        show: boolean;
        object: Entity | Relation | null;
    };
    dialogs: ({
        component: VueConstructor;
        props?: any;
    })[];
    mounted(): void;
    beforeDestroy(): void;
    showEditor(object: Entity | Relation): void;
    hideEditor(): void;
    showDialog(component: VueConstructor, props?: any): void;
}
