import { useRef } from 'react'
import { FiX } from 'react-icons/fi'

import { RenderProps } from './types'

import { useOutsideClick } from '../../hooks'

import { Query } from '../Query'
import { SearchButton } from './SearchButton'

export function Render({
  isLoading,
  value,
  setValue,
  active,
  setActive,
  showResults,
  startSearch,
  submitSearch,
  handleSubmitSearch
}: RenderProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  const SearchRef = useOutsideClick(() => setActive(false))

  return (
    <div className="search flex_ui">
      <div className="search_logo flex_ui">
        <div className="logo">
          <img src="/images/pokemon.svg" alt="Pokémon logo" />
        </div>
        <div className="tag_line">
          <p>Gotta Search ‘Em All!</p>
        </div>
      </div>
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
          <SearchButton
            isLoading={isLoading}
            submitSearch={submitSearch}
          />
        </div>
        <Query
          value={value}
          active={active}
        />
      </div>
    </div>
  )
}