import { createPortal } from 'react-dom'
import { IconContext } from 'react-icons'
import { FiMenu, FiSearch } from 'react-icons/fi'

import { MobileProvider, useMobileContext } from '../../../context/mobile'

import { Menu, Search } from './'
import { RandomButton } from '../../search'

export const MobileMenuWithContext = () => (
  <MobileProvider>
    <MobileMenu />
  </MobileProvider>
)

const MobileMenu = () => {
  const { open, showSearchBar, openMenu, showSearch } = useMobileContext()

  const openSearchBar = () => {
    openMenu(false)
    showSearch()
  }

  return (
    <>
      <div className="mobile_header_menu">
        <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
          <div className="container">
            <RandomButton />
            <button
              className="mobile_search_button"
              onClick={() => openSearchBar()}
            >
              <FiSearch />
            </button>
            <button className="menu_button" onClick={() => openMenu(!open)}>
              <FiMenu />
            </button>
          </div>
        </IconContext.Provider>
      </div>
      {showSearchBar && <Search />}
      {open && createPortal(<Menu />, document.body)}
    </>
  )
}
