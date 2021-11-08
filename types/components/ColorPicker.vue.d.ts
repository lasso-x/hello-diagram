import { Vue } from 'vue-property-decorator';
import iro from '@jaames/iro';
interface InputField {
    name: string;
    value: any;
    setter?: InputFieldSetter;
    on: any;
}
declare type InputFieldSetter = (value: string) => iro.Color;
export default class ColorPicker extends Vue {
    readonly color: iro.Color;
    readonly iroEl: HTMLElement;
    inputFocused: boolean;
    inputTypes: ("hex" | "rgb" | "hsl")[];
    inputFields: InputField[];
    get inputType(): "hex" | "rgb" | "hsl";
    destroy?: () => void;
    mounted(): void;
    beforeDestroy(): void;
    switchInputType(): void;
    updateInputFields(): void;
}
export {};
