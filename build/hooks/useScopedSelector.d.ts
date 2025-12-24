import { ScopedStore } from "../core/ScopedStore";
export declare function useScopedSelector<T extends object, S>(store: ScopedStore<T>, selector: (state: T) => S, isEqual?: (a: S, b: S) => boolean): S;
