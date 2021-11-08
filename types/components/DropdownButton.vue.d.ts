import { Vue } from 'vue-property-decorator';
export default class DropdownButton extends Vue {
    buttonEl: HTMLElement | null;
    get isOpen(): boolean;
    onClick(event: MouseEvent): void;
    close(): void;
}
