import { useEffect } from 'react'
import queryString from 'query-string'

import { useGlobalContext } from '../../context/Global'

import { Render } from './Pokemon.render'

export function Container() {

  const { loading, search, pokemon, getPokemon } = useGlobalContext()

  useEffect(() => {
    const q = queryString.parse(search).search
    if (q) getPokemon(String(q).toLowerCase())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <Render
      loading={loading}
      pokemon={pokemon}
    />
  )
}