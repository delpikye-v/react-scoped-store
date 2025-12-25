## ⭐ react-scoped-store-z

[![NPM](https://img.shields.io/npm/v/react-scoped-store-z.svg)](https://www.npmjs.com/package/react-scoped-store-z)
![Downloads](https://img.shields.io/npm/dt/react-scoped-store-z.svg)

---

A lightweight scoped state store for React.
State lives with the component, not globally. Optimized with selectors using useSyncExternalStore.

<a href="https://codesandbox.io/p/sandbox/kqwpgj" target="_blank">Live example</a>

---

#### ✨ Features

- Component-scoped state (one store per mount)
- createScopedStore factory for reusable stores
- useScopedStore hook for lifecycle management
- useScopedSelector for fine-grained re-renders
- No global store
- No Context boilerplate
- React 17+ compatible
- Tiny, framework-agnostic core

---

#### 📦 Installation

```ts
npm install react-scoped-store-z
# or
yarn add react-scoped-store-z
```

Peer dependency: React >=17

---

#### 🚀 Usage
##### 1️⃣ Create a reusable store
```ts
// stores/counter.store.ts
import { createScopedStore } from "react-scoped-store-z"

export const createCounterStore = createScopedStore(() => ({
  count: 0,
  label: "Counter",
}))
```

##### 2️⃣ Use store in a component
```ts
import { useScopedStore, useScopedSelector } from "react-scoped-store-z"
import { createCounterStore } from "./stores/counter.store"

export function Counter() {
  const { store, setState } = useScopedStore(createCounterStore)

  // Subscribe only to `count`
  const count = useScopedSelector(store, s => s.count)

  return (
    <div>
      <p>
        {store.getState().label}: {count}
      </p>

      <button
        onClick={() =>
          setState(s => ({ count: s.count + 1 }))
        }
      >
        Increment
      </button>
    </div>
  )
}
```

-  Only re-renders when count changes, not label.

##### 3️⃣ Scoped state per mount
```ts
function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button onClick={() => setOpen(o => !o)}>
        Toggle Counter
      </button>

      {open && <Counter />}
    </>
  )
}
```


- Mount → store created
- Unmount → store destroyed automatically
- Scoped to component instance

---

#### 🧠 Mental Model
```bash
Component instance
 └─ ScopedStore
     ├─ state
     ├─ listeners
     └─ lifecycle = component lifecycle
```
- Think of react-scoped-store-z as a local ViewModel for your component.

---

#### ⚠️ Limitations

react-scoped-store-z is intentionally minimal and opinionated.  
The following limitations are design choices, not missing features.  

###### ❌ No shared state  

Each store instance is scoped to a single component lifecycle.
- Stores are created on mount
- Destroyed automatically on unmount
- No global or cross-instance sharing

If you need shared or global state, consider tools like Zustand or Redux.

---

#### 📄 License

MIT