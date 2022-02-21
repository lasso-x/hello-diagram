import { Vue } from 'vue-property-decorator';
declare const sizes: {
    small: {
        iconSize: number;
        buttonSize: number;
    };
    normal: {
        iconSize: number;
        buttonSize: number;
    };
};
export default class IconButton extends Vue {
    readonly icon: string;
    readonly size: keyof typeof sizes;
    readonly iconSize?: number;
    readonly buttonSize?: number;
    readonly light: boolean;
    get finalSize(): {
        iconSize: number;
        buttonSize: number;
    } | {
        iconSize: number;
        buttonSize: number;
    };
    get finalIconSize(): number;
    get finalButtonSize(): number;
}
export {};
