import { IconContext } from 'react-icons'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

import { useMobileContext } from '../../../context/mobile'

import { Menu, Search } from '.'
import { RandomButton } from '../../search'

export const Header = () => {
  const { open, showSearchBar, openMenu, showSearch } = useMobileContext()

  return (
    <>
      <div className="mobile_header">
        <IconContext.Provider value={{ size: '1.5rem', className: 'icon' }}>
          <div className="container">
            <div className="rp_btn flex_ui">
              <RandomButton />
            </div>
            <button
              className="s_btn"
              onClick={() => showSearch(!showSearchBar)}
            >
              <FiSearch />
            </button>
            <button className="m_btn" onClick={() => openMenu(!open)}>
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </IconContext.Provider>
      </div>
      {showSearchBar && <Search />}
      {open && <Menu />}
    </>
  )
}
