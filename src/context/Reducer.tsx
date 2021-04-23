import { STATE } from './actions'

import { initialState } from './State'

type ACTION =
  | { type: 'GET_POKEMON', payload: { pokemon: object } }
  | { type: 'LOADING', payload: string }

export default (state: typeof initialState, action: any) => {
  const { type, payload } = action

  if (type === STATE.GET_POKEMON) {
    return {
      ...state,
      loading: false,
      fetched: true,
      pokemon: payload.pokemon
    }
  }

  if (type === STATE.LOADING) {
    return {
      ...state,
      loading: payload.loading
    }
  }

  return { ...state }
}