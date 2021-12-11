import { Error, Loading, Pokemon } from '.'

import { ContainerProps } from './types'

export function Container({ isLoading, error, pokemon }: ContainerProps) {
  if (isLoading) return <Loading />
  if (error) return <Error />
  if (pokemon) return <Pokemon pokemon={pokemon} />

  return <></>
}
