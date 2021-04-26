import React, { createContext, ReactNode, useReducer } from 'react'
// @ts-ignore
import Pokedex from 'pokedex-promise-v2'

import Reducer from './Reducer'

import { STATE } from './actions'

interface ProviderProps {
  children: ReactNode
}

interface ContextProviderProps {
  pokemon: any,
  loading: boolean,
  fetched: boolean,
  getPokemon?: (name: string) => void
  isLoading?: (loading: boolean) => void
}

export const initialState: ContextProviderProps = {
  pokemon: {},
  loading: false,
  fetched: false,
}

export const Context = createContext(initialState)

export const Provider = ({ children }: ProviderProps) => {

  const [state, dispatch] = useReducer(Reducer, initialState)

  const getPokemon = async (name: string) => {
    try {

      const P = new Pokedex

      const pokemon = await P.getPokemonByName(name)

      const species = await P.getPokemonSpeciesByName(pokemon.name)

      console.log(species);
      
      dispatch({
        type: 'GET_POKEMON',
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
      type: 'LOADING',
      payload: {
        loading
      }
    })
  }

  return (
    <Context.Provider value={{
      ...state,
      getPokemon,
      isLoading
    }}>
      { children}
    </Context.Provider>
  )
}