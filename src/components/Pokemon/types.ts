import { Pokemon } from '../../context/GlobalState'

export interface Props {
  loading: boolean,
  pokemon: Pokemon | null
}