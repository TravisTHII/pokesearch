import { Action, State } from './types'

export const reducer = (state: State, action: Action): State => {
  if (action.type === 'SET_VALUE') {
    return {
      ...state,
      value: action.payload.value,
    }
  }

  if (action.type === 'SET_ACTIVE') {
    return {
      ...state,
      active: action.payload.active,
    }
  }

  return state
}
