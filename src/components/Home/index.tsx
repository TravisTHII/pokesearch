import { Header } from '../Header'
import { Search } from '../Search'

export const Home = () =>
  <>
    <Header />
    <div className="search flex_ui">
      <div className="search_logo flex_ui">
        <div className="logo">
          <img src="/images/pokemon.svg" alt="Pokémon logo" />
        </div>
        <div className="tag_line">
          <p>Gotta Search ‘Em All!</p>
        </div>
      </div>
      <Search
        isLoading={false}
        search={""}
      />
    </div>
  </>