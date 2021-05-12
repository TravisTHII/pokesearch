import { SearchProvider } from '../../context/Search'

import { Props } from './types'

import { Search } from './Search'

export function Container({
  isLoading,
  search
}: Props) {
  return (
    <SearchProvider
      isLoading={isLoading}
      search={search}
    >
      <Search />
    </SearchProvider>
  )
}