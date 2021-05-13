import { useEffect, useMemo, useState } from 'react'

import { SearchPokemon } from '../../types/Pokemon'

import { colorClass } from '../../utils/pokemon/helpers'

export const useSearchPokemon = (search: string) => {

  const [pokemon, setPokemon] = useState<SearchPokemon[]>([])

  useEffect(() => {
    fetch('/pokemon.json')
      .then(res => res.json())
      .then((pokemon: SearchPokemon[]) => {
        for (const i of pokemon) {
          i.color = colorClass(i.color)
        }

        setPokemon(pokemon)
      })

    return () => setPokemon([])
  }, [])

  const results = useMemo(() => {
    const lc = search.toLocaleLowerCase()
    return pokemon.filter(({ id, name: { english } }) =>
      english.includes(lc) || String(id).includes(lc)
    ).slice(0, 20)
  }, [search, pokemon])

  return results
}