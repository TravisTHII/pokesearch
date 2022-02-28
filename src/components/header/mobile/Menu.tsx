import { createPortal } from 'react-dom'
import { IconContext } from 'react-icons'
import { FiCode, FiGithub } from 'react-icons/fi'

import { useMobileContext } from '../../../context/mobile'

import { useOutsideClick } from '../../../hooks'

export const Menu = () => {
  const { open, openMenu } = useMobileContext()

  const menuRef = useOutsideClick((e) => {
    const t = e.target as Element

    if (open && !t.closest('.menu_button')) {
      openMenu(false)
    }
  })

  return createPortal(
    <div id="mobile_menu" ref={menuRef}>
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
    </div>,
    document.querySelector('#header')!
  )
}
