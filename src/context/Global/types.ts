
export interface Props {
  children: React.ReactNode,
  search: string
}

export type ContextType = {
  pokemon: Pokemon | null
  loading: boolean
  search: string
  getPokemon: (name: string) => void
  isLoading: (loading: boolean) => void
}

export enum StateType {
  GET_POKEMON = 'GET_POKEMON',
  LOADING = 'LOADING'
}

export type Action =
  | {
    type: StateType.GET_POKEMON
    payload: { pokemon: Pokemon }
  }
  | {
    type: StateType.LOADING
    payload: { loading: boolean }
  }

export type IniitalState = {
  pokemon: Pokemon | null
  loading: boolean
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
  abilities: Abilities[]
  types: Types[]
  stats: Stats[]
  family: Family[]
  generation: NameUrl
}

type Abilities = {
  ability: NameUrl
  is_hidden: boolean
  slot: number
}

type Types = {
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