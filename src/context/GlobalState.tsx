import { createContext, FC, useContext, useReducer } from 'react'
// @ts-ignore
import Pokedex from 'pokedex-promise-v2'

import { GlobalReducer as reducer, State, StateType } from './GlobalReducer'

export type initialStateType = {
  pokemon: any
  loading: boolean
  fetched: boolean
  getPokemon: (name: string) => void
  isLoading: (loading: boolean) => void
}

const initialState: State = {
  pokemon: {},
  loading: false,
  fetched: false
}

const GlobalContext = createContext<initialStateType>(initialState as initialStateType)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getPokemon = async (name: string) => {
    try {

      const P = new Pokedex()

      const pokemon = await P.getPokemonByName(name)

      // const species = await P.getPokemonSpeciesByName(pokemon.name)

      // console.log(species);

      dispatch({
        type: StateType.GET_POKEMON,
        payload: {
          pokemon
        }
      })

    } catch (error) {

      console.error(error)

      isLoading(false)

    }
  }

  const isLoading = (loading: boolean) => {
    dispatch({
      type: StateType.LOADING,
      payload: {
        loading
      }
    })
  }

  return (
    <GlobalContext.Provider value={{
      ...state,
      getPokemon,
      isLoading
    }}>
      {children}
    </GlobalContext.Provider>
  )
}