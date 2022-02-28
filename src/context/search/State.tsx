import { createContext, useContext, useReducer, useCallback } from 'react'

import { reducer } from './reducer'

import { State, InitialStateType, ProviderProps } from './types'

const initialState: State = {
  isLoading: false,
  value: '',
  active: false,
}

const Context = createContext({} as InitialStateType)

export const useSearchContext = () => useContext(Context)

export const Provider = ({ children, isLoading, search }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setValue = useCallback(
    (value: string) =>
      dispatch({
        type: 'SET_VALUE',
        payload: {
          value,
        },
      }),
    []
  )

  const setActive = (active: boolean) => {
    dispatch({
      type: 'SET_ACTIVE',
      payload: {
        active,
      },
    })
  }

  return (
    <Context.Provider
      value={{
        ...state,
        isLoading,
        search,
        setValue,
        setActive,
      }}
    >
      {children}
    </Context.Provider>
  )
}
