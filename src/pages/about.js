import React from 'react'
import { motion } from 'framer-motion'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../about.css'
import Team from '../components/team'
import Gallery from '../components/gallery'

const About = () => {
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
                      Paragraph. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur id suscipit ex. Suspendisse
                      rhoncus laoreet purus quis elementum. Phasellus sed
                      efficitur dolor, et ultricies sapien. Quisque fringilla
                      sit amet dolor commodo efficitur. Aliquam et sem odio. In
                      ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
                      Paragraph. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur id suscipit ex. Suspendisse
                      rhoncus laoreet purus quis elementum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-palette-2-dark-1 u-section-31"
        id="sec-e723"
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
                      Paragraph. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur id suscipit ex. Suspendisse
                      rhoncus laoreet purus quis elementum. Phasellus sed
                      efficitur dolor, et ultricies sapien. Quisque fringilla
                      sit amet dolor commodo efficitur. Aliquam et sem odio. In
                      ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
                      Paragraph. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur id suscipit ex. Suspendisse
                      rhoncus laoreet purus quis elementum.
                    </p>
                  </div>
                </div>
                <div
                  className="u-container-style u-image u-layout-cell u-right-cell u-size-26 u-image-11"
                  src=""
                  data-image-width="1920"
                  data-image-height="1278"
                  data-aos="fade-right"
                >
                  <div className="u-container-layout u-container-layout-21"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Begins */}
      <Team />
      {/* Team Ends */}

      {/* Client Reviews */}

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
      </section>
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
