import axios from 'axios'
import queryString from 'query-string'

import { createPokemonObject } from './createPokemonObject'

export const getPokemon = async (search: string) => {
  const pokeAPI = 'https://pokeapi.co/api/v2'

  let q = queryString.parse(search).search

  if (q) q = String(q).trim().toLocaleLowerCase()

  const { data: pokemon } = await axios.get(`${pokeAPI}/pokemon/${q}/`)

  const { data: species } = await axios.get(`${pokeAPI}/pokemon-species/${q}/`)

  const { data: evolution } = await axios.get(species.evolution_chain.url)

  return createPokemonObject(pokemon, species, evolution)
}
