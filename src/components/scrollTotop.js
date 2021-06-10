import React, { useEffect, useState } from 'react'

const ScrollTotop = () => {
  const [interval, setInterval] = useState(0)
  const [position, setPosition] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY > 170) {
      setPosition(true)
    } else {
      setPosition(false)
    }
  }

  useEffect(() => {
    document.addEventListener(
      'scroll',
      listenScrollEvent,
      window.scrollTo(0, 0),
    )
  })

  const onscrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(interval)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  const scrollTop = () => {
    let intervalId = setInterval(onscrollStep, this.props.delayInMs)
    setInterval(intervalId)
  }

  const goTopIcon = () => {
    if (position) {
      return (
        <div className="moveUp">
          <span>
            <i className="fas fa-angle-up" onClick={() => scrollTop()}></i>
          </span>
        </div>
      )
    }
  }

  return <>{goTopIcon()}</>
}

export default ScrollTotop
