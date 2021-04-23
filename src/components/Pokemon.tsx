import React, { useContext } from 'react'

import { Context } from '../context/State'

export function Pokemon() {

  const { fetched, pokemon } = useContext(Context)

  return (
    <>
      {pokemon && fetched &&
        <div className="pokemon">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
          {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="" /> */}
          {/* <img src={pokemon.sprites.front_default} alt="" /> */}
        </div>
      }
    </>
  )
}