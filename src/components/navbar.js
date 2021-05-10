import React from 'react'

import Image from '../images/default-logo.png'

const Navbar = () => {
  return (
    <header className="u-clearfix u-header u-header" id="sec-f849">
      <div className="u-clearfix u-sheet u-sheet-1">
        <a href="/" className="u-image u-logo u-image-1">
          <img
            src={Image}
            className="u-logo-image u-logo-image-1"
            alt="company logo"
          />
        </a>
        <nav className="u-menu u-menu-dropdown u-menu-open-right u-offcanvas u-menu-1">
          <div
            className="menu-collapse u-custom-font u-font-raleway"
            style={{
              fontsize: '1rem',
              letterSpacing: '0px',
              textTransform: 'uppercase',
              fontWeight: '700',
            }}
          >
            <a
              className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-border-radius u-custom-borders u-custom-color u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-decoration u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              href="there"
            >
              <svg version="1.1" xmlns="">
                <defs>
                  <symbol
                    id="menu-hamburger"
                    viewBox="0 0 16 16"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </symbol>
                </defs>
              </svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-custom-font u-font-raleway u-nav u-spacing-30 u-unstyled u-nav-1">
              <li className="u-nav-item">
                <a
                  className="u-border-3 u-border-active-palette-2-dark-1 u-border-hover-palette-2-dark-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-2-dark-1 u-text-grey-90 u-text-hover-grey-90"
                  href="/"
                  style={{ padding: '10px 0px' }}
                >
                  Home
                </a>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-border-3 u-border-active-palette-2-dark-1 u-border-hover-palette-2-dark-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-2-dark-1 u-text-grey-90 u-text-hover-grey-90"
                  href="/about"
                  style={{ padding: '10px 0px' }}
                >
                  About
                </a>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-border-3 u-border-active-palette-2-dark-1 u-border-hover-palette-2-dark-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-2-dark-1 u-text-grey-90 u-text-hover-grey-90"
                  href="/contact-us"
                  style={{ padding: '10px 0px' }}
                >
                  Contact
                </a>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-border-3 u-border-active-palette-2-dark-1 u-border-hover-palette-2-dark-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-2-dark-1 u-text-grey-90 u-text-hover-grey-90"
                  href="/services"
                  style={{ padding: '10px 0px' }}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div
              className="u-container-style u-inner-container-layout u-sidenav u-white u-sidenav-1"
              data-offcanvas-width="500"
            >
              <div className="u-sidenav-overflow">
                <div className="u-menu-close u-menu-close-1"></div>
                <ul className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-custom-font u-font-raleway u-nav u-popupmenu-items u-spacing-0 u-text-active-palette-2-dark-1 u-unstyled u-nav-2">
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      href="/home"
                      style={{ padding: '10px 0px' }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      href="/about"
                      style={{ padding: '10px 0px' }}
                    >
                      About
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      href="/contact-us"
                      style={{ padding: '10px 0px' }}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      href="/services"
                      style={{ padding: '10px 0px' }}
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-60"></div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
