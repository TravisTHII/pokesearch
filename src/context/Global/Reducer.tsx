import { Action, IniitalState, StateType } from './types'

export const Reducer = (state: IniitalState, action: Action): IniitalState => {
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