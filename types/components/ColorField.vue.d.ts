import { Vue } from 'vue-property-decorator';
import iro from '@jaames/iro';
export default class ColorField extends Vue {
    readonly name?: string;
    readonly disabled: boolean;
    readonly value?: string;
    inputText: string;
    get color(): import("@irojs/iro-core").IroColor;
    onColorChanged(color: iro.Color): void;
}
