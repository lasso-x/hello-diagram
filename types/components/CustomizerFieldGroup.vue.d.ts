import { Vue } from 'vue-property-decorator';
import Diagram, { Field, FieldGroup } from '../diagram';
export default class CustomizerFieldGroup extends Vue {
    readonly diagram: Diagram;
    readonly fieldGroup: FieldGroup;
    get activeFields(): Field[];
}
