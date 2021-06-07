/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import BrandAfrik from '../images/dev_logo.svg'

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-muted u-custom-font u-font-raleway"
      style={{ backgroundColor: '#000013', color: '#fff' }}
    >
      <div className="container text-center text-md-start text-white">
        <div className="row pt-4">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 u-custom-font u-font-raleway">
              <i className="fas fa-gem me-3 mr-2"></i>TIES Agric
            </h6>
            <p>
              A technology driven business that pioneers sustainable food
              production and processing in Africa.
            </p>
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset mx-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset mx-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset mx-3">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 u-custom-font u-font-raleway">
              Our Products
            </h6>
            <p>
              <a href="#!" className="text-reset">
                Goats
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Mushrooms
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Snails
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 u-custom-font u-font-raleway">
              Useful links
            </h6>
            <p>
              <a href="/" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="/about" className="text-reset">
                About
              </a>
            </p>
            <p>
              <a href="/services" className="text-reset">
                Services
              </a>
            </p>
            <p>
              <a href="/contact-us" className="text-reset">
                Contact Us
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 u-custom-font u-font-raleway">
              Contact
            </h6>
            <p>
              <i className="fas fa-home me-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> + 233 54 726 4511
            </p>
            <p>
              <i className="fas fa-print me-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <hr
              style={{ backgroundColor: '#fff', height: '0.5px' }}
              className="w-100 d-flex align-self-center"
            />
          </div>
        </div>
      </div>
      <div
        className="text-center p-2"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Powered By:{' '}
        <img
          src={BrandAfrik}
          alt=""
          className="img-fluid"
          style={{ height: '50px', width: '50px' }}
        />
      </div>
    </footer>
  )
}

export default Footer
