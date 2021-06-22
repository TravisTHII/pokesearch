import { createContext, useContext, useReducer } from 'react'
import { useHistory } from 'react-router'
import { Reducer } from './Reducer'

import { State, InitialStateType, ProviderProps } from './types'

import { invalidValue } from '../../utils/functions'

const initialState: State = {
  isLoading: false,
  value: '',
  active: false,
}

export const Context = createContext({} as InitialStateType)

export const useSearchContext = () => useContext(Context)

export const Provider = ({ children, isLoading, search }: ProviderProps) => {

  const [state, dispatch] = useReducer(Reducer, initialState)

  const history = useHistory()

  const setValue = (value: string) => {
    dispatch({
      type: 'SET_VALUE',
      payload: {
        value
      }
    })
  }

  const setActive = (active: boolean) => {
    dispatch({
      type: 'SET_ACTIVE',
      payload: {
        active
      }
    })
  }

  const submitSearch = () => {
    !invalidValue(state.value) && history.push(`?search=${state.value.trim()}`)
    if (state.active) setActive(false)
  }

  const showResults = () =>
    setActive(!invalidValue(state.value))

  const startSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue(value)
    setActive(!invalidValue(value) === true)
  }

  const handleSubmitSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      submitSearch()
      setActive(false)
    }
  }

  return (
    <Context.Provider value={{
      ...state,
      isLoading,
      search,
      setValue,
      setActive,
      submitSearch,
      showResults,
      startSearch,
      handleSubmitSearch
    }}>
      {children}
    </Context.Provider>
  )
}