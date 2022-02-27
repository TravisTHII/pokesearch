import { useEffect, useMemo, useState } from 'react'

import { SearchPokemon } from '../../types/Pokemon'

export const useSearchPokemon = (search: string) => {
  const [pokemon, setPokemon] = useState<SearchPokemon[]>([])

  useEffect(() => {
    fetch('/pokemon.json')
      .then((res) => res.json())
      .then((pokemon: SearchPokemon[]) => setPokemon(pokemon))

    return () => setPokemon([])
  }, [])

  const results = useMemo(() => {
    const lc = search.toLocaleLowerCase().trim()
    return pokemon
      .filter(
        ({ id, name: { english } }) =>
          english.includes(lc) || String(id).includes(lc)
      )
      .slice(0, 20)
  }, [search, pokemon])

  return results
}
