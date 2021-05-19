import React from 'react'

import Image from '../images/casserole-dish-2776735_1920.jpg'
import Mushroom from '../images/image1.jpg'
import MushSubstrate from '../images/image.jpg'
import Snail from '../images/snail.jpg'
import Goat from '../images/goat.jpg'
import Animals from '../images/goats-2052733_1920.jpg'
import Plants from '../images/plants.jpg'
import Affordable from '../images/affordable.jpg'

const Gallery = () => {
  return (
    <section className="container-fluid gallery">
      <div className="row">
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Mushroom} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Snail} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={MushSubstrate} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 p-0">
          <img src={Goat} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Animals} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Affordable} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
