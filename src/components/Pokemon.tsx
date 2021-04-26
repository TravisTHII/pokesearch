import React, { useContext } from 'react'

import { Context } from '../context/State'

export function Pokemon() {

  const { fetched, pokemon } = useContext(Context)

  return (
    <>
      {pokemon && fetched &&
        <div className="pokemon">
          <div className="poek_name">
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