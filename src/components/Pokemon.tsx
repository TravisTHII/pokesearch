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
        <div className="poke_name">
          <h1>{pokemon.name.en}</h1>
          <p className="name_en">{pokemon.id}</p>
          <p
            className="name_jp"
            style={{ color: pokemon.color }}
          >
            {pokemon.name.jp}
          </p>
        </div>
        <div className="poke_image">
          <img src={pokemon.sprite} alt={`${pokemon.name.en}_sprite`} />
        </div>
      </div>
  }

  return (
    <>
      {content}
    </>
  )
}