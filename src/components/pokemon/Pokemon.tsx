import { Link } from 'react-router-dom'

import { PokemonProps } from './types'

export const Pokemon = ({ pokemon }: PokemonProps) => (
  <div className="pokemon">
    <div className="pokemon_name">
      <div className="main">
        <h1 className={`name_en ${pokemon.color}`}>{pokemon.name.en}</h1>
        <h2 className={`name_jp ${pokemon.color}`}>{pokemon.name.jp}</h2>
        <h3 className="pokemon_id">{pokemon.id}</h3>
      </div>
      <div className="mobile">
        <ul className="card_ui list_divider">
          <li>
            <span>english</span>
            <span>
              <h1 className={`${pokemon.color}`}>{pokemon.name.en}</h1>
            </span>
          </li>
          <li>
            <span>japanese</span>
            <span>
              <h2 className={`${pokemon.color}`}>{pokemon.name.jp}</h2>
            </span>
          </li>
          <li>
            <span>pokedex</span>
            <span>
              <h3 className={`${pokemon.color}`}>{pokemon.id}</h3>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="pokemon_details">
      <div className="pokemon_data">
        <div className="abilities">
          <h3>Abilities</h3>
          <ul className="card_ui list_divider">
            {pokemon.abilities.map(({ ability: { name } }, i) => (
              <li key={i} className={pokemon.color}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pokemon_image">
        <span>
          <img src={pokemon.sprite} alt={`${pokemon.name.en}_sprite`} />
        </span>
      </div>

      <div className="pokemon_stats">
        <div>
          <h2 className={`${pokemon.color}`}>{pokemon.genus}</h2>
        </div>

        <div className="pokemon_types">
          {pokemon.types.map(({ type: { name } }, i) => (
            <span key={i}>
              <img
                src={`/images/pokemon-types/${name}.svg`}
                alt={`${name} type`}
              />
            </span>
          ))}
        </div>

        <div>
          <ul className="stats_list card_ui list_divider">
            {pokemon.stats.map(({ base_stat, stat: { name } }, i) => (
              <li key={i}>
                <span>{`${name}`}</span>
                <span className={`${pokemon.color}`}>{base_stat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="extra_stats card_ui list_divider">
            <li>
              <p>{`Height: ${pokemon.height} meters`}</p>
            </li>
            <li>
              <p>{`Weight: ${pokemon.weight} kilograms`}</p>
            </li>
            <li>
              Generation:{' '}
              <span className={`generation ${pokemon.color}`}>
                {pokemon.generation}
              </span>
            </li>
          </ul>
        </div>

        <div className="flavor_text card_ui">
          <p className={pokemon.color}>{pokemon.flavorText}</p>
        </div>
      </div>
    </div>

    <div className="pokemon_family">
      <h3>Evolution</h3>
      <ul>
        {pokemon.family.map(({ id, name, sprite }, i) => (
          <li key={i} title={`#${id} ${name}`}>
            <Link to={`/pokedex?search=${id}`}>
              <img src={sprite} alt={`${name}_sprite`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
