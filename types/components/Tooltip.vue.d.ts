import { Vue } from 'vue-property-decorator';
import { TooltipOptions } from '../tooltips';
export default class Tooltip extends Vue {
    readonly el?: TooltipOptions['el'];
    readonly text: TooltipOptions['text'];
    readonly placement: Exclude<TooltipOptions['placement'], undefined>;
    readonly offset: TooltipOptions['offset'];
    mousedOver: boolean;
    show: boolean;
    boundsRect: DOMRect | null;
    elRect: DOMRect | null;
    get fOffset(): Record<'top' | 'left' | 'right' | 'bottom', number>;
    get style(): {
        maxWidth: string;
        maxHeight: string;
        opacity: string;
        transform: string;
    };
    mounted(): void;
    beforeDestroy(): void;
    onBoundsRectChanged(rect: DOMRect): void;
    onElRectChanged(rect: DOMRect): void;
    onElMouseEnter(): void;
    onElMouseLeave(): void;
    onElChanged(el: Tooltip['el'], oldEl: Tooltip['el']): void;
}
