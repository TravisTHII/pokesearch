import React from 'react'

import { SearchBar } from './SearchBar'

export function Home() {
  return (
    <div className="container flex_ui">
      <div className="search_container flex_ui">
        <div className="search_logo flex_ui">
          <div className="logo">
            <img src="/images/logo.svg" alt="Pokémon logo" />
          </div>
          <div className="tag_line">
            <p>Gotta Search ‘Em All!</p>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}