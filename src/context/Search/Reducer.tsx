import { DispatchName, Action, State } from './types'

export const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action

  if (type === DispatchName.SET_VALUE) {
    return {
      ...state,
      ...payload
    }
  }

  if (type === DispatchName.SET_ACTIVE) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}