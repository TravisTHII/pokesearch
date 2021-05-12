import { FiSearch } from 'react-icons/fi'

import { SBProps } from './types'

import { Spinner } from '../Includes/Spinner'

export function SearchButton({
  isLoading,
  submitSearch
}: SBProps) {

  if (!isLoading) {

    return (
      <button
        className="search_button flex_ui"
        onClick={submitSearch}
      >
        <FiSearch />
      </button>
    )

  } else {

    return (
      <div className="search_loader flex_ui">
        <Spinner stroke="var(--blue)" style={{ width: '30px', height: '30px' }} />
      </div>
    )

  }

}