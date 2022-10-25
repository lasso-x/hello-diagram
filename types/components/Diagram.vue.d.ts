import { Vue } from 'vue-property-decorator';
import Diagram from '../diagram';
import { VueConstructor } from 'vue';
export default class DiagramVm extends Vue {
    get diagramVm(): this;
    readonly diagram: Diagram;
    $el: HTMLElement;
    compact: boolean;
    showCustomizer: boolean;
    lastDialogId: number;
    dialogs: ({
        id: number;
        component: VueConstructor;
        props?: any;
    })[];
    lastToastId: number;
    toasts: ({
        id: number;
        component: VueConstructor;
        props?: any;
    })[];
    created(): Promise<void>;
    mounted(): void;
    beforeDestroy(): void;
    showDialog(component: VueConstructor, props?: any): void;
    showPrintDialog(mode: 'print' | 'pdf' | 'png'): void;
    showLoadDialog(): void;
    showToast(props: {
        content: string;
        dismissable?: boolean;
        duration?: number;
        showLoadingSpinner?: boolean;
    }): () => void;
    onResize({ width }: DOMRect): void;
    onKeyDown(event: KeyboardEvent): void;
    onCompactChanged(): void;
}
