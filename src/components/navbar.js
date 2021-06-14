import React from 'react'
import { NavLink } from 'react-router-dom'

import Image from '../images/agric.png'

const Navbar = () => {
  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light u-header">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Image} height="30" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-4">
              <NavLink
                className="t-nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="t-nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="t-nav-link"
                activeClassName="active"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="t-nav-link"
                activeClassName="active"
                to="/contact-us"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
