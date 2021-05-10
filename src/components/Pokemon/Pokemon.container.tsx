import { Error, Loading, Render } from '.'

import { ContainerProps } from './types'

import { formatData } from '../../utils/pokemon'

export function Container({
  isLoading,
  pokemon,
  error
}: ContainerProps) {
  if (error) return <Error />
  if (isLoading) return <Loading />
  if (pokemon) return <Render pokemon={formatData(pokemon)} />

  return (<></>)
}