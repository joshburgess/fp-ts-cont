import { Monad, Monad1, Monad2, Monad2C, Monad3, Monad4 } from 'fp-ts/lib/Monad'
import {
  HKT,
  Kind,
  Kind2,
  Kind3,
  Kind4,
  URIS,
  URIS2,
  URIS3,
  URIS4,
} from 'fp-ts/lib/HKT'

/**
 * @since 0.0.1
 */
export interface MonadCont<M> extends Monad<M> {
  readonly callCC: <A>(f: (g: <B>(a: A) => HKT<M, B>) => HKT<M, A>) => HKT<M, A>
}

/**
 * @since 0.0.1
 */
export interface MonadCont1<M extends URIS> extends Monad1<M> {
  readonly callCC: <A>(
    f: (g: <B>(a: A) => Kind<M, B>) => Kind<M, A>,
  ) => Kind<M, A>
}

/**
 * @since 0.0.1
 */
export interface MonadCont2<M extends URIS2> extends Monad2<M> {
  readonly callCC: <E, A>(
    f: (g: <B>(a: A) => Kind2<M, E, B>) => Kind2<M, E, A>,
  ) => Kind2<M, E, A>
}

/**
 * @since 0.0.1
 */
export interface MonadCont2C<M extends URIS2, E> extends Monad2C<M, E> {
  readonly callCC: <A>(
    f: (g: <B>(a: A) => Kind2<M, E, B>) => Kind2<M, E, A>,
  ) => Kind2<M, E, A>
}

/**
 * @since 0.0.1
 */
export interface MonadCont3<M extends URIS3> extends Monad3<M> {
  readonly callCC: <R, E, A>(
    f: (g: <B>(a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, A>,
  ) => Kind3<M, R, E, A>
}

/**
 * @since 0.0.1
 */
export interface MonadCont4<M extends URIS4> extends Monad4<M> {
  readonly callCC: <S, R, E, A>(
    f: (g: <B>(a: A) => Kind4<M, S, R, E, B>) => Kind4<M, S, R, E, A>,
  ) => Kind4<M, S, R, E, A>
}
