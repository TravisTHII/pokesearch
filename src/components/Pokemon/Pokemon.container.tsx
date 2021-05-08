import { useEffect } from 'react'
import queryString from 'query-string'

import { useGlobalContext } from '../../context/GlobalState'

import { Location } from '../Search/types'

import { Render } from './Pokemon.render'

export function Container({ location }: Location) {

  const { loading, pokemon, getPokemon } = useGlobalContext()

  useEffect(() => {
    const q = queryString.parse(location.search).search
    if (q) getPokemon(String(q).toLowerCase())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  return (
    <Render
      loading={loading}
      pokemon={pokemon}
    />
  )
}