import { SearchPokemon } from '../../types/Pokemon'

export interface QueryProps {
  value: string
  active: boolean
}

export interface QueryCardProps {
  pokemon: SearchPokemon
}