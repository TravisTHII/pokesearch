import { useState } from 'react'
import { createPortal } from 'react-dom'
import { IconContext } from 'react-icons'
import { FiMenu, FiSearch } from 'react-icons/fi'

import { Menu } from './Menu'
import { SearchBar } from './SearchBar'
import { RandomButton } from '../../search'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <div className="mobile_header_menu">
        <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
          <div className="container">
            <RandomButton />
            <button
              className="mobile_search_button"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch />
            </button>
            <button className="menu_button" onClick={() => setOpen(!open)}>
              <FiMenu />
            </button>
          </div>
        </IconContext.Provider>
      </div>
      {showSearch && (
        <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
      )}
      {open && createPortal(<Menu />, document.body)}
    </>
  )
}
