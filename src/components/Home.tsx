import React from 'react'

import { Provider } from '../context/State'
import { Pokemon } from './Pokemon'

import { Search } from './Search'

export function Home() {
  return (
    <Provider>
      <Search />
      <Pokemon />
    </Provider>
  )
}