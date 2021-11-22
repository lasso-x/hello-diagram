import { Vue } from 'vue-property-decorator';
interface Tab {
    id: string;
    label: string;
}
export default class TabBar extends Vue {
    readonly tabs: Tab[];
    readonly activeTabId?: string;
    readonly outlined?: boolean;
    get tabsMap(): Map<string, Tab>;
    get activeTab(): Tab | undefined;
    set activeTab(tab: Tab | undefined);
}
export {};
