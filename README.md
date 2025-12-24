### react-scoped-store-z

- Lightweight scoped state store for React using useSyncExternalStore.
- Scoped per component, optimized rendering with selectors.

---

#### ✨ Features

- Scoped state per component lifecycle

- createScopedStore factory for reusable stores

- useScopedStore React hook

- useScopedSelector for fine-grained rendering

- Works with React 17+

- No global store, no Context boilerplate

- Lightweight and framework-agnostic core

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
  label: "Counter"
}))
```

##### 2️⃣ Use store in a component
```ts
import React from "react"
import { useScopedStore, useScopedSelector } from "react-scoped-store-z"
import { createCounterStore } from "./stores/counter.store"

export function Counter() {
  const { store, setState } = useScopedStore(createCounterStore)

  // selector only subscribes to `count`
  const count = useScopedSelector(store, s => s.count)

  return (
    <div>
      <p>{store.getState().label}: {count}</p>
      <button onClick={() => setState(s => ({ count: s.count + 1 }))}>
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
      <button onClick={() => setOpen(o => !o)}>Toggle Counter</button>
      {open && <Counter />}
    </>
  )
}
```


- Mount → store created

- Unmount → store destroyed automatically

- Scoped to component instance

---

#### 🧠 Why use react-scoped-store-z?

- No global store pollution

- No unnecessary re-renders like Context alone

- Perfect for modals, wizards, step forms

- Works seamlessly with React 17+ and 18

---

#### 📄 License

MIT