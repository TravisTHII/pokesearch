import React from 'react'
import { FiCode, FiGithub } from 'react-icons/fi'

export function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_icons">
          <a
            className="icon flex_ui"
            href="https://github.com/TravisTHII/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiCode />
          </a>
          <a
            className="icon flex_ui"
            href="https://github.com/TravisTHII"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </header>
  )
}