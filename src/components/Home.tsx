import React from 'react'

export function Home() {
  return (
    <div className="container">
      <div className="search_bar">
        <input
          type="text"
          className="search_input"
          placeholder="Search for anime"
        />
      </div>
    </div>
  )
}