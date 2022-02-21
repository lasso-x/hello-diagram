import { Vue } from 'vue-property-decorator';
export default class LoadingSpinner extends Vue {
    readonly path?: SVGPathElement;
    readonly preset: string;
    readonly size: number | null;
    readonly thickness: number | null;
    presets: any;
    get finalPreset(): any;
    get finalSize(): any;
    get finalThickness(): any;
    get radius(): number;
    pathLength: number;
    updatePathLength(): void;
    get progressPathLength(): any;
    rotation: number;
    dashOffset: number;
    animationStartTime: number;
    stopAnimation(): void;
    startAnimation(): void;
    mounted(): void;
    beforeDestroy(): void;
}
