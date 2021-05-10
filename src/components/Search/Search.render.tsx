import { useRef } from 'react'
import { FiX, FiSearch } from 'react-icons/fi'

import { Spinner } from '../Includes/Spinner'

import { RenderProps } from './types'

export function Render({
  isLoading,
  value,
  setValue,
  submitSearch,
  handleSubmitSearch
}: RenderProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  const SearchButton =
    <button
      className="search_button flex_ui"
      onClick={submitSearch}
    >
      <FiSearch />
    </button>

  const SearchSpinner =
    <div className="search_loader flex_ui">
      <Spinner stroke="var(--blue)" style={{ width: '30px', height: '30px' }} />
    </div>

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
      <div className="search_bar">
        <input
          ref={inputRef}
          type="text"
          className="search_input"
          placeholder="Search for pokémon by Id or Name"
          spellCheck="false"
          maxLength={50}
          value={value}
          onChange={e => setValue(e.target.value)}
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
        {!isLoading ? SearchButton : SearchSpinner}
      </div>
    </div>
  )
}