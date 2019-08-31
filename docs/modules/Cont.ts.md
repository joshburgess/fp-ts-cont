---
title: Cont.ts
nav_order: 1
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Cont (interface)](#cont-interface)
- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [callCC (constant)](#callcc-constant)
- [cont (constant)](#cont-constant)
- [of (constant)](#of-constant)
- [{](#)

---

# Cont (interface)

**Signature**

```ts
export interface Cont<R, A> {
  (f: (a: A) => R): R
}
```

Added in v0.0.1

# URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v0.0.1

# URI (constant)

**Signature**

```ts
export const URI = ...
```

Added in v0.0.1

# callCC (constant)

**Signature**

```ts
export const callCC: <R, A>(
  f: (g: <B>(a: A) => Cont<R, B>) => Cont<R, A>,
) => Cont<R, A> = ...
```

Added in v0.0.1

# cont (constant)

**Signature**

```ts
export const cont: Monad2<URI> & MonadCont2<URI> = ...
```

Added in v0.0.1

# of (constant)

**Signature**

```ts
export const of: <R, A>(a: A) => Cont<R, A> = ...
```

Added in v0.0.1

# {

ap,
apFirst,
apSecond,
chain,
chainFirst,
flatten,
map,
} (constant)

**Signature**

```ts
export const {
  ap,
  apFirst,
  apSecond,
  chain,
  chainFirst,
  flatten,
  map,
} = ...
```

Added in v0.0.1
