import { DiagramConfig } from './diagram';
declare const LassoDiagram: {
    init: (config: DiagramConfig) => {
        render: (container: HTMLElement) => HTMLDivElement;
        triggerUnsavedChanges: () => void;
    };
};
export default LassoDiagram;
export { LassoDiagram as Diagram };
export { exampleConfig, exampleData } from './diagram';
