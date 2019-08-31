import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT'
import { Monad, Monad1, Monad2, Monad3 } from 'fp-ts/lib/Monad'

/**
 * @since 0.0.1
 */
export interface ContT<M, R, A> {
  (f: (a: A) => HKT<M, R>): HKT<M, R>
}

/**
 * @since 0.0.1
 */
export interface ContT1<M extends URIS, R, A> {
  (f: (a: A) => Kind<M, R>): Kind<M, R>
}

/**
 * @since 0.0.1
 */
export interface ContT2<M extends URIS2, R, E, A> {
  (f: (a: A) => Kind2<M, E, R>): Kind2<M, E, R>
}

/**
 * @since 0.0.1
 */
export interface ContT3<M extends URIS3, R, U, E, A> {
  (f: (a: A) => Kind3<M, U, E, R>): Kind3<M, U, E, R>
}

/**
 * @since 0.0.1
 */
export interface ContM<M> {
  readonly of: <R, A>(a: A) => ContT<M, R, A>
  readonly ap: <R, A, B>(
    mab: ContT<M, R, (a: A) => B>,
    ma: ContT<M, R, A>,
  ) => ContT<M, R, B>
  readonly map: <R, A, B>(ma: ContT<M, R, A>, f: (a: A) => B) => ContT<M, R, B>
  readonly chain: <R, A, B>(
    ma: ContT<M, R, A>,
    f: (a: A) => ContT<M, R, B>,
  ) => ContT<M, R, B>
  readonly callCC: <R, A>(
    f: (g: <B>(a: A) => ContT<M, R, B>) => ContT<M, R, A>,
  ) => ContT<M, R, A>
}

/**
 * @since 0.0.1
 */
export interface ContM1<M extends URIS> {
  readonly of: <R, A>(a: A) => ContT1<M, R, A>
  readonly ap: <R, A, B>(
    mab: ContT1<M, R, (a: A) => B>,
    ma: ContT1<M, R, A>,
  ) => ContT1<M, R, B>
  readonly map: <R, A, B>(
    ma: ContT1<M, R, A>,
    f: (a: A) => B,
  ) => ContT1<M, R, B>
  readonly chain: <R, A, B>(
    ma: ContT1<M, R, A>,
    f: (a: A) => ContT1<M, R, B>,
  ) => ContT1<M, R, B>
  readonly callCC: <R, A>(
    f: (g: <B>(a: A) => ContT1<M, R, B>) => ContT1<M, R, A>,
  ) => ContT1<M, R, A>
}

/**
 * @since 0.0.1
 */
export interface ContM2<M extends URIS2> {
  readonly of: <R, E, A>(a: A) => ContT2<M, R, E, A>
  readonly ap: <R, E, A, B>(
    mab: ContT2<M, R, E, (a: A) => B>,
    ma: ContT2<M, R, E, A>,
  ) => ContT2<M, R, E, B>
  readonly map: <R, E, A, B>(
    ma: ContT2<M, R, E, A>,
    f: (a: A) => B,
  ) => ContT2<M, R, E, B>
  readonly chain: <R, E, A, B>(
    ma: ContT2<M, R, E, A>,
    f: (a: A) => ContT2<M, R, E, B>,
  ) => ContT2<M, R, E, B>
  readonly callCC: <R, E, A>(
    f: (g: <B>(a: A) => ContT2<M, R, E, B>) => ContT2<M, R, E, A>,
  ) => ContT2<M, R, E, A>
}

/**
 * @since 0.0.1
 */
export interface ContM3<M extends URIS3> {
  readonly of: <R, U, E, A>(a: A) => ContT3<M, R, U, E, A>
  readonly ap: <R, U, E, A, B>(
    mab: ContT3<M, R, U, E, (a: A) => B>,
    ma: ContT3<M, R, U, E, A>,
  ) => ContT3<M, R, U, E, B>
  readonly map: <R, U, E, A, B>(
    ma: ContT3<M, R, U, E, A>,
    f: (a: A) => B,
  ) => ContT3<M, R, U, E, B>
  readonly chain: <R, U, E, A, B>(
    ma: ContT3<M, R, U, E, A>,
    f: (a: A) => ContT3<M, R, U, E, B>,
  ) => ContT3<M, R, U, E, B>
  readonly callCC: <R, U, E, A>(
    f: (g: <B>(a: A) => ContT3<M, R, U, E, B>) => ContT3<M, R, U, E, A>,
  ) => ContT3<M, R, U, E, A>
}

/**
 * @since 0.0.1
 */
export function getContM<M extends URIS3>(M: Monad3<M>): ContM3<M>
export function getContM<M extends URIS2>(M: Monad2<M>): ContM2<M>
export function getContM<M extends URIS>(M: Monad1<M>): ContM1<M>
export function getContM<M>(M: Monad<M>): ContM<M>
export function getContM<M>(M: Monad<M>): ContM<M> {
  return {
    map: (ma, f) => k => ma(a => k(f(a))),
    of: a => k => k(a),
    ap: (mf, ma) => k => mf(f => ma(a => k(f(a)))),
    chain: (ma, f) => k => ma(a => f(a)(k)),
    callCC: f => k => f(a => () => k(a))(k),
  }
}
