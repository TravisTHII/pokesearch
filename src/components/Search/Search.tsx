import { useEffect, useRef } from 'react'
import queryString from 'query-string'
import { FiX } from 'react-icons/fi'

import { useSearchContext } from '../../context/Search'

import { useOutsideClick } from '../../hooks'

import { Query } from './Query'
import { SearchButton } from './SearchButton'

export function Search() {

  const {
    search,
    value,
    active,
    setValue,
    setActive,
    startSearch,
    showResults,
    handleSubmitSearch
  } = useSearchContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const SearchRef = useOutsideClick((e) => {
    const t = e.target as Element

    if (!t.closest('.search_main') || t.closest('.query_results')) {
      if (active) setActive(false)
    }
  })

  useEffect(() => {
    const q = queryString.parse(search).search

    if (q) setValue(String(q))

    return () => setValue('')
  }, [search, setValue])

  return (
    <div className="search_main" ref={SearchRef}>
      <div className={`search_bar${!active ? ' box_shadow' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          className="search_input"
          placeholder="Search for pokémon by Id or Name"
          spellCheck="false"
          maxLength={50}
          value={value}
          onChange={startSearch}
          onClick={showResults}
          onKeyPress={handleSubmitSearch}
        />
        {value &&
          <button
            className="search_button flex_ui"
            onClick={() => { setValue(''); inputRef.current?.focus() }}
          >
            <FiX />
          </button>
        }
        <SearchButton />
      </div>
      <Query />
    </div>
  )
}