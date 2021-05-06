import { FiX, FiSearch } from 'react-icons/fi'

import { useGlobalContext } from '../../context/GlobalState'

import { Spinner } from '../includes/Spinner'

interface Props {
  value: string
  startSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
}

export function Render({
  value,
  startSearch,
  clearSearch
}: Props) {

  const { loading } = useGlobalContext()

  const SearchButton =
    <button className="search_button flex_ui">
      <FiSearch />
    </button>

  const SearchSpinner =
    <div className="search_loader flex_ui">
      <Spinner style={{ width: '30px', height: '30px' }} />
    </div>

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
          placeholder="Search for pokémon by Id or Name"
          spellCheck="false"
          maxLength={50}
          value={value}
          onChange={startSearch}
        />
        {value &&
          <button
            className="search_button flex_ui"
            onClick={clearSearch}
          >
            <FiX />
          </button>
        }
        {!loading ? SearchButton : SearchSpinner}
      </div>
    </div>
  )
}