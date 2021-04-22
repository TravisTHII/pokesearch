import React, { createContext, ReactNode, useReducer } from 'react'
// @ts-ignore
import { Pokedex } from 'pokeapi-js-wrapper'

import Reducer from './Reducer'

import { STATE } from './actions'

interface ProviderProps {
  children: ReactNode
}

interface ContextProviderProps {
  loading: boolean,
  getPokemon?: (name: string) => void
}

export const initialState: ContextProviderProps = {
  loading: false
}

export const Context = createContext(initialState)

export const Provider = ({ children }: ProviderProps) => {

  const [state, dispatch] = useReducer(Reducer, initialState)

  const getPokemon = async (name: string) => {
    try {

      console.log(name)

      dispatch({
        type: 'LOADING'
      })

      const P = new Pokedex.Pokedex()

      const data = await P.getPokemonByName(name)

      console.log(data)


    } catch (error) {

      console.error(error)

    }
  }

  return (
    <Context.Provider value={{
      ...state,
      getPokemon
    }}>
      { children}
    </Context.Provider>
  )
}