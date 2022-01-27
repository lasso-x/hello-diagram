import { Vue } from 'vue-property-decorator';
import type { default as Diagram, Entity, Relation } from '@/diagram';
import { VueConstructor } from 'vue';
export default class DiagramVue extends Vue {
    get diagramVm(): this;
    readonly diagram: Diagram;
    $el: HTMLElement;
    compact: boolean;
    showCustomizer: boolean;
    editorTarget: Entity | Relation | null;
    dialogs: ({
        component: VueConstructor;
        props?: any;
    })[];
    mounted(): void;
    beforeDestroy(): void;
    showDialog(component: VueConstructor, props?: any): void;
    onResize({ width }: DOMRect): void;
    onKeyDown(event: KeyboardEvent): void;
    onCompactChanged(): void;
}
