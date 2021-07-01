import { SearchProvider } from '../../context/Search'

import { Props } from './types'

import { Search } from './Search'

export const Provider = ({ isLoading = false, search = '' }: Props) =>
  <SearchProvider
    isLoading={isLoading}
    search={search}
  >
    <Search />
  </SearchProvider>