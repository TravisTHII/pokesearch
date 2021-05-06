
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

export type State = {
  pokemon: any
  loading: boolean
  fetched: boolean
}

export const GlobalReducer = (state: State, action: Action): State => {
  const { type, payload } = action

  if (type === StateType.GET_POKEMON) {
    return {
      ...state,
      loading: false,
      fetched: true,
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