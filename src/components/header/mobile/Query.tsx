import { useSearchPokemon } from '../../../hooks'

import { Item } from './QueryItem'

export const Query = ({ value }: { value: string }) => {
  const pokemon = useSearchPokemon(value)

  return (
    <div className="ms_query card_ui">
      <div className="msq_header">
        <p>search results</p>
      </div>
      <ul className="list_divider">
        {!pokemon.length && (
          <div className="empty_query">
            <h3>No Results found...</h3>
          </div>
        )}
        {pokemon.map((pokemon) => (
          <Item key={`${pokemon.id}_query`} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}
