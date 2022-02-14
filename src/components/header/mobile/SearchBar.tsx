import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiSearch, FiX } from 'react-icons/fi'

interface Props {
  showSearch: boolean
  setShowSearch: (showSearch: boolean) => void
}

export const SearchBar = ({ showSearch, setShowSearch }: Props) => {
  const [value, setValue] = useState('')

  const closeSearchBar = () => {
    setValue('')
    setShowSearch(!showSearch)
  }

  return (
    <div className="mobile_search">
      <div className="mbs_container">
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
            <button onClick={closeSearchBar}>
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