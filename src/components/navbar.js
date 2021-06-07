/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import Image from '../images/default-logo.png'

const Navbar = () => {
  const OpenSidebar = () => {
    const toggler = document.querySelector('.hamburger')
    if (toggler.className.includes('is-closed')) {
      toggler.classList.remove('is-closed')
      toggler.classList.add('is-open')
      // document.getElementById('overlay').style.visibility = 'visible'
      document.getElementById('hamburger_cover').style.clipPath =
        'circle(100% at 80% 10%);'
    } else {
      toggler.classList.remove('is-open')
      toggler.classList.add('is-closed')
      // document.getElementById('overlay').style.visibility = 'hidden'
      document.getElementById('hamburger_cover').style.padding = '3em'
    }
  }

  return <header></header>
}

export default Navbar
