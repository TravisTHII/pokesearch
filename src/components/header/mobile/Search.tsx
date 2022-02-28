import { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { FiSearch, FiX } from 'react-icons/fi'

import { useMobileContext } from '../../../context/mobile'

import { Query } from './Query'

import { useOutsideClick } from '../../../hooks'

import { invalidValue } from '../../../utils'

export const Search = () => {
  const { showSearchBar, showSearch } = useMobileContext()

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const menuRef = useOutsideClick((e) => {
    const t = e.target as Element

    if (
      (showSearchBar && !t.closest('.mobile_search')) ||
      t.closest('.ms_li')
    ) {
      showSearch(false)
    }
  })

  const startSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue(value)
    setActive(!invalidValue(value) === true)
  }

  return (
    <div className="mobile_search" ref={menuRef}>
      <div className="container">
        <div className="mbs_main box_shadow">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for pokémon by Id or Name"
            spellCheck="false"
            maxLength={50}
            value={value}
            onChange={startSearch}
          />
          <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
            <button onClick={() => showSearch(false)}>
              <FiX />
            </button>
            <button>
              <FiSearch />
            </button>
          </IconContext.Provider>
        </div>
      </div>
      {active && <Query value={value} />}
    </div>
  )
}
