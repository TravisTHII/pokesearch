import { Link } from 'react-router-dom'

import { SearchPokemon } from '../../../types/Pokemon'

export const Item = ({ pokemon }: { pokemon: SearchPokemon }) => (
  <li className="ms_li">
    <Link to={`/pokedex?search=${pokemon.id}`} className="container">
      <div className="image">
        <img src={pokemon.image} alt={pokemon.name.english} />
      </div>
      <div className="data">
        <div className={`pokemon_color_${pokemon.color}`}>
          <p>#{pokemon.id}</p>
        </div>
        <div className={`pokemon_color_${pokemon.color}`}>
          <h3>{pokemon.name.english}</h3>
        </div>
      </div>
    </Link>
  </li>
)
