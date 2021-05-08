import { createContext, FC, useContext, useReducer } from 'react'
// @ts-ignore
import Pokedex from 'pokedex-promise-v2'

import { GlobalReducer as reducer, IniitalState, StateType } from './GlobalReducer'

type PokemonAbilities = {
  ability: NameUrl
  is_hidden: boolean
  slot: number
}

type PokemonTypes = {
  slot: number
  type: NameUrl
}

type PokemonStat = {
  base_stat: number
  effort: number
  stat: NameUrl
}

export type Pokemon = {
  id: number,
  name: {
    en: string
    jp: string
  },
  color: string
  sprite: string,
  genus: string,
  height: number
  weight: number
  flavorText: string
  abilities: PokemonAbilities[]
  types: PokemonTypes[]
  stats: PokemonStat[]
  family: Family[]
  generation: NameUrl
}

type ContextType = {
  pokemon: Pokemon | null
  loading: boolean
  getPokemon: (name: string) => void
  isLoading: (loading: boolean) => void
}

type NameUrl = {
  name: string
  url: string
}

type Names = {
  name: string
  language: NameUrl
}

type Genus = {
  genus: string
  language: NameUrl
}

type FlavorText = {
  flavor_text: string
  language: NameUrl
}

type Family = {
  id: string
  name: string
  sprite: string
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

      isLoading(true)

      const P = new Pokedex()

      const pokemon = await P.getPokemonByName(name)

      const species = await P.getPokemonSpeciesByName(name)

      const evolution = await P.getEvolutionChainById(species.evolution_chain.url.match(/(\d+)(?!.*\d+)/)[0])

      const family: Family[] = []

      family.push({
        id: evolution.chain.species.url.match(/(\d+)(?!.*\d+)/)[0],
        name: evolution.chain.species.name,
        sprite: ''
      })

      const sweet = (x: any): any => {
        if (x.length !== 0) {
          family.push({
            id: x[0].species.url.match(/(\d+)(?!.*\d+)/)[0],
            name: x[0].species.name,
            sprite: ''
          })
          return sweet(x[0]['evolves_to'])
        }
      }

      sweet(evolution['chain']['evolves_to'])

      for (const i of family) {
        i.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i.id}.png`
      }

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

      const f: FlavorText[] = species.flavor_text_entries

      const ft = f.filter(({ language: { name } }) => name === 'en')

      let flavorText = ''

      if (ft.length) flavorText = ft[0].flavor_text.replace(/\f/, ' ')

      const pokemonObject: Pokemon = {
        id: pokemon.id,
        name: {
          en: pokemon.name,
          jp: jp.length ? jp[0].name : ''
        },
        color,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        genus: genus[0].genus,
        abilities: pokemon.abilities,
        flavorText,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        types: pokemon.types,
        stats: pokemon.stats,
        family,
        generation: species.generation.name.split('-')[1]
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