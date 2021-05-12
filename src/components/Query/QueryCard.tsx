import { Link } from 'react-router-dom'

import { QueryCardProps } from './types'

export const QueryCard = ({ pokemon }: QueryCardProps) =>
  <li className="query_card">
    <Link to={`/?search=${pokemon.id}`}>
      <div className="image">
        <img src={pokemon.image} alt={pokemon.name.english} />
      </div>
      <div className="query_info">
        <div className="query_header">
          <h1 className={pokemon.color}>
            {pokemon.name.english}
          </h1>
          <h2 className={pokemon.color}>
            {pokemon.name.japanese}
          </h2>
          <h3>{pokemon.id}</h3>
        </div>
        <div className="query_types">
          {pokemon.types.map(({ name }, i) => (
            <span key={i}>
              <img src={`/images/types/${name}.svg`} alt={`${name} type`} />
            </span>
          ))}
        </div>
      </div>
    </Link>
  </li>