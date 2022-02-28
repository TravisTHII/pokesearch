import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { IconContext } from 'react-icons'
import { FiX } from 'react-icons/fi'
import queryString from 'query-string'

import { useSearchContext } from '../../context/search'

import { useOutsideClick } from '../../hooks'

import { Query, SearchButton, RandomButton } from './'

import { invalidValue } from '../../utils'

export const Search = () => {
  const { search, value, active, setValue, setActive } = useSearchContext()

  const navigate = useNavigate()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const q = queryString.parse(search).search

    if (q) setValue(String(q))

    return () => setValue('')
  }, [search, setValue])

  const SearchRef = useOutsideClick((e) => {
    const t = e.target as Element

    if (active && (!t.closest('.search_main') || t.closest('.query_results'))) {
      setActive(false)
    }
  })

  const submitSearch = () => {
    !invalidValue(value) && navigate(`/pokedex?search=${value.trim()}`)
    if (active) setActive(false)
  }

  const showResults = () => setActive(!invalidValue(value))

  const startSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue(value)
    setActive(!invalidValue(value) === true)
  }

  const handleSubmitSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitSearch()
      setActive(false)
    }
  }

  return (
    <div id="search">
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
          <IconContext.Provider value={{ size: '1.5rem' }}>
            {value && (
              <button
                className="search_button flex_ui"
                onClick={() => {
                  setValue('')
                  inputRef.current?.focus()
                }}
              >
                <FiX />
              </button>
            )}
            <SearchButton submitSearch={submitSearch} />
          </IconContext.Provider>
        </div>
        <Query />
      </div>
      <div className="random_pokemon">
        <RandomButton />
      </div>
    </div>
  )
}
