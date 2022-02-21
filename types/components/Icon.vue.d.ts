import { Vue } from 'vue-property-decorator';
export default class Icon extends Vue {
    readonly icon: string;
    readonly size: number;
    readonly light: boolean;
}
