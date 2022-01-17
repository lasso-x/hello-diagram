import { Vue } from 'vue-property-decorator';
import DiagramVue from './Diagram.vue';
export default class PrintDialog extends Vue {
    readonly diagramVm: DiagramVue;
    readonly mode: 'print' | 'pdf' | 'png';
    orientation: 'portrait' | 'landscape';
    size: 'A5' | 'A4' | 'A3';
    includeMargin: boolean;
    printing: boolean;
    get diagram(): import("../diagram").default;
    get title(): "Udskriv" | "Gem som PDF" | "Gem som billede";
    get description(): "" | "Din computers udskriftsindstillinger skal være de samme som de nedenfor valgte." | "Gem diagrammet til din computer som PDF." | "Gem diagrammet til din computer i .png format.";
    created(): void;
    loadFromLocalStorage(): void;
    saveToLocalStorage(): void;
    close(): void;
    confirm(): void;
}
