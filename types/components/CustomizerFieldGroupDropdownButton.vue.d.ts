import { Vue } from 'vue-property-decorator';
import Diagram, { FieldGroup, Field } from '@/diagram';
export default class CustomizerFieldGroupDropdownButton extends Vue {
    readonly diagram: Diagram;
    readonly fieldGroup: FieldGroup;
    showDropdownMenu: boolean;
    els: Record<'buttonEl' | 'dropdownMenuEl' | 'boundsEl', HTMLElement> | null;
    buttonRect: DOMRect | null;
    boundsRect: DOMRect | null;
    get dropdownStyle(): {
        width: string;
        maxHeight: string;
        transform: string;
    } | null;
    get fields(): Field[];
    mounted(): void;
    beforeDestroy(): void;
    updateButtonRect(rect: DOMRect): void;
    updateBoundsRect(rect: DOMRect): void;
    onFocusOut(event: FocusEvent): void;
    onShowDropdownMenuChanged(): void;
}
