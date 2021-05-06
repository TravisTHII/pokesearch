import { GlobalProvider } from '../context/GlobalState'
import { Pokemon } from './Pokemon'

import { Search } from './Search'

export const Home = () =>
  <GlobalProvider>
    <Search />
    <Pokemon />
  </GlobalProvider>