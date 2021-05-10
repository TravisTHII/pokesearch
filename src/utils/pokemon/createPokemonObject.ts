import { Pokemon, PokemonResponseObject } from '../../types/Pokemon'

import {
  colorClass,
  filterLanguage,
  formatStats,
  getEvolutionChain
} from './helpers'

export function createPokemonObject({
  pokemon,
  species,
  evolution
}: PokemonResponseObject): Pokemon {
  
  return {
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
    stats: formatStats(pokemon.stats),
    family: getEvolutionChain(evolution.chain),
    generation: species.generation.name.split('-')[1]
  }
}