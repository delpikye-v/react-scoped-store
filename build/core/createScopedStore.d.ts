import { ScopedStore } from "./ScopedStore";
export declare function createScopedStore<T extends object>(initializer: () => T): () => ScopedStore<T>;
