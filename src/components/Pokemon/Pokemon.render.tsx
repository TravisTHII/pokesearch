import { Link } from 'react-router-dom'
import { Props } from './types'

export function Render({ loading, pokemon }: Props) {

  let content

  if (loading) {

    content =
      <div className="pokeball_loading">
        <img src="/images/pokeball.svg" alt="spinning poke ball" />
      </div>

  } else if (pokemon) {

    content =
      <div className="pokemon">

        <div className="pokemon_name">
          <h1 className={`name_en ${pokemon.color}`}>
            {pokemon.name.en}
          </h1>
          <h2 className={`name_jp ${pokemon.color}`}>
            {pokemon.name.jp}
          </h2>
          <h3 className="pokemon_id">
            {pokemon.id}
          </h3>
        </div>

        <div className="pokemon_details">

          <div className="pokemon_data">
            <div className="abilities">
              <h3>Abilities</h3>
              <ul>
                {pokemon.abilities.map(({ ability: { name } }, i) => (
                  <li key={i} className={pokemon.color}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="family">
              <h3>Family</h3>
              <ul>
                {pokemon.family.map(({ id, name, sprite }, i) => (
                  <li key={i} title={`#${id} ${name}`}>
                    <Link to={`/?search=${name}`}>
                      <img src={sprite} alt={`${name}_sprite`} />
                    </Link>
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
              <h2 className={`${pokemon.color}`}>
                {pokemon.genus}
              </h2>
            </div>

            <div className="pokemon_types">
              {pokemon.types.map(({ type: { name } }, i) => (
                <span key={i}>
                  <img src={`/images/types/${name}.svg`} alt={`${name} type`} />
                </span>
              ))}
            </div>

            <div className="stats">
              <ul className="stats_list">
                {pokemon.stats.map(({ base_stat, stat: { name } }, i) => (
                  <li key={i}>
                    {`${name}: `}
                    <span className={`${pokemon.color}`}>
                      {base_stat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="measurements">
              <p>{`Height: ${pokemon.height} meters`}</p>
              <p>{`Weight: ${pokemon.weight} kilograms`}</p>
            </div>

            <div className="generation">
              Generation: <span className={`${pokemon.color}`}>{pokemon.generation}</span>
            </div>

            <div className="flavor_text">
              <p className={pokemon.color}>
                {pokemon.flavorText}
              </p>
            </div>

          </div>

        </div>

      </div>
  }

  return (
    <div className="flex_ui">
      {content}
    </div>
  )
}