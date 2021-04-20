import React, { useState } from 'react'
import { FiX, FiSearch } from 'react-icons/fi'
import useOutsideClick from '../hooks/useOutSideClick'

import { invalidValue, validText } from '../utils/functions'

export function SearchBar() {

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const inputRef = useOutsideClick((e: any) => {
    if (!e.target.closest('.search_bar')) {
      setActive(false)
    }
  }, 'custom')

  const startSearch = (e: any) => {

    const value = e.target.value

    setValue(value)

    if (invalidValue(value)) {
      setActive(false)
    }

  }

  const showResults = () => {
    if (!validText(value)) setActive(true)
  }

  return (
    <div className="search_bar" ref={inputRef}>
      <div className={`main_search ${!active ? ' box_shadow' : ''}`}>
        <input
          type="text"
          className="search_input"
          placeholder="Search for pokémon"
          spellCheck="false"
          value={value}
          onChange={startSearch}
          onClick={() => showResults()}
        />
        <button className="search_button flex_ui">
          <FiX />
        </button>
        <button className="search_button flex_ui">
          <FiSearch />
        </button>
      </div>
      <div className={`search_results${active ? ' visible box_shadow' : ''}`}></div>
    </div>
  )
}