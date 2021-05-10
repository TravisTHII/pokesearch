import { Error, Loading, Render } from '.'

import { ContainerProps } from './types'

export function Container({
  isLoading,
  pokemon,
  error
}: ContainerProps) {
  if (error) return <Error />
  if (isLoading) return <Loading />
  if (pokemon) return <Render pokemon={pokemon} />

  return (<></>)
}