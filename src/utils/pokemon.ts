import { Family } from '../context/Global/types'

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

const traverseEvolutionChain = (array: Family[], chain: any): void => {
  if (chain.length !== 0) {
    addToFamily(array, chain[0].species.name, chain[0].species.url)
    return traverseEvolutionChain(array, chain[0].evolves_to)
  }
}

export const getEvolutionChain = (evolution: any) => {

  const family: Family[] = []

  addToFamily(family, evolution[0].chain.species.name, evolution[0].chain.species.url)

  traverseEvolutionChain(family, evolution[0].chain.evolves_to)

  return family

}