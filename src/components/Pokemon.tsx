import { useGlobalContext } from '../context/GlobalState'

export function Pokemon() {

  const { loading, pokemon } = useGlobalContext()

  let content

  if (loading) {

    content =
      <div>
        <h1>Loading...</h1>
      </div>

  } else if (pokemon) {

    content =
      <div className="pokemon">

        <div className="pokemon_name">
          <h1 className={`name_en ${pokemon.color}`}>
            {pokemon.name.en}
          </h1>
          <p className="pokemon_id">
            {pokemon.id}
          </p>
          <p className={`name_jp ${pokemon.color}`}>
            {pokemon.name.jp}
          </p>
        </div>

        <div className="pokemon_details">

          <div className="pokemon_data">
            <div className="abilities">
              <h3>Abilities</h3>
              <ul>
                {pokemon.abilities.map((ability, i) => (
                  <li
                    key={i}
                    className={`pokemon_ability ${pokemon.color}`}
                  >
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="family">
              <h3>Family</h3>
              <ul className="evolution_chain">
                {pokemon.family.map((family, i) => (
                  <li
                    key={i}
                    className="evolution"
                  >
                    <img src={family.sprite} alt={`${family.name}_sprite`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pokemon_image">
            <img src={pokemon.sprite} alt={`${pokemon.name.en}_sprite`} />
          </div>

          <div className="pokemon_stats">

            <div>
              <h3>{pokemon.genus}</h3>
            </div>

            <div className="pokemon_types">
              {pokemon.types.map((type, i) => (
                <span
                  key={i}
                  className="pokemon_type"
                >
                  <img src={`/images/types/${type.type.name}.svg`} alt={`${pokemon.name.en} - ${type.type.name} type`} />
                </span>
              ))}
            </div>

            <div className="stats">
              <ul className="stats_list">
                {pokemon.stats.map((stat, i) => (
                  <li
                    key={i}
                  >
                    {`${stat.stat.name}: `}
                    <span className={`${pokemon.color}`}>
                      {stat.base_stat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="measurements">
              <p>Height: {pokemon.height} meters</p>
              <p>Weight: {pokemon.weight} kilograms</p>
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
    <>
      {content}
    </>
  )
}