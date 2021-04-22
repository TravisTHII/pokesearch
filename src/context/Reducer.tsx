import { STATE } from './actions'

import { initialState } from './State'

type ACTION =
  | { type: 'GET', payload?: Array<string> }
  | { type: 'LOADING', payload?: Array<string> }

export default (state: typeof initialState, action: ACTION) => {
  const { type, payload } = action

  if (type === STATE.LOADING) {
    return {
      ...state,
      loading: true
    }
  }

  return { ...state }
}