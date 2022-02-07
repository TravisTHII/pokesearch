import { IconContext } from 'react-icons'
import { FiCode, FiGithub } from 'react-icons/fi'

export const Menu = () => (
  <div id="mobile_menu">
    <div className="container flex_ui">
      <IconContext.Provider value={{ size: '1.5em', className: 'icon' }}>
        <ul className="list_divider">
          <li>
            <a
              href="https://github.com/TravisTHII/pokesearch"
              target="_blank"
              rel="noopener noreferrer"
              title="Project Code"
            >
              <span>
                <FiCode />
              </span>
              <span>Project Code</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TravisTHII"
              target="_blank"
              rel="noopener noreferrer"
              title="My GitHub"
            >
              <span>
                <FiGithub />
              </span>
              <span>My GitHub</span>
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  </div>
)
