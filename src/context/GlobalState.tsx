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
  sprite: string,
  genus: string
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

type Genus = {
  genus: string
  language: {
    name: string
    url: string
  }
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

      let color

      switch (species.color.name) {
        case 'black': color = 'pokemon_color_black'; break;
        case 'blue': color = 'pokemon_color_blue'; break;
        case 'brown': color = 'pokemon_color_brown'; break;
        case 'gray': color = 'pokemon_color_gray'; break;
        case 'green': color = 'pokemon_color_green'; break;
        case 'pink': color = 'pokemon_color_pink'; break;
        case 'purple': color = 'pokemon_color_purple'; break;
        case 'red': color = 'pokemon_color_red'; break;
        case 'white': color = 'pokemon_color_white'; break;
        case 'yellow': color = 'pokemon_color_yellow'; break;
        default: color = 'pokemon_color_white'; break;
      }

      const g: Genus[] = species.genera

      const genus = g.filter(({ language: { name } }) => name === 'en')

      const pokemonObject = {
        id: pokemon.id,
        name: {
          en: pokemon.name,
          jp: jp.length ? jp[0].name : ''
        },
        color,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        genus: genus[0].genus
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