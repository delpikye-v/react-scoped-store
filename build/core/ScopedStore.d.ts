export type Listener = () => void;
export declare class ScopedStore<T extends object> {
    private state;
    private listeners;
    constructor(initialState: T);
    getState(): T;
    setState(patch: Partial<T> | ((prev: T) => Partial<T>)): void;
    subscribe(listener: Listener): () => boolean;
    destroy(): void;
    private emit;
}
