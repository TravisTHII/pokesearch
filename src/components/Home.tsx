import { GlobalProvider } from '../context/Global'
import { Pokemon } from './Pokemon'
import { Random } from './Pokemon/Random'

import { Search } from './Search'

interface Props {
  location: {
    search: string
  }
}

export const Home = ({ location: { search } }: Props) =>
  <GlobalProvider search={search}>
    <Search />
    <Pokemon />
    <Random />
  </GlobalProvider>