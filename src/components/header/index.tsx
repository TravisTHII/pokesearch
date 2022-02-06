import { IconContext } from 'react-icons'
import { FiCode, FiGithub } from 'react-icons/fi'
import { MobileMenu } from './mobile'

import { Props } from './types'

export const Header: React.FC<Props> = ({ children, className }) => (
  <header id="header" className={className}>
    <div className="header_container">
      {children}
      <div className="header_icons">
        <ul className="icons_list">
          <IconContext.Provider value={{ size: '1.5em', className: 'icon' }}>
            <li className="flex_ui">
              <a
                href="https://github.com/TravisTHII/pokesearch"
                target="_blank"
                rel="noopener noreferrer"
                title="Project Code"
              >
                <FiCode />
              </a>
            </li>
            <li className="flex_ui">
              <a
                href="https://github.com/TravisTHII"
                target="_blank"
                rel="noopener noreferrer"
                title="My GitHub"
              >
                <FiGithub />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
      <MobileMenu />
    </div>
  </header>
)
