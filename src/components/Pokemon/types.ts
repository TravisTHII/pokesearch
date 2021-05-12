import { Pokemon } from '../../types/Pokemon'

export interface ContainerProps {
  isLoading: boolean
  error: unknown
  pokemon: Pokemon | undefined
}

export interface RenderProps {
  pokemon: Pokemon
}