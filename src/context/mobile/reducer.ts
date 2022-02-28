import { Action, State } from './types'

export const reducer = (state: State, action: Action): State => {
  if (action.type === 'OPEN_MENU') {
    return {
      ...state,
      open: action.payload.open,
    }
  }

  if (action.type === 'OPEN_SEARCH_BAR') {
    return {
      ...state,
      showSearchBar: action.payload.showSearchBar,
    }
  }

  return state
}
