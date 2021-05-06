import { useGlobalContext } from '../context/GlobalState'

export function Pokemon() {

  const { fetched, pokemon } = useGlobalContext()

  return (
    <>
      {pokemon && fetched &&
        <div className="pokemon">
          <div className="poke_name">
            <span>
              <h1>{pokemon.name}</h1>
            </span>
            <span>
              <p>{pokemon.id}</p>
            </span>
          </div>
          <div className="poke_image">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
          </div>
        </div>
      }
    </>
  )
}