import { GlobalProvider } from '../context/GlobalState'
import { Pokemon } from './Pokemon'

import { Search } from './Search'

import { Location } from './Search/types'

export const Home = ({ location }: Location) =>
  <GlobalProvider>
    <Search location={location} />
    <Pokemon location={location} />
  </GlobalProvider>