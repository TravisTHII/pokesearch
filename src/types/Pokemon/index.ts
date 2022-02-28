export type Pokemon = {
  id: number
  name: {
    en: string
    jp: string
  }
  color: string
  sprite: string
  genus: string
  height: number
  weight: number
  flavorText: string
  abilities: Abilities[]
  types: Types[]
  stats: Stats[]
  family: Family[]
  generation: string
}

export type SearchPokemon = {
  id: number
  name: {
    english: string
    japanese: string
  }
  color: string
  genus: string
  types: [
    {
      name: string
    }
  ]
  image: string
}

export type Abilities = {
  ability: NameUrl
  is_hidden: boolean
  slot: number
}

export type Types = {
  slot: number
  type: NameUrl
}

export type Stats = {
  base_stat: number
  effort: number
  stat: NameUrl
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

export type Family = {
  id: string
  name: string
  sprite: string
}

type FlavorText = {
  flavor_text: string
  language: NameUrl
}

export type Evolution = {
  species: NameUrl
  evolves_to: []
}

export type PokemonData = {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string
      }
    }
  }
  abilities: Abilities[]
  types: Types[]
  stats: Stats[]
}

export type SpeciesData = {
  names: Names[]
  color: {
    name: string
  }
  evolution_chain: {
    url: string
  }
  genera: Genus[]
  flavor_text_entries: FlavorText[]
  generation: NameUrl
}

export type EvolutionData = {
  chain: Evolution
}
