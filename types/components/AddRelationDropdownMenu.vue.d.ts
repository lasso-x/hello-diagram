import { Vue } from 'vue-property-decorator';
import type DiagramVue from './Diagram.vue';
import type { default as Diagram, Entity } from '@/diagram';
interface Item {
    label: string;
    onClick: () => void;
}
export declare const getActions: (diagramVm: DiagramVue, entity: Entity) => Item[][];
export default class AddRelationDropdownMenu extends Vue {
    readonly diagram: Diagram;
    readonly diagramVm: DiagramVue;
    readonly entity: Entity;
    get entityType(): import("../diagram").EntityType;
    get actions(): Item[][];
}
export {};
