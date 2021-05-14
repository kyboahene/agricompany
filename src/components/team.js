import React from 'react'

import Image from '../images/3.jpg'

const Team = () => {
  return (
    <section className="container-fluid team">
      <div className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col text-center u-custom-font u-font-raleway">
            <h1 className="u-custom-font u-font-raleway font-weight-bold">
              Our Team
            </h1>
            <p className=" u-custom-font u-font-raleway lead">
              The brains behind the great firm.
            </p>
          </div>
        </div>
        <div className="row text-center py-5">
          <div className="col-md-4">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0 u-custom-font u-font-raleway">
              Abdallah Salia
            </h4>
            <p className="my-0">CO-Founder</p>
          </div>
          <div className="col-md-4">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0 u-custom-font u-font-raleway">
              Michael Osei Twene
            </h4>
            <p className="my-0">CO-Founder</p>
          </div>
          <div className="col-md-4">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0 u-custom-font u-font-raleway">Oppong Kwame</h4>
            <p className="my-0">Farm Manager</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center pb-5">
          <div className="col-md-3 text-center">
            <a href="/about" className="mybutton" rel="noreferrer">
              SEE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
