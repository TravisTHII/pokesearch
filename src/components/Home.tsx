import React from 'react'

import { Provider } from '../context/State'

import { Search } from './Search'

export function Home() {
  return (
    <Provider>
      <Search />
    </Provider>
  )
}