import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../css/about.css'
import Gallery from '../components/gallery'
import Vision from '../images/vision.svg'
import Image from '../images/3.jpg'
import Micheal from '../images/Micheal.jpg'
import Oppong from '../images/Oppong.jpg'

const About = () => {
  const [page, setPage] = useState('Home')
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="u-body u-overlap"
    >
      {/* Navbar Begins */}
      <Navbar />
      {/* Navbar Ends */}
      <section
        className="skrollable u-align-center u-clearfix u-image u-section-11"
        src=""
        data-image-width="1297"
        data-image-height="865"
        id="sec-7440"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-left u-custom-font u-font-raleway u-text u-text-11">
            Know Us
          </h1>
          <h2 className="u-align-left u-custom-font u-font-raleway u-text u-text-21">
            <span className="u-text-palette-2-dark-1">Home</span> &gt; About
          </h2>
        </div>
      </section>

      <section className="u-clearfix u-section-21" id="sec-4fdc">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-11">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-11">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-right-cell u-size-25 u-image-11"
                  src=""
                  data-image-width="1920"
                  data-image-height="1278"
                  data-aos="fade-left"
                ></div>
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-34 u-layout-cell-11">
                  <div className="u-container-layout u-container-layout-11">
                    <h1 className="u-custom-font u-font-raleway u-text u-text-11">
                      Know About Our History
                    </h1>
                    <p className="u-custom-font u-font-raleway u-text u-text-21">
                      Since 2017, we have strived to establish the business as a
                      trustworthy supplier of primary agricultural produce. We
                      started a mushroom farm, a goat farm and a snail farm. We
                      are working to scale up while exploring natural
                      preservation methods as our client base increases. This
                      year, we hope to start supplying processed products to the
                      wider market of domestic consumers by launching our first
                      packaged organic mushroom product EcoMush.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-section-31"
        id="sec-e723"
        style={{ backgroundColor: '#507736', color: '#fff' }}
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-11">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-11">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-34 u-layout-cell-11">
                  <div className="u-container-layout u-container-layout-11">
                    <h1 className="u-custom-font u-font-raleway u-text u-text-11">
                      Our Mission
                    </h1>
                    <p className="u-custom-font u-font-raleway u-text u-text-21">
                      Our mission is to provide refined agricultural products
                      using technology and innovation to improve primary and
                      secondary agricultural production in Africa.
                    </p>
                  </div>
                </div>
                <div
                  className="u-container-style u-image u-layout-cell u-right-cell u-size-26 u-image-11"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="u-container-layout u-container-layout-21"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Begins */}
      <section className="container-fluid vision">
        <div className="container py-5">
          <div className="row my-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={Vision} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 u-custom-font u-font-raleway">
              <h1 className="u-custom-font u-font-raleway font-weight-bold">
                Our Vision
              </h1>
              <p className="u-custom-font u-font-raleway lead">
                To become a forerunner in the agricultural business, providing
                organically grown produce and adding value to to raw
                agricultural products.
              </p>

              <h4 className="u-custom-font u-font-raleway font-weight-bold">
                Company Philosophy
              </h4>
              <ul className="lead">
                <li>
                  <lord-icon
                    src="https://cdn.lordicon.com//jvihlqtw.json"
                    trigger="loop"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: '40px', height: '40px' }}
                  ></lord-icon>
                  Technology
                </li>
                <li>
                  <lord-icon
                    src="https://cdn.lordicon.com//jvihlqtw.json"
                    trigger="loop"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: '40px', height: '40px' }}
                  ></lord-icon>{' '}
                  Innovation
                </li>
                <li>
                  <lord-icon
                    src="https://cdn.lordicon.com//jvihlqtw.json"
                    trigger="loop"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: '40px', height: '40px' }}
                  ></lord-icon>
                  Empowerment{' '}
                </li>
                <li>
                  <lord-icon
                    src="https://cdn.lordicon.com//jvihlqtw.json"
                    trigger="loop"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: '40px', height: '40px' }}
                  ></lord-icon>
                  Sustainability{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Ends */}

      {/* Team Begins */}
      <section
        className="container-fluid"
        style={{ backgroundColor: '#507736', color: '#fff' }}
      >
        <div className="container pb-5">
          <div className="row d-flex justify-content-center py-5">
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
                className="img-fluid rounded-circle member_image"
                alt=""
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <h4 className="mb-0 u-custom-font u-font-raleway">
                Abdallah Salia
              </h4>
              <p className="my-0">CO-Founder</p>
              <div className="overlay">
                <div className="middle">
                  <div className="d-flex">
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset ">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={Micheal}
                className="img-fluid rounded-circle member_image"
                alt=""
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <h4 className="mb-0 u-custom-font u-font-raleway">
                Michael Osei Twene
              </h4>
              <p className="my-0">CO-Founder</p>
              <div className="overlay">
                <div className="middle">
                  <div className="d-flex">
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset ">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={Oppong}
                className="img-fluid rounded-circle member_image"
                alt=""
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <h4 className="mb-0 u-custom-font u-font-raleway">
                Oppong Kwame
              </h4>
              <p className="my-0">Farm Manager</p>
              <div className="overlay">
                <div className="middle">
                  <div className="d-flex">
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset ">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="" className="me-4 text-reset mx-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Ends */}

      {/* Client Reviews */}
      {/* 
      <section
        className="u-clearfix u-palette-2-light-3 u-section-51"
        id="sec-9e27"
      >
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-xl u-sheet-11">
          <div
            id="carousel-d79e"
            data-interval="5000"
            data-u-ride="carousel"
            className="u-carousel u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-slider u-slider-11"
          >
            <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-11">
              <li
                data-u-target="#carousel-d79e"
                className="u-active u-grey-30 u-shape-circle"
                data-u-slide-to="0"
                style={{ width: '10px', height: '10px' }}
              ></li>
              <li
                data-u-target="#carousel-d79e"
                className="u-grey-30 u-shape-circle"
                data-u-slide-to="1"
                style={{ width: '10px', height: '10px' }}
              ></li>
            </ol>
            <div className="u-carousel-inner" role="listbox">
              <div className="u-active u-align-center u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-11">
                  <h1 className="u-custom-font u-font-raleway u-text u-text-11">
                    Client Reviews
                  </h1>
                  <p className="u-custom-font u-font-raleway u-text u-text-21">
                    "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                    justo. Mauris efficitur, mauris in auctor euismod, quam elit
                    ultrices urna, eget eleifend arcu risus id metus. Maecenas
                    ex enim,​ mattis eu velit vitae, blandit mattis sapien. Sed
                    aliquam leo et semper vestibulum."
                  </p>
                  <h5 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-31">
                    frank kinney
                  </h5>
                </div>
              </div>
              <div className="u-align-center u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-21">
                  <h1 className="u-custom-font u-font-raleway u-text u-text-41">
                    Client Reviews
                  </h1>
                  <p className="u-custom-font u-font-raleway u-text u-text-51">
                    "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                    justo. Mauris efficitur, mauris in auctor euismod, quam elit
                    ultrices urna, eget eleifend arcu risus id metus. Maecenas
                    ex enim,​ mattis eu velit vitae, blandit mattis sapien. Sed
                    aliquam leo et semper vestibulum."
                  </p>
                  <h5 className="u-align-center-md u-text u-text-61">
                    Mary Smith
                  </h5>
                </div>
              </div>
            </div>
            <a
              className="u-carousel-control u-carousel-control-prev u-icon-circle u-text-body-color u-text-hover-grey-50 u-carousel-control-11"
              href="#carousel-d79e"
              role="button"
              data-u-slide="prev"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="u-carousel-control u-carousel-control-next u-icon-circle u-text-body-color u-text-hover-grey-50 u-carousel-control-21"
              href="#carousel-d79e"
              role="button"
              data-u-slide="next"
            >
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section> */}
      {/* Client Ends */}

      {/* Gallery Begins*/}
      <Gallery />
      {/* Gallery Ends */}

      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default About
