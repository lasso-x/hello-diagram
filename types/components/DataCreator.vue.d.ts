import { Vue } from 'vue-property-decorator';
import { ContextItem, EntityType, RelationType } from '@/diagram';
export default class DataCreator extends Vue {
    readonly type: EntityType | RelationType;
    readonly data: Record<string, any>;
    get fieldStates(): {
        field: import("../diagram").Field;
        readonly show: boolean;
        value: any;
        errorMessage: string;
        onChange: (value: any) => void;
    }[];
    get shownFieldStates(): {
        field: import("../diagram").Field;
        readonly show: boolean;
        value: any;
        errorMessage: string;
        onChange: (value: any) => void;
    }[];
    validate(contextItem: ContextItem): boolean;
}
