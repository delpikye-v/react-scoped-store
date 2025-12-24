import { ScopedStore } from "../core/ScopedStore";
export declare function useScopedStore<T extends object>(create: () => ScopedStore<T>): {
    state: any;
    setState: (patch: Partial<T> | ((prev: T) => Partial<T>)) => void;
    store: ScopedStore<T>;
};
