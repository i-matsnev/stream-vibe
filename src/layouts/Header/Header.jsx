import './Header.scss'
import Logo from "@/components/Logo"
import classNames from "classnames"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"
import getBasePath from "@/utils/getBasePath"

const Header = (props) => {
  const {
    url,
    isFixed,
  } = props

  const menuItems = [
    {
      label: 'Home',
      href: getBasePath('/'),
    },
    {
      label: 'Movies & Shows',
      href: getBasePath('/movies'),
    },
    {
      label: 'Support',
      href: getBasePath('/support'),
    },
    {
      label: 'Subscriptions',
      href: getBasePath('/subscriptions'),
    },
  ]

  return (
    <header className={classNames('header', {
      'is-fixed': isFixed,
      })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo
          className="header__logo"
          loading="eager"
        />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => {
                const normalizedUrl = url?.startsWith('/stream-vibe') ? url : getBasePath(url || '/')
                return (
                  <li className="header__menu-item" key={index}>
                    <a
                      className={classNames('header__menu-link', {
                        'is-active': href === normalizedUrl
                      })}
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconName="notification"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': ''
          }}
        />
      </div>
    </header>
  )
}

export default Header