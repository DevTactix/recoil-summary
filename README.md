# Recoil - Summary

## Get started

### Installation

```javascript
npm i --save recoil
```

### Plumbing

Import...

```javascript
import { RecoilRoot } from "recoil";
```

...and consume provider.

```javascript
function App() {
  return (
    <RecoilRoot>
      <Component />
    </RecoilRoot>
  );
}
```

## Basic usage

### Atoms

The atom is a small piece of state which is created by the `atom` function. The function expects an object with the mandatory attribute `key` which is a unique identifier for the atom. Typically the `default` attribute is also declared containing the default starting value for the atom.

### Selectors

The selector is used for returning state, e.g. external data or derived data based off atoms or other selectors and is created by the `selector` function. The function expects an object with the mandatory attribute `key`which is a unique identifier for the selector. The selector object also requires the `get`attribute containing a function returning the selector data.

### Selector Families

The selectorFamily enables parameterized selectors by use of `selectorFamily`. The syntax is identical to the one of `selector` however the getter function is wrapped in a function enabling the parameter of interest.

When consuming the selector family, providing the argument is required, e.g. `useRecoilValue(someSelectorFamily(someArgument))`.

### Hooks

Recoil provides hooks for consuming the state inside React components.

- `useRecoilSelector`: Returns data.
- `useRecoilState`: Returns tuple `[state, setState]` similar to the React hook `useState`, i.e. features both reading and writing of state.
- `useRecoilValue`: Returns value, i.e. features reading of state.
- `useRecoilValueLoadable`: Returns tuple `[state, contents]` where state can be any of the following: `hasValue, hasError, loading`. Handling of the Promise is abstracted away, i.e the responsibility of the hook.
- `useSetRecoilState`: Returns setter only, i.e. features writing of state.

## Advanced usage

### Asynchronous calls

Asynchronous calls are supported by selectors, however are then either reliant on `React.Suspense` or using the `useRecoilValueLoadable` hook.

_Example: Asynchronous call relying on React.Suspense_

```javascript
<Suspense
  fallback={
    <div style={{ fontStyle: "italic", fontVariant: "small-caps" }}>
      Loading...
    </div>
  }
>
  <HighScores />
</Suspense>
```
