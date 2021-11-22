import Diagram from '@/diagram';
import { Change, DiagramDataDefinition } from './DiagramData';
export default interface SavedDiagram {
    id: string;
    title?: string;
    description?: string;
    shared?: boolean;
    mainEntityId: string;
    data?: DiagramDataDefinition;
    changes?: Change[];
    settings?: {
        activeFields?: string[];
        activeFilters?: string[];
        activeLayout?: string;
    };
}
export declare const createSavedDiagram: (diagram: Diagram) => SavedDiagram;
export declare const parseSavedDiagramJSON: (json: string) => SavedDiagram | null;
