import React from 'react'
import { NavLink } from 'react-router-dom'

import Image from '../images/favicon.png'

const Navbar = () => {
  const pages = ['Home', 'About', 'Services', 'Contact']

  const addActive = (page) => {
    const navlink = document.getElementById(page)
    navlink.classList.toggle('active')
  }

  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Image} height="50" alt="" />
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
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="nav-link"
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
