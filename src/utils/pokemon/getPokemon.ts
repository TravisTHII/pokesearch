import axios from 'axios'
import queryString from 'query-string'

export const getPokemon = async (search: string) => {

  const pokeAPI = 'https://pokeapi.co/api/v2'

  const q = queryString.parse(search).search

  const pokemon = await axios.get(`${pokeAPI}/pokemon/${q}/`)

  const species = await axios.get(`${pokeAPI}/pokemon-species/${q}/`)

  const evolution = await axios.get(species.data.evolution_chain.url)

  return {
    pokemon: pokemon.data,
    species: species.data,
    evolution: evolution.data
  }
}