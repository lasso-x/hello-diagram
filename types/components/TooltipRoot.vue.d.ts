import { Vue } from 'vue-property-decorator';
export default class TooltipRoot extends Vue {
    get store(): import("../tooltips").TooltipRootStore;
    get tooltips(): import("../tooltips").TooltipOptions[];
}
