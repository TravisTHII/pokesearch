import { Pokemon } from '../../types/Pokemon'

export interface ContainerProps {
  isLoading: boolean
  pokemon: Pokemon | undefined
  error: unknown
}

export interface RenderProps {
  pokemon: Pokemon
}