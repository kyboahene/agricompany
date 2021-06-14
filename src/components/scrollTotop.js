import React, { useEffect, useState } from 'react'

const ScrollTotop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const scrollTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return show ? (
    <div className="moveUp">
      <span>
        <i className="fas fa-angle-up 9x" onClick={() => scrollTop()}></i>
      </span>
    </div>
  ) : (
    ''
  )
}

export default ScrollTotop
