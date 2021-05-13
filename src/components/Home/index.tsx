import { useQuery } from 'react-query'

import { Search } from '../Search'
import { Pokemon } from '../Pokemon'
import { Random } from '../Random'

import { Props } from './types'

import { getPokemon } from '../../utils/pokemon'

export const Home = ({ location: { search } }: Props) => {

  const { data, isLoading, error } = useQuery(
    ['pokemon', search],
    () => getPokemon(search),
    {
      enabled: Boolean(search)
    }
  )

  return (
    <>
      <Search
        isLoading={isLoading}
        search={search}
      />
      <Pokemon
        isLoading={isLoading}
        error={error}
        pokemon={data}
      />
      <Random />
    </>
  )
}