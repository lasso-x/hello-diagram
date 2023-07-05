import type SavedDiagram from './types/SavedDiagram';
declare const devStorage: {
    getAll: () => Promise<SavedDiagram[]>;
    save: (savedDiagram: SavedDiagram) => Promise<string | undefined>;
    delete: (savedDiagram: SavedDiagram) => Promise<void>;
    deleteAll: () => Promise<void>;
};
export default devStorage;
