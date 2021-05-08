
export type PokemonAbilities = {
  ability: NameUrl
  is_hidden: boolean
  slot: number
}

export type PokemonTypes = {
  slot: number
  type: NameUrl
}

export type PokemonStat = {
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

export type ContextType = {
  pokemon: Pokemon | null
  loading: boolean
  search: string
  getPokemon: (name: string) => void
  isLoading: (loading: boolean) => void
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

export type FlavorText = {
  flavor_text: string
  language: NameUrl
}

export type Family = {
  id: string
  name: string
  sprite: string
}

export interface ProviderProps {
  children: React.ReactNode,
  search: string
}

export enum StateType {
  GET_POKEMON = 'GET_POKEMON',
  LOADING = 'LOADING'
}

export type Action =
  | {
    type: StateType.GET_POKEMON
    payload: { pokemon: any }
  }
  | {
    type: StateType.LOADING
    payload: { loading: boolean }
  }

export type IniitalState = {
  pokemon: Pokemon | null
  loading: boolean
}