import { Change, DiagramDataDefinition } from './DiagramData';
export default interface SavedDiagram {
    id: string;
    title?: string;
    description?: string;
    shared?: boolean;
    data?: DiagramDataDefinition;
    changes?: Change[];
    settings?: {
        activeFields?: string[];
        activeFilters?: string[];
    };
}
