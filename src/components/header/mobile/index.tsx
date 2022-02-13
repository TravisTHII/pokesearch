import { useState } from 'react'
import { createPortal } from 'react-dom'
import { IconContext } from 'react-icons'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Menu } from './Menu'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="mobile_header_menu">
        <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
          <div className="container">
            <button className="mobile_search_button">
              <FiSearch />
            </button>
            <button className="menu_button" onClick={() => setOpen(!open)}>
              <FiMenu />
            </button>
          </div>
        </IconContext.Provider>
      </div>
      {open && createPortal(<Menu />, document.body)}
    </>
  )
}
