import axios from 'axios'
import queryString from 'query-string'

export const getPokemon = async (search: string) => {

  const pokeAPI = 'https://pokeapi.co/api/v2'

  let q = queryString.parse(search).search

  if (q) q = String(q).trim().toLocaleLowerCase()

  const pokemon = await axios.get(`${pokeAPI}/pokemon/${q}/`)

  const species = await axios.get(`${pokeAPI}/pokemon-species/${q}/`)

  const evolution = await axios.get(species.data.evolution_chain.url)

  return {
    pokemon: pokemon.data,
    species: species.data,
    evolution: evolution.data
  }
}