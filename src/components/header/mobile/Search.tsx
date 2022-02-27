import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiSearch, FiX } from 'react-icons/fi'

import { useMobileContext } from '../../../context/mobile'

import { useOutsideClick } from '../../../hooks'

export const Search = () => {
  const { showSearchBar, showSearch } = useMobileContext()

  const [value, setValue] = useState('')

  const menuRef = useOutsideClick((e) => {
    const t = e.target as Element

    if (showSearchBar && !t.closest('.mobile_search')) {
      showSearch(false)
    }
  })

  return (
    <div className="mobile_search" ref={menuRef}>
      <div className="container">
        <div className="mbs_main box_shadow">
          <input
            type="text"
            placeholder="Search for pokémon by Id or Name"
            spellCheck="false"
            maxLength={50}
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
    </div>
  )
}
