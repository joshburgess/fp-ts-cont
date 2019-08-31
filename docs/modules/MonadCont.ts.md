---
title: MonadCont.ts
nav_order: 4
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [MonadCont (interface)](#monadcont-interface)
- [MonadCont1 (interface)](#monadcont1-interface)
- [MonadCont2 (interface)](#monadcont2-interface)
- [MonadCont2C (interface)](#monadcont2c-interface)
- [MonadCont3 (interface)](#monadcont3-interface)
- [MonadCont4 (interface)](#monadcont4-interface)

---

# MonadCont (interface)

**Signature**

```ts
export interface MonadCont<M> extends Monad<M> {
  readonly callCC: <A>(f: (g: <B>(a: A) => HKT<M, B>) => HKT<M, A>) => HKT<M, A>
}
```

Added in v0.0.1

# MonadCont1 (interface)

**Signature**

```ts
export interface MonadCont1<M extends URIS> extends Monad1<M> {
  readonly callCC: <A>(f: (g: <B>(a: A) => Kind<M, B>) => Kind<M, A>) => Kind<M, A>
}
```

Added in v0.0.1

# MonadCont2 (interface)

**Signature**

```ts
export interface MonadCont2<M extends URIS2> extends Monad2<M> {
  readonly callCC: <E, A>(f: (g: <B>(a: A) => Kind2<M, E, B>) => Kind2<M, E, A>) => Kind2<M, E, A>
}
```

Added in v0.0.1

# MonadCont2C (interface)

**Signature**

```ts
export interface MonadCont2C<M extends URIS2, E> extends Monad2C<M, E> {
  readonly callCC: <A>(f: (g: <B>(a: A) => Kind2<M, E, B>) => Kind2<M, E, A>) => Kind2<M, E, A>
}
```

Added in v0.0.1

# MonadCont3 (interface)

**Signature**

```ts
export interface MonadCont3<M extends URIS3> extends Monad3<M> {
  readonly callCC: <R, E, A>(f: (g: <B>(a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, A>) => Kind3<M, R, E, A>
}
```

Added in v0.0.1

# MonadCont4 (interface)

**Signature**

```ts
export interface MonadCont4<M extends URIS4> extends Monad4<M> {
  readonly callCC: <S, R, E, A>(
    f: (g: <B>(a: A) => Kind4<M, S, R, E, B>) => Kind4<M, S, R, E, A>
  ) => Kind4<M, S, R, E, A>
}
```

Added in v0.0.1
