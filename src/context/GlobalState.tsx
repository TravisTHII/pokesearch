import { createContext, FC, useContext, useReducer } from 'react'
// @ts-ignore
import Pokedex from 'pokedex-promise-v2'

import { GlobalReducer as reducer, IniitalState, StateType } from './GlobalReducer'

export type Pokemon = {
  id: number,
  name: {
    en: string
    jp: string
  },
  color: string
  sprite: string
}

type ContextType = {
  pokemon: Pokemon | null
  loading: boolean
  getPokemon: (name: string) => void
  isLoading: (loading: boolean) => void
}

type Names = {
  language: {
    name: string
    url: string
  },
  name: string
}

const initialState: IniitalState = {
  pokemon: null,
  loading: false,
}

const GlobalContext = createContext<ContextType>(initialState as ContextType)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getPokemon = async (name: string) => {
    try {

      const P = new Pokedex()

      const pokemon = await P.getPokemonByName(name)

      const species = await P.getPokemonSpeciesByName(name)

      const Jp: Names[] = species.names

      const jp = Jp.filter(({ language: { name } }) => name === 'ja')

      const pokemonObject = {
        id: pokemon.id,
        name: {
          en: pokemon.name,
          jp: jp.length ? jp[0].name : ''
        },
        color: species.color.name,
        sprite: pokemon.sprites.other['official-artwork'].front_default
      }

      dispatch({
        type: StateType.GET_POKEMON,
        payload: {
          pokemon: pokemonObject
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