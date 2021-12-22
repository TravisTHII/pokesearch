import { FiSearch } from 'react-icons/fi'

import { useSearchContext } from '../../context/search'

import { Spinner } from '../includes/spinner'

export const SearchButton = () => {
  const { isLoading, submitSearch } = useSearchContext()

  if (isLoading) {
    return (
      <div className="search_loader flex_ui">
        <Spinner
          stroke="var(--blue)"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    )
  } else {
    return (
      <button className="search_button flex_ui" onClick={submitSearch}>
        <FiSearch />
      </button>
    )
  }
}