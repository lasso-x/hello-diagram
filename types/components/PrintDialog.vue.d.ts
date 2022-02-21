import { Vue } from 'vue-property-decorator';
import type DiagramVm from './Diagram.vue';
export default class PrintDialog extends Vue {
    readonly diagramVm: DiagramVm;
    readonly mode: 'print' | 'pdf' | 'png';
    orientation: 'portrait' | 'landscape';
    size: 'A5' | 'A4' | 'A3';
    includeMargin: boolean;
    printing: boolean;
    get diagram(): import("../diagram").default;
    get title(): "Udskriv" | "Gem som PDF" | "Gem som billede";
    get description(): "" | "Din computers udskriftsindstillinger skal være de samme som de nedenfor valgte." | "Gem diagrammet til din computer som PDF." | "Gem diagrammet til din computer i .png format.";
    get buttonLabel(): "Udskriv" | "Udskriver..." | "Gem" | "Gemmer...";
    created(): void;
    beforeDestroy(): void;
    loadFromLocalStorage(): void;
    saveToLocalStorage(): void;
    close(): void;
    confirm(): void;
    onPrintDone({ file }: {
        file?: {
            filename: string;
            blob: Blob;
        };
    }): void;
}
