import Vue from 'vue';
import type { VueConstructor } from 'vue/types/umd';
import type Diagram from './diagram';
interface StoreProps {
    diagram: Diagram;
}
export declare class Store extends Vue {
    readonly props: StoreProps;
    get diagram(): Diagram;
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
    showDialog(component: VueConstructor, props?: any): void;
    showConfirmDialog(props: {
        title?: string;
        content?: string;
        confirmButtonText?: string;
        dismissButtonText?: string;
        onConfirm?: () => void;
        onDismiss?: () => void;
    }): void;
    showPrintDialog(mode: 'print' | 'pdf' | 'png'): void;
    showLoadDialog(): void;
    showToast(props: {
        content: string;
        dismissable?: boolean;
        duration?: number;
        showLoadingSpinner?: boolean;
    }): () => void;
}
export declare const createStore: (props: StoreProps) => Store;
export {};
