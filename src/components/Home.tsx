import { GlobalProvider } from '../context/Global'
import { Pokemon } from './Pokemon'

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
  </GlobalProvider>