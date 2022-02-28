import { Evolution, Family, Stats } from '../../types/Pokemon'

import { capitalize } from '..'

export const filterLanguage = (array: Array<any>, language: string) =>
  array.filter(({ language: { name } }) => name === language)

const addToFamily = (array: Family[], name: string, url: string) => {
  const id = url.match(/(\d+)(?!.*\d+)/)![0]

  array.push({
    id,
    name,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  })
}

const traverseEvolutionChain = (array: Family[], e: Evolution[]) => {
  e.forEach((x) => {
    addToFamily(array, x.species.name, x.species.url)

    if (x.evolves_to.length) return traverseEvolutionChain(array, x.evolves_to)
  })
}

export const getEvolutionChain = (evolution: Evolution) => {
  const family: Family[] = []

  addToFamily(family, evolution.species.name, evolution.species.url)

  traverseEvolutionChain(family, evolution.evolves_to)

  return family
}

export const formatStats = (array: Stats[]) => {
  for (const i of [...array])
    i.stat.name = capitalize(i.stat.name).replace('-', ' ')

  return array
}
