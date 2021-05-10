import React from 'react'

import Image from '../images/casserole-dish-2776735_1920.jpg'

const Gallery = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3 p-0">
          <img src={Image} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
