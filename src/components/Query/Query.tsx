import { useEffect, useRef } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'

import { useSearchContext } from '../../context/Search'

import { useSearchPokemon } from '../../hooks'

import { QueryCard } from './QueryCard'

import { StopScrolling } from '../../utils/functions'

export function Query() {

  const { value, active } = useSearchContext()

  const scrollRef = useRef<HTMLDivElement>(null!)

  const pokemon = useSearchPokemon(value)

  useEffect(() => {
    const ps = new PerfectScrollbar(scrollRef.current)

    StopScrolling(scrollRef.current)

    const reset = scrollRef.current

    return () => {
      reset.scrollTop = 0
      ps.destroy()
    }
  }, [value])

  return (
    <div className={`search_results${active ? ' visible box_shadow' : ''}`}>
      <span className="search_divider"></span>
      <div className="query" ref={scrollRef}>
        <ul className="query_results">
          {!pokemon.length &&
            <div className="empty_query">
              <h3>No Results found...</h3>
            </div>
          }
          {pokemon.map(pokemon => (
            <QueryCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  )
}