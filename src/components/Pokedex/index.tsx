import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Header } from '../header'
import { Pokemon } from '../pokemon'
import { Search } from '../search'

import { getPokemon } from '../../utils/pokemon'

export const Pokedex = () => {
  const location = useLocation()

  const { data, isLoading, error } = useQuery(
    ['pokemon', location.search],
    () => getPokemon(location.search),
    {
      enabled: Boolean(location.search),
    }
  )

  return (
    <>
      <Header>
        <Link to="/" className="header_logo flex_ui">
          <img src="/images/pokemon.svg" alt="Pokémon logo" />
        </Link>
        <Search isLoading={isLoading} search={location.search} />
      </Header>
      <div className="pokemon_container">
        <Pokemon isLoading={isLoading} error={error} pokemon={data} />
      </div>
    </>
  )
}
