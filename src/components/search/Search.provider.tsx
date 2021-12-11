import { SearchProvider } from '../../context/search'

import { Search } from './Search'

import { Props } from './types'

export const Provider = ({ isLoading = false, search = '' }: Props) => (
  <SearchProvider isLoading={isLoading} search={search}>
    <Search />
  </SearchProvider>
)
