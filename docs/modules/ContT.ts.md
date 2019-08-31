---
title: ContT.ts
nav_order: 2
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [ContM (interface)](#contm-interface)
- [ContM1 (interface)](#contm1-interface)
- [ContM2 (interface)](#contm2-interface)
- [ContM3 (interface)](#contm3-interface)
- [ContT (interface)](#contt-interface)
- [ContT1 (interface)](#contt1-interface)
- [ContT2 (interface)](#contt2-interface)
- [ContT3 (interface)](#contt3-interface)
- [getContM (function)](#getcontm-function)

---

# ContM (interface)

**Signature**

```ts
export interface ContM<M> {
  readonly of: <R, A>(a: A) => ContT<M, R, A>
  readonly ap: <R, A, B>(mab: ContT<M, R, (a: A) => B>, ma: ContT<M, R, A>) => ContT<M, R, B>
  readonly map: <R, A, B>(ma: ContT<M, R, A>, f: (a: A) => B) => ContT<M, R, B>
  readonly chain: <R, A, B>(ma: ContT<M, R, A>, f: (a: A) => ContT<M, R, B>) => ContT<M, R, B>
  readonly callCC: <R, A>(f: (g: <B>(a: A) => ContT<M, R, B>) => ContT<M, R, A>) => ContT<M, R, A>
}
```

Added in v0.0.1

# ContM1 (interface)

**Signature**

```ts
export interface ContM1<M extends URIS> {
  readonly of: <R, A>(a: A) => ContT1<M, R, A>
  readonly ap: <R, A, B>(mab: ContT1<M, R, (a: A) => B>, ma: ContT1<M, R, A>) => ContT1<M, R, B>
  readonly map: <R, A, B>(ma: ContT1<M, R, A>, f: (a: A) => B) => ContT1<M, R, B>
  readonly chain: <R, A, B>(ma: ContT1<M, R, A>, f: (a: A) => ContT1<M, R, B>) => ContT1<M, R, B>
  readonly callCC: <R, A>(f: (g: <B>(a: A) => ContT1<M, R, B>) => ContT1<M, R, A>) => ContT1<M, R, A>
}
```

Added in v0.0.1

# ContM2 (interface)

**Signature**

```ts
export interface ContM2<M extends URIS2> {
  readonly of: <R, E, A>(a: A) => ContT2<M, R, E, A>
  readonly ap: <R, E, A, B>(mab: ContT2<M, R, E, (a: A) => B>, ma: ContT2<M, R, E, A>) => ContT2<M, R, E, B>
  readonly map: <R, E, A, B>(ma: ContT2<M, R, E, A>, f: (a: A) => B) => ContT2<M, R, E, B>
  readonly chain: <R, E, A, B>(ma: ContT2<M, R, E, A>, f: (a: A) => ContT2<M, R, E, B>) => ContT2<M, R, E, B>
  readonly callCC: <R, E, A>(f: (g: <B>(a: A) => ContT2<M, R, E, B>) => ContT2<M, R, E, A>) => ContT2<M, R, E, A>
}
```

Added in v0.0.1

# ContM3 (interface)

**Signature**

```ts
export interface ContM3<M extends URIS3> {
  readonly of: <R, U, E, A>(a: A) => ContT3<M, R, U, E, A>
  readonly ap: <R, U, E, A, B>(mab: ContT3<M, R, U, E, (a: A) => B>, ma: ContT3<M, R, U, E, A>) => ContT3<M, R, U, E, B>
  readonly map: <R, U, E, A, B>(ma: ContT3<M, R, U, E, A>, f: (a: A) => B) => ContT3<M, R, U, E, B>
  readonly chain: <R, U, E, A, B>(
    ma: ContT3<M, R, U, E, A>,
    f: (a: A) => ContT3<M, R, U, E, B>
  ) => ContT3<M, R, U, E, B>
  readonly callCC: <R, U, E, A>(
    f: (g: <B>(a: A) => ContT3<M, R, U, E, B>) => ContT3<M, R, U, E, A>
  ) => ContT3<M, R, U, E, A>
}
```

Added in v0.0.1

# ContT (interface)

**Signature**

```ts
export interface ContT<M, R, A> {
  (f: (a: A) => HKT<M, R>): HKT<M, R>
}
```

Added in v0.0.1

# ContT1 (interface)

**Signature**

```ts
export interface ContT1<M extends URIS, R, A> {
  (f: (a: A) => Kind<M, R>): Kind<M, R>
}
```

Added in v0.0.1

# ContT2 (interface)

**Signature**

```ts
export interface ContT2<M extends URIS2, R, E, A> {
  (f: (a: A) => Kind2<M, E, R>): Kind2<M, E, R>
}
```

Added in v0.0.1

# ContT3 (interface)

**Signature**

```ts
export interface ContT3<M extends URIS3, R, U, E, A> {
  (f: (a: A) => Kind3<M, U, E, R>): Kind3<M, U, E, R>
}
```

Added in v0.0.1

# getContM (function)

**Signature**

```ts
export function getContM<M extends URIS3>(M: Monad3<M>): ContM3<M>
export function getContM<M extends URIS2>(M: Monad2<M>): ContM2<M>
export function getContM<M extends URIS>(M: Monad1<M>): ContM1<M>
export function getContM<M>(M: Monad<M>): ContM<M> { ... }
```

Added in v0.0.1
