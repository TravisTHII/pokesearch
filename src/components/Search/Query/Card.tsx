import { Link } from 'react-router-dom'

import { CardProps } from './types'

export const Card = ({ pokemon }: CardProps) => (
  <li className="query_card">
    <Link className="query_item" to={`/pokedex?search=${pokemon.id}`}>
      <div className="image">
        <img src={pokemon.image} alt={pokemon.name.english} />
      </div>
      <div className="query_info">
        <div className="query_header">
          <h1 className={pokemon.color}>{pokemon.name.english}</h1>
          <div className="name_content">
            <div>
              <h2 className={pokemon.color}>{pokemon.name.japanese}</h2>
            </div>
            <div className="genus_name_content">
              <h2 className={pokemon.color}>{pokemon.genus}</h2>
            </div>
          </div>
          <h3>{pokemon.id}</h3>
        </div>
        <div className="query_types">
          {pokemon.types.map(({ name }, i) => (
            <span key={i}>
              <img
                src={`/images/pokemon-types/${name}.svg`}
                alt={`${name} type`}
              />
            </span>
          ))}
        </div>
      </div>
    </Link>
  </li>
)
