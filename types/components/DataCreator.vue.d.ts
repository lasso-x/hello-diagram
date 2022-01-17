import { Vue } from 'vue-property-decorator';
import { Field } from '@/diagram';
export default class DataCreator extends Vue {
    readonly fields: Field[];
    readonly data: Record<string, any>;
    get fieldStates(): {
        field: Field;
        value: any;
        onChange: (value: any) => void;
    }[];
}
