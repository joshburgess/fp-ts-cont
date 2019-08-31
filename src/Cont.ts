import { identity } from 'fp-ts/lib/Identity'
import { getContM } from './ContT'
import { Monad2 } from 'fp-ts/lib/Monad'
import { MonadCont2 } from './MonadCont'
import { pipeable } from 'fp-ts/lib/pipeable'

const T = getContM(identity)

declare module 'fp-ts/lib/HKT' {
  interface URItoKind2<E, A> {
    Cont: Cont<E, A>
  }
}

/**
 * @since 0.0.1
 */
export const URI = 'Cont'

/**
 * @since 0.0.1
 */
export type URI = typeof URI

/**
 * @since 0.0.1
 */
export interface Cont<R, A> {
  (f: (a: A) => R): R
}

/**
 * @since 0.0.1
 */
export const callCC: <R, A>(
  f: (g: <B>(a: A) => Cont<R, B>) => Cont<R, A>,
) => Cont<R, A> = T.callCC

/**
 * @since 0.0.1
 */
export const of: <R, A>(a: A) => Cont<R, A> = T.of

/**
 * @since 0.0.1
 */
export const cont: Monad2<URI> & MonadCont2<URI> = {
  URI,
  of,
  ap: T.ap,
  map: T.map,
  chain: T.chain,
  callCC,
}

/**
 * @since 0.0.1
 */
export const {
  ap,
  apFirst,
  apSecond,
  chain,
  chainFirst,
  flatten,
  map,
} = pipeable(cont)
