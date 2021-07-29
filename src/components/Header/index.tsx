import { FiCode, FiGithub } from 'react-icons/fi'

import { Props } from './types'

export const Header = ({ children, className }: Props) => (
  <header id="header" className={className}>
    <div className="header_container">
      {children}
      <div className="header_icons">
        <a
          className="icon flex_ui"
          href="https://github.com/TravisTHII/search"
          target="_blank"
          rel="noopener noreferrer"
          title="See project code"
        >
          <FiCode />
        </a>
        <a
          className="icon flex_ui"
          href="https://github.com/TravisTHII"
          target="_blank"
          rel="noopener noreferrer"
          title="My GitHub"
        >
          <FiGithub />
        </a>
      </div>
    </div>
  </header>
)
