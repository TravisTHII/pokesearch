import { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducer'

import { State, InitialStateType, ProviderProps } from './types'

const initialState: State = {
  open: false,
  showSearchBar: false,
}

export const Context = createContext({} as InitialStateType)

export const useMobileContext = () => useContext(Context)

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openMenu = (open: boolean) =>
    dispatch({
      type: 'OPEN_MENU',
      payload: { open },
    })

  const showSearch = () =>
    dispatch({
      type: 'OPEN_SEARCH_BAR',
      payload: { showSearchBar: !state.showSearchBar },
    })

  return (
    <Context.Provider
      value={{
        ...state,
        openMenu,
        showSearch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
