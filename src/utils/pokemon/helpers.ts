import {
  Chain,
  Evolution,
  Family,
  Stats
} from '../../types/Pokemon'

import { capitalize } from '../functions'

export const filterLanguage = (array: Array<any>, language: string) =>
  array.filter(({ language: { name } }) => name === language)

export const colorClass = (color: string) => {
  let className = ''

  switch (color) {
    case 'black': className = 'pokemon_color_black'; break;
    case 'blue': className = 'pokemon_color_blue'; break;
    case 'brown': className = 'pokemon_color_brown'; break;
    case 'gray': className = 'pokemon_color_gray'; break;
    case 'green': className = 'pokemon_color_green'; break;
    case 'pink': className = 'pokemon_color_pink'; break;
    case 'purple': className = 'pokemon_color_purple'; break;
    case 'red': className = 'pokemon_color_red'; break;
    case 'white': className = 'pokemon_color_white'; break;
    case 'yellow': className = 'pokemon_color_yellow'; break;
    default: className = 'pokemon_color_white'; break;
  }

  return className
}

const addToFamily = (array: Family[], name: string, url: string) => {

  const id = url.match(/(\d+)(?!.*\d+)/)![0]

  array.push({
    id,
    name,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  })
}

const traverseEvolutionChain = (array: Family[], e: Evolution[]) => {
  e.forEach((x) => {
    addToFamily(array, x.species.name, x.species.url)

    if (x.evolves_to.length)
      return traverseEvolutionChain(array, x.evolves_to)
  })
}

export const getEvolutionChain = (evolution: Chain) => {

  const family: Family[] = []

  addToFamily(family, evolution.chain.species.name, evolution.chain.species.url)

  traverseEvolutionChain(family, evolution.chain.evolves_to)

  return family

}

export const formatStats = (array: Stats[]) => {
  for (const i of [...array])
    i.stat.name = capitalize(i.stat.name).replace('-', ' ')

  return array
}