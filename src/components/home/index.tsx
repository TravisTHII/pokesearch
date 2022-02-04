import { Header } from '../header'
import { Search } from '../search'

export const Home = () => (
  <>
    <Header className="home_header" />
    <div id="home" className="flex_ui">
      <div className="home_container flex_ui">
        <div className="logo flex_ui">
          <div className="pokemon_logo">
            <div className="logo_container">
              <img src="/images/pokemon.svg" alt="Pokémon logo" />
            </div>
          </div>
          <div className="tag_line">
            <p>Gotta Search 'Em All!</p>
          </div>
        </div>
        <Search />
      </div>
    </div>
  </>
)
