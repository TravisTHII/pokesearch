import axios from 'axios'
import queryString from 'query-string'

import { createPokemonObject } from './createPokemonObject'

import {
  EvolutionResponse,
  PokemonResponse,
  SpeciesResponse,
} from '../../types/Pokemon'

export const getPokemon = async (search: string) => {
  const pokeAPI = 'https://pokeapi.co/api/v2'

  let q = queryString.parse(search).search

  if (q) q = String(q).trim().toLocaleLowerCase()

  const { data: pokemon }: PokemonResponse = await axios.get(
    `${pokeAPI}/pokemon/${q}/`
  )

  const { data: species }: SpeciesResponse = await axios.get(
    `${pokeAPI}/pokemon-species/${q}/`
  )

  const { data: evolution }: EvolutionResponse = await axios.get(
    species.evolution_chain.url
  )

  return createPokemonObject({ pokemon, species, evolution })
}
