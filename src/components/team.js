import React from 'react'

import Image from '../images/3.jpg'

const Team = () => {
  return (
    <section className="container-fluid team">
      <div className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col text-center u-font-raleway">
            <h1>Our Team</h1>
            <p className=" u-custom-font u-font-raleway">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
        </div>
        <div className="row text-center py-5">
          <div className="col-md-3">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0">Joe Dadzie</h4>
            <p className="my-0">CEO</p>
          </div>
          <div className="col-md-3">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0">Joe Dadzie</h4>
            <p className="my-0">CEO</p>
          </div>
          <div className="col-md-3">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0">Joe Dadzie</h4>
            <p className="my-0">CEO</p>
          </div>
          <div className="col-md-3">
            <img
              src={Image}
              className="img-fluid rounded-circle"
              alt=""
              data-aos="fade-up"
            />
            <h4 className="mb-0">Joe Dadzie</h4>
            <p className="my-0">CEO</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center pb-5">
          <div className="col-md-3 text-center">
            <a
              href="http://webneel.com/30-incredible-and-award-winning-fashion-photography-cergelyte-khokhlov-and-witzel"
              className="mybutton"
              title="learn more"
              target="_blank"
              rel="noreferrer"
            >
              SEE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
