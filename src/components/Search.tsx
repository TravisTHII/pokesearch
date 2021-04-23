import React, { useContext, useRef, useState } from 'react'
import { FiX, FiSearch } from 'react-icons/fi'

import { Context } from '../context/State'

import { Spinner } from './includes/Spinner'

import { invalidValue, validText } from '../utils/functions'

export function Search() {

  const { loading, getPokemon, isLoading } = useContext(Context)

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const timeOutRef = useRef()

  const startSearch = (e: any) => {

    const value = e.target.value

    setValue(value)

    clearTimeout(timeOutRef.current)

    if (!invalidValue(value, 50)) {

      if (isLoading)
        isLoading(true)

      setActive(true)

      const t: any = setTimeout(() => {

        if (getPokemon)
          getPokemon(value)

      }, 500)

      timeOutRef.current = t

    } else {

      setActive(false)

      if (isLoading)
        isLoading(false)

    }

  }

  const clearSearch = () => {
    setValue('')
    setActive(false)
  }

  return (
    <div className="search flex_ui">
      <div className="search_logo flex_ui">
        <div className="logo">
          <img src="/images/logo.svg" alt="Pokémon logo" />
        </div>
        <div className="tag_line">
          <p>Gotta Search ‘Em All!</p>
        </div>
      </div>
      <div className="search_bar">
        <input
          type="text"
          className="search_input"
          placeholder="Search for pokémon"
          spellCheck="false"
          maxLength={50}
          value={value}
          onChange={startSearch}
        />
        {active &&
          <button
            className="search_button flex_ui"
            onClick={clearSearch}
          >
            <FiX />
          </button>
        }
        {!loading
          ? <button className="search_button flex_ui"><FiSearch /></button>
          : <div className="search_loader flex_ui"><Spinner style={{ width: '30px', height: '30px' }} /></div>
        }
      </div>
    </div>
  )
}