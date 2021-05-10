
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
  abilities: Abilities[]
  types: Types[]
  stats: Stats[]
  family: Family[]
  generation: string
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

export type NameUrl = {
  name: string
  url: string
}

export type Names = {
  name: string
  language: NameUrl
}

export type Genus = {
  genus: string
  language: NameUrl
}

export type Family = {
  id: string
  name: string
  sprite: string
}

export type FlavorText = {
  flavor_text: string
  language: NameUrl
}

export type Evolution = {
  species: NameUrl
  evolves_to: []
}

export type Chain = {
  chain: {
    species: NameUrl
    evolves_to: Evolution[]
  }
}

export type PokemonResponseObject = {
  pokemon: PokemonData
  species: SpeciesData
  evolution: Chain
}

export type PokemonResponse = {
  data: PokemonData
}

export type SpeciesResponse = {
  data: SpeciesData
}

export type EvolutionResponse = {
  data: Chain
}

type PokemonData = {
  id: number,
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

type SpeciesData = {
  names: []
  color: {
    name: string
  }
  evolution_chain: {
    url: string
  }
  genera: []
  flavor_text_entries: []
  generation: NameUrl
}