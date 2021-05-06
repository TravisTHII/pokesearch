import { Pokemon } from './GlobalState'

export enum StateType {
  GET_POKEMON = 'GET_POKEMON',
  LOADING = 'LOADING'
}

type Action =
  | {
    type: StateType.GET_POKEMON
    payload: { pokemon: any }
  }
  | {
    type: StateType.LOADING
    payload: { loading: boolean }
  }

export type IniitalState = {
  pokemon: Pokemon | null
  loading: boolean
}

export const GlobalReducer = (state: IniitalState, action: Action): IniitalState => {
  const { type, payload } = action

  if (type === StateType.GET_POKEMON) {
    return {
      ...state,
      loading: false,
      ...payload
    }
  }

  if (type === StateType.LOADING) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}