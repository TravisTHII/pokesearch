import { createContext, FC, useContext, useReducer } from 'react'
// @ts-ignore
import Pokedex from 'pokedex-promise-v2'

import { Reducer as reducer } from './Reducer'

import {
  ContextType,
  Props,
  IniitalState,
  StateType,
  Pokemon
} from './types'

import { colorClass, filterLanguage, getEvolutionChain } from '../../utils/pokemon'

const initialState: IniitalState = {
  pokemon: null,
  loading: false
}

const Context = createContext<ContextType>(initialState as ContextType)

export const useGlobalContext = () => useContext(Context)

export const Provider: FC<Props> = ({ children, search }: Props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getPokemon = async (name: string) => {
    try {

      isLoading(true)

      const P = new Pokedex()

      const pokemon = await P.getPokemonByName(name)

      const species = await P.getPokemonSpeciesByName(name)

      const evolution = await P.resource([species.evolution_chain.url])

      const pokemonData: Pokemon = {
        id: pokemon.id,
        name: {
          en: pokemon.name,
          jp: filterLanguage(species.names, 'ja')[0].name
        },
        color: colorClass(species.color.name),
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        genus: filterLanguage(species.genera, 'en')[0].genus,
        abilities: pokemon.abilities,
        flavorText: filterLanguage(species.flavor_text_entries, 'en')[0].flavor_text.replace(/\f/, ' '),
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        types: pokemon.types,
        stats: pokemon.stats,
        family: getEvolutionChain(evolution),
        generation: species.generation.name.split('-')[1]
      }

      dispatch({
        type: StateType.GET_POKEMON,
        payload: {
          pokemon: pokemonData
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
    <Context.Provider value={{
      ...state,
      search,
      getPokemon,
      isLoading
    }}>
      {children}
    </Context.Provider>
  )
}