import React from 'react'
import { motion } from 'framer-motion'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Image from '../images/ttt-min.jpg'

import '../home.css'
import Team from '../components/team'

const Home = () => {
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
        className="u-align-center u-clearfix u-image u-section-1"
        id="carousel_e025"
        data-image-width="1024"
        data-image-height="1024"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-gutter-42 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-25 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1">
                    <h5 className="u-align-center u-custom-font u-font-raleway u-text u-text-1">
                      Organic Seedling
                    </h5>
                    <div
                      alt=""
                      className="u-image u-image-circle u-image-1"
                    ></div>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-2">
                      &nbsp;Farming is the only skill that is able to provide
                      the seeds to replant the crops consistantly, because
                      gathering the crops only has a small chance of returning
                      seeds. <br />
                    </p>
                    <a
                      href="http://webneel.com/30-incredible-and-award-winning-fashion-photography-cergelyte-khokhlov-and-witzel"
                      className="u-align-center u-btn u-button-style u-hover-palette-1-dark-1 u-palette-2-dark-1 u-btn-1"
                      title="learn more"
                      target="_blank"
                      rel="noreferrer"
                    >
                      learn more
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-shape-rectangle u-size-35 u-layout-cell-2">
                  <div className="u-container-layout">
                    <div className="u-palette-2-dark-1 u-shape u-shape-rectangle u-shape-1"></div>
                    <div
                      className="u-container-style u-group u-image u-image-tiles u-image-2"
                      data-image-width="100"
                      data-image-height="100"
                    >
                      <div className="u-container-layout u-container-layout-3"></div>
                    </div>
                    <img className="u-image u-image-3" src={Image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix u-grey-10 u-section-2"
        id="sec-0d7f"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-raleway u-text u-text-1">
            Design Perfection
          </h1>
          <p className="u-custom-font u-font-raleway u-text u-text-2">
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </p>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-palette-2-dark-1 u-section-3"
        id="sec-07f7"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-center u-container-style u-list-item u-palette-1-light-2 u-repeater-item u-video-cover u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <span className="u-icon u-icon-circle u-text-black u-icon-1">
                    <i className="fas fa-tractor  fa-3x img-fluid"></i>
                  </span>
                  <h5 className="u-text u-text-1">Machines</h5>
                  <p className="u-text u-text-2">
                    Sample text.{' '}
                    <a
                      href="no link yet"
                      className="u-btn u-button-style u-none u-text-palette-1-base u-btn-1"
                    >
                      Click to select
                    </a>{' '}
                    the text box. Click again or double click to start editing
                    the text.
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-palette-1-light-2 u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-2">
                  <span className="u-icon u-icon-circle u-text-black u-icon-2">
                    <i class="fas fa-seedling fa-3x img-fluid"></i>
                  </span>
                  <h5 className="u-text u-text-1">Planting</h5>
                  <p className="u-text u-text-4">
                    Sample text.
                    <a
                      href="no link yet"
                      className="u-btn u-button-style u-none u-text-palette-1-base u-btn-2"
                    >
                      Click to select
                    </a>{' '}
                    the text box. Click again or double click to start editing
                    the text.
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-palette-1-light-2 u-repeater-item u-video-cover u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                  <span className="u-icon u-icon-circle u-text-black u-icon-3">
                    <i className="fas fa-hippo fa-3x img-fluid"></i>
                  </span>
                  <h5 className="u-text u-text-1">Rearing</h5>
                  <p className="u-text u-text-6">
                    Sample text.{' '}
                    <a
                      href="no link yet"
                      className="u-btn u-button-style u-none u-text-palette-1-base u-btn-3"
                    >
                      Click to select
                    </a>{' '}
                    the text box. Click again or double click to start editing
                    the text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-palette-2-dark-1 u-section-4"
        id="sec-b17a"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-left-xs u-text u-text-default-xl u-text-1">
            Know About Our History
          </h1>
          <div
            alt=""
            className="u-image u-image-circle u-image-1"
            data-image-width="980"
            data-image-height="766"
            data-animation-name="fadeIn"
            data-animation-duration="1500"
            data-animation-delay="0"
            data-animation-direction="Left"
            data-aos="fade-in"
          ></div>
          <p className="u-align-center-sm u-align-left-lg u-align-left-md u-align-left-xl u-align-left-xs u-custom-font u-font-raleway u-text u-text-2">
            Lorem Ipsum&nbsp;is simply dummy text of the printing and
            typesetting industry. Lo​rem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries,
          </p>
          <span className="u-icon u-icon-circle u-palette-1-base u-spacing-8 u-icon-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512 512"
            ></svg>
            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-2db3">
              <g>
                <path d="m457.524 166.563c-23.148-29.332-57.855-46.154-95.221-46.154-.002 0 .001 0-.001 0-15.818 0-31.168 3.023-45.41 8.769-5.118-2.038-10.383-3.726-15.767-5.05v-18.752c0-58.105-47.271-105.376-105.375-105.376h-15v53.521c17.438 8.645 30.286 25.696 30.125 45.422v25.184c-5.381 1.324-10.645 3.011-15.76 5.048-14.242-5.748-29.597-8.766-45.418-8.766-37.366 0-72.072 16.823-95.221 46.154-23.148 29.332-31.443 66.998-22.759 103.341l43.051 180.156.037.151c5.133 20.533 23.131 37.162 53.494 49.426 24.244 9.412 38.431 11.307 43.93 12.362 5.959-1.761 15.247-4.013 36.461-13.7 22.254 9.878 40.84 12.674 47.31 13.7 7.002-1.084 24.994-3.887 47.31-13.7 21.2 9.729 30.854 12.019 36.461 13.7 6.041-1.128 19.635-3.003 43.93-12.362 30.363-12.264 48.361-28.893 53.494-49.426l43.088-180.308c8.684-36.341.389-74.007-22.759-103.34zm-246.774-129.253v-5.811c34.401 6.974 60.375 37.448 60.375 73.876v15.217h-30.25v-21.649c0-24.056-11.359-46.954-30.125-61.633zm-40.101 443.901c-5.724-1.203-18.141-4.15-31.114-9.39-20.334-8.213-32.976-18.446-35.609-28.823l-43.03-180.066c-6.537-27.354-.293-55.705 17.13-77.783 19.433-24.599 50.005-37.617 81.738-34.172-5.363 4.759-10.354 10.024-14.894 15.779-23.148 29.337-31.439 67.008-22.747 103.354l44.425 185.756.037.149c2.157 8.626 6.67 15.985 12.562 22.25-3.127 1.169-6 2.156-8.498 2.946zm85.352.41c-19.186-3.414-55.772-15.053-60.295-32.818l-44.406-185.673c-6.542-27.356-.302-55.71 17.121-77.792 17.424-22.082 43.549-34.747 71.677-34.747h31.804c28.128 0 54.253 12.665 71.677 34.747 17.423 22.082 23.664 50.436 17.121 77.792l-44.405 185.672c-4.524 17.77-41.126 29.41-60.294 32.819zm195.103-218.689-43.03 180.066c-2.613 10.293-15.098 20.464-35.167 28.644-13.04 5.315-25.753 8.339-31.565 9.566-2.496-.79-5.367-1.777-8.488-2.944 5.892-6.265 10.404-13.624 12.561-22.25l44.461-185.905c8.692-36.345.402-74.016-22.747-103.354-4.539-5.752-9.528-11.016-14.889-15.774 30.097-3.726 62.881 9.629 81.733 34.168 17.424 22.078 23.668 50.428 17.131 77.783z"></path>
              </g>
            </svg>
          </span>
          <span className="u-icon u-icon-circle u-palette-1-base u-spacing-8 u-icon-2">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512 512"
            ></svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 512 512"
              x="0px"
              y="0px"
              id="svg-54a6"
              style={{ background: 'rgba(0, 0, 59.986, 59.986)' }}
            >
              <g>
                <g>
                  <path d="M371.624,134.341c-15.557-15.568-34.783-25.919-55.605-31.132v0.004c-32.305-8.1-62.432-3.286-89.888,12.922    l60.635,60.643c14.211,14.211-7.47,34.952-21.211,21.211l-63.636-63.644c-14.385,14.385-40.851,58.658-51.193,76.08l51.196,51.196    c14.211,14.211-7.47,34.952-21.211,21.211l-45.646-45.646c-11.621,20.253-24.055,42.281-45.507,81.788l27.506,27.506    c14.211,14.211-7.47,34.952-21.211,21.211L74.692,346.53C48.36,395.613,20.182,453.834,1.653,490.19    C-3.433,500.134,3.842,512,15.011,512c9.301,0,192.273-105.068,200.378-109.631l-33.726-33.726    c-13.945-13.945,7.151-35.271,21.211-21.211l39.582,39.582c38.832-22.214,63.285-37.127,79.722-47.558l-55.671-55.671    c-13.945-13.945,7.151-35.271,21.211-21.211l60.042,60.042c34.648-23.879,54.276-49.496,57.969-93.224    C408.713,191.761,394.807,157.532,371.624,134.341z"></path>
                </g>
              </g>
              <g>
                <g>
                  <path d="M468.948,99.917c12.832-17.593,11.323-42.48-4.541-58.345c-16.04-16.055-41.353-17.432-59.004-4.043    C401.829,16.26,383.284,0,361.019,0c-24.814,0-45,20.186-45,45v27.054c28.925,5.684,55.518,19.766,76.816,41.076    c21.758,21.764,35.359,48.618,40.926,76.758l33.268-0.029c24.887,0,45.001-20.142,44.971-45.029    C511.97,120.518,492.825,100.878,468.948,99.917z"></path>
                </g>
              </g>
            </svg>
          </span>
          <span className="u-icon u-icon-circle u-palette-1-base u-spacing-7 u-icon-3">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512 512"
            ></svg>
            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-2e95">
              <g>
                <g>
                  <g fill="#8db5ff">
                    <path d="m350.06 205.423v-90.629l33.145-.064v90.759z"></path>
                    <path d="m263.797 55.996 78.556 45.354 16.471-28.762-78.533-45.341z"></path>
                    <path d="m248.245 55.972-78.546 45.348-16.566-28.707 78.556-45.355z"></path>
                    <path d="m161.94 114.748v90.74l-33.145-.021v-90.69z"></path>
                    <path d="m153.147 247.607 39.251 22.661 39.27 22.674 16.572-28.705-39.27-22.673-39.291-22.684z"></path>
                    <path d="m137.58 247.612-78.509 45.326-16.56-28.71 78.523-45.336z"></path>
                    <path d="m51.307 397.072v-90.711l-33.144.017v90.661z"></path>
                    <path d="m137.794 455.966-78.73-45.454-16.511 28.739 78.432 45.283z"></path>
                    <path d="m152.959 455.956 78.679-45.425 16.52 28.733-78.417 45.275z"></path>
                    <path d="m374.455 247.632 78.466 45.302 16.58-28.699-78.561-45.357z"></path>
                    <path d="m358.814 247.63-39.212 22.638-39.252 22.663-16.566-28.708 39.246-22.659 39.266-22.67z"></path>
                    <path d="m272.572 306.346v90.726h-33.144v-90.694z"></path>
                    <path d="m359.059 455.966-78.729-45.454-16.517 28.736 78.436 45.285z"></path>
                    <path d="m374.219 455.958 78.699-45.436 16.606 28.684-78.521 45.335z"></path>
                    <path d="m460.693 306.41v90.673h33.144v-90.705z"></path>
                  </g>
                  <g>
                    <ellipse
                      cx="256"
                      cy="32.358"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.23 -.973 .973 .23 165.691 274.076)"
                    ></ellipse>
                    <path
                      d="m256 7.5c-4.15 0-8.06 1.023-11.5 2.821 7.938 4.151 13.358 12.459 13.358 22.037s-5.421 17.886-13.358 22.037c3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858-.001-13.73-11.13-24.859-24.859-24.859z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="366.632"
                      cy="96.234"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.23 -.973 .973 .23 188.738 430.949)"
                    ></ellipse>
                    <path
                      d="m366.633 71.376c-4.151 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858 0-13.731-11.13-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <circle
                      cx="366.632"
                      cy="224.003"
                      fill="#ffdf40"
                      r="24.858"
                    ></circle>
                    <path
                      d="m366.633 199.144c-4.151 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858 0-13.73-11.13-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <circle
                      cx="366.632"
                      cy="479.642"
                      fill="#ffdf40"
                      r="24.858"
                    ></circle>
                    <path
                      d="m366.633 454.783c-4.151 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858 0-13.73-11.13-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <circle
                      cx="145.367"
                      cy="479.642"
                      fill="#ffdf40"
                      r="24.858"
                    ></circle>
                    <path
                      d="m145.367 454.783c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.42 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858 0-13.73-11.13-24.86-24.859-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="256"
                      cy="415.61"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -218.9 302.749)"
                    ></ellipse>
                    <path
                      d="m256 390.751c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.42 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858-.001-13.73-11.13-24.86-24.859-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="34.735"
                      cy="415.61"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -283.707 146.29)"
                    ></ellipse>
                    <path
                      d="m34.735 390.751c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.42 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858-.001-13.73-11.13-24.86-24.859-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="34.735"
                      cy="287.853"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -193.37 108.871)"
                    ></ellipse>
                    <path
                      d="m34.735 262.995c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.42 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858-.001-13.731-11.13-24.86-24.859-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="256"
                      cy="287.853"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.23 -.973 .973 .23 -82.97 470.87)"
                    ></ellipse>
                    <path
                      d="m256 262.995c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.42 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.859-11.13 24.859-24.858-.001-13.731-11.13-24.86-24.859-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="477.265"
                      cy="287.853"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -63.755 421.788)"
                    ></ellipse>
                    <path
                      d="m477.265 262.995c-4.151 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858.001-13.731-11.129-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="477.265"
                      cy="415.601"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -154.087 459.204)"
                    ></ellipse>
                    <path
                      d="m477.265 390.743c-4.151 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858.001-13.731-11.129-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="145.367"
                      cy="96.234"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.707 -.707 .707 .707 -25.471 130.976)"
                    ></ellipse>
                    <path
                      d="m145.367 71.376c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858.001-13.731-11.129-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                  <g>
                    <ellipse
                      cx="145.367"
                      cy="224.003"
                      fill="#ffdf40"
                      rx="24.858"
                      ry="24.858"
                      transform="matrix(.23 -.973 .973 .23 -106.042 314.016)"
                    ></ellipse>
                    <path
                      d="m145.367 199.144c-4.15 0-8.06 1.023-11.5 2.822 7.938 4.151 13.358 12.458 13.358 22.037 0 9.578-5.421 17.886-13.358 22.037 3.44 1.799 7.349 2.822 11.5 2.822 13.729 0 24.858-11.13 24.858-24.858.001-13.73-11.129-24.86-24.858-24.86z"
                      fill="#ffbe40"
                    ></path>
                  </g>
                </g>
                <path d="m501.337 309.451c5.148-5.732 8.287-13.304 8.287-21.597 0-17.843-14.516-32.358-32.358-32.358-2.294 0-4.531.244-6.691.7l-73.195-42.259c-1.415-4.311-3.708-8.226-6.674-11.528v-84.579c5.148-5.732 8.286-13.303 8.286-21.596 0-17.843-14.516-32.358-32.358-32.358-2.293 0-4.529.243-6.688.699l-73.19-42.255c-4.234-12.942-16.417-22.32-30.756-22.32-14.338 0-26.521 9.377-30.756 22.318l-73.188 42.257c-2.159-.456-4.396-.699-6.688-.699-17.843 0-32.358 14.516-32.358 32.358 0 8.293 3.138 15.864 8.286 21.596v15.841c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-6.382c2.881.843 5.923 1.304 9.072 1.304s6.192-.461 9.072-1.304v65.659c-2.881-.843-5.923-1.304-9.072-1.304s-6.192.461-9.072 1.304v-29.115c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v38.574c-2.966 3.303-5.259 7.217-6.674 11.528l-73.195 42.259c-2.16-.456-4.397-.7-6.691-.7-17.843 0-32.358 14.516-32.358 32.358 0 8.293 3.139 15.865 8.287 21.597v84.554c-5.148 5.732-8.287 13.304-8.287 21.597 0 17.843 14.516 32.358 32.358 32.358 2.294 0 4.531-.244 6.691-.7l73.115 42.213c4.17 13.052 16.41 22.529 30.825 22.529s26.654-9.477 30.826-22.526l17.311-9.995c3.587-2.071 4.816-6.658 2.745-10.245-2.07-3.588-6.66-4.815-10.245-2.745l-9.24 5.334c-1.514-6.08-4.754-11.481-9.166-15.661l56.967-32.889c1.485 6.089 4.697 11.506 9.087 15.705l-21.565 12.451c-3.587 2.071-4.816 6.658-2.745 10.245 1.389 2.406 3.91 3.751 6.502 3.751 1.273 0 2.563-.324 3.743-1.006l29.712-17.154c2.163.457 4.403.702 6.7.702s4.537-.245 6.7-.702l73.106 42.207c4.172 13.05 16.411 22.526 30.827 22.526 14.415 0 26.655-9.477 30.827-22.526l73.115-42.213c2.16.456 4.398.7 6.691.7 17.843 0 32.358-14.516 32.358-32.358 0-8.293-3.139-15.865-8.287-21.597v-84.553zm-24.071 73.792c-3.149 0-6.192.461-9.072 1.304v-65.639c2.881.843 5.923 1.304 9.072 1.304s6.191-.46 9.071-1.303v65.638c-2.88-.843-5.922-1.304-9.071-1.304zm-104.152 64.693c-2.095-.427-4.262-.653-6.481-.653-2.22 0-4.387.225-6.482.653l-73.398-42.377c-1.415-4.317-3.71-8.238-6.68-11.545v-84.565c2.973-3.31 5.27-7.235 6.684-11.557l73.157-42.238c2.169.46 4.416.706 6.72.706 2.303 0 4.55-.246 6.718-.706l73.158 42.237c1.414 4.322 3.712 8.247 6.684 11.557v84.556c-2.973 3.31-5.27 7.235-6.684 11.557zm-205.391-200.573c4.388-4.201 7.598-9.619 9.081-15.71l56.855 32.825c-4.391 4.198-7.604 9.614-9.091 15.703zm8.402-141.093 73.185-42.252c2.16.456 4.397.699 6.69.699 2.294 0 4.531-.244 6.691-.7l73.185 42.253c1.414 4.323 3.712 8.249 6.685 11.56v84.577c-2.966 3.303-5.259 7.217-6.674 11.528l-73.197 42.259c-2.16-.456-4.396-.699-6.69-.699s-4.531.244-6.69.7l-73.196-42.26c-1.415-4.31-3.708-8.225-6.674-11.527v-84.578c2.973-3.311 5.271-7.237 6.685-11.56zm111.307 173.912c-1.487-6.089-4.7-11.505-9.091-15.704l56.855-32.825c1.482 6.09 4.692 11.508 9.08 15.709zm-48.79 7.671c0-9.571 7.787-17.358 17.358-17.358s17.358 7.787 17.358 17.358-7.787 17.358-17.358 17.358c-9.571.001-17.358-7.786-17.358-17.358zm110.632-63.85c0-9.571 7.787-17.358 17.358-17.358s17.358 7.787 17.358 17.358-7.787 17.358-17.358 17.358-17.358-7.787-17.358-17.358zm17.359-32.358c-3.149 0-6.192.461-9.072 1.304v-65.659c2.881.843 5.923 1.304 9.072 1.304s6.192-.461 9.072-1.304v65.659c-2.881-.844-5.923-1.304-9.072-1.304zm-119.705 127.263c2.881.843 5.923 1.304 9.072 1.304s6.192-.461 9.072-1.304v65.647c-2.881-.843-5.923-1.304-9.072-1.304s-6.192.461-9.072 1.304zm247.696-31.055c0 9.571-7.787 17.358-17.358 17.358s-17.358-7.787-17.358-17.358 7.787-17.358 17.358-17.358 17.358 7.787 17.358 17.358zm-48.79-7.671-56.845-32.818c4.388-4.201 7.598-9.619 9.081-15.709l56.854 32.825c-4.391 4.198-7.604 9.613-9.09 15.702zm-61.843-183.948c0 9.571-7.787 17.358-17.358 17.358s-17.358-7.787-17.358-17.358 7.787-17.358 17.358-17.358 17.358 7.787 17.358 17.358zm-48.79-7.673-56.86-32.828c4.391-4.199 7.604-9.614 9.09-15.703l56.861 32.828c-4.39 4.199-7.604 9.614-9.091 15.703zm-79.201-73.561c9.571 0 17.358 7.787 17.358 17.358s-7.787 17.359-17.358 17.359-17.358-7.787-17.358-17.358 7.787-17.359 17.358-17.359zm-31.432 25.029c1.486 6.089 4.7 11.505 9.091 15.704l-56.86 32.828c-1.487-6.089-4.701-11.504-9.091-15.702zm-96.559 56.205c0-9.571 7.787-17.358 17.358-17.358s17.358 7.787 17.358 17.358-7.787 17.358-17.358 17.358-17.358-7.786-17.358-17.358zm34.717 127.769c0 9.571-7.787 17.358-17.358 17.358s-17.358-7.787-17.358-17.358 7.787-17.358 17.358-17.358 17.358 7.787 17.358 17.358zm-48.795 7.651c1.482 6.09 4.692 11.508 9.08 15.709l-56.845 32.819c-1.486-6.089-4.699-11.504-9.09-15.703zm-79.197 88.558c3.149 0 6.192-.461 9.072-1.304v65.639c-2.881-.843-5.923-1.304-9.072-1.304s-6.191.46-9.071 1.303v-65.638c2.881.843 5.922 1.304 9.071 1.304zm0-49.717c9.571 0 17.358 7.787 17.358 17.358s-7.787 17.358-17.358 17.358-17.358-7.787-17.358-17.358 7.787-17.358 17.358-17.358zm-17.358 145.107c0-9.571 7.787-17.358 17.358-17.358s17.358 7.787 17.358 17.358-7.787 17.358-17.358 17.358-17.358-7.787-17.358-17.358zm48.79 7.67 56.969 32.891c-4.412 4.179-7.651 9.58-9.166 15.66l-56.893-32.847c4.391-4.199 7.604-9.615 9.09-15.704zm79.201 73.728c-9.571 0-17.358-7.787-17.358-17.358s7.787-17.358 17.358-17.358 17.358 7.787 17.358 17.358-7.786 17.358-17.358 17.358zm0-49.717c-2.219 0-4.387.225-6.481.653l-73.395-42.375c-1.414-4.322-3.712-8.246-6.684-11.556v-84.556c2.973-3.31 5.27-7.235 6.684-11.557l73.158-42.237c2.169.46 4.415.706 6.718.706 2.304 0 4.55-.246 6.719-.706l73.158 42.237c1.414 4.322 3.712 8.247 6.684 11.557v84.565c-2.97 3.308-5.266 7.229-6.681 11.546l-73.399 42.376c-2.094-.427-4.262-.653-6.481-.653zm93.275-31.674c0-9.571 7.787-17.357 17.358-17.357s17.358 7.786 17.358 17.357-7.787 17.358-17.358 17.358c-9.571.001-17.358-7.786-17.358-17.358zm48.792 7.664 56.967 32.89c-4.411 4.179-7.651 9.58-9.165 15.66l-56.888-32.844c4.389-4.199 7.601-9.616 9.086-15.706zm79.199 73.727c-9.571 0-17.358-7.787-17.358-17.358s7.787-17.358 17.358-17.358 17.358 7.787 17.358 17.358-7.787 17.358-17.358 17.358zm31.398-25.177c-1.515-6.08-4.754-11.481-9.166-15.66l56.969-32.89c1.487 6.089 4.699 11.504 9.09 15.703zm79.235-38.863c-1.764 0-3.466-.268-5.072-.76-.098-.037-.198-.067-.297-.1-6.95-2.268-11.989-8.802-11.989-16.499 0-9.571 7.787-17.358 17.358-17.358s17.358 7.787 17.358 17.358c0 9.572-7.787 17.359-17.358 17.359z"></path>
              </g>
            </svg>
          </span>
          <span className="u-icon u-icon-circle u-palette-1-base u-spacing-7 u-icon-4">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512.001 512.001"
            ></svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 512.001 512.001"
              x="0px"
              y="0px"
              id="svg-5096"
              style={{ background: 'rgba(0 0 512.001 512.001)' }}
            >
              <g>
                <g>
                  <path d="M502.746,31.279L480.73,9.262c-12.338-12.34-32.42-12.343-44.761,0l-32.634,32.634c-0.444-0.008-0.885-0.032-1.33-0.032    c-18.201,0-35.312,7.087-48.181,19.957l-19.392,19.391c-7.123,1.924-14.09,3.997-20.916,6.201    c-57.638,10.672-102.343,26.254-140.593,49.005c-40.643,24.173-74.641,57.313-103.938,101.316    C33.991,290.293,6.06,313.309,5.812,313.511c-4.683,3.774-6.78,9.903-5.389,15.754c1.392,5.851,6.022,10.381,11.901,11.644    c1.275,0.275,14.74,3.063,33.002,3.063c13.86,0,30.483-1.614,46.636-7.146c-10.134,44.245-10.848,76.752-10.874,78.213    c-0.078,4.235,1.571,8.32,4.567,11.315l0.005,0.005c2.928,2.928,6.897,4.57,11.029,4.57c0.096,0,0.191-0.001,0.285-0.003    c1.462-0.026,33.968-0.74,78.213-10.875c-12.822,37.436-4.565,77.398-4.084,79.639c1.259,5.867,5.785,10.475,11.619,11.877    c1.206,0.289,2.424,0.431,3.634,0.431c4.635,0,9.117-2.074,12.121-5.766c0.227-0.278,23.243-28.208,75.802-63.203    c44.002-29.297,77.143-63.295,101.316-103.938c22.75-38.25,38.332-82.954,49.005-140.591c2.205-6.826,4.277-13.794,6.201-20.917    l19.392-19.392c13.616-13.615,20.235-31.607,19.894-49.491l32.659-32.658C515.087,63.7,515.087,43.62,502.746,31.279z     M50.73,312.682c11.98-13.343,27.351-32.312,44.224-57.656c22.392-33.63,47.362-60.145,77.312-81.018    c-34.538,37.8-55.707,82.614-68.581,121.024C88.793,308.147,68.002,312.077,50.73,312.682z M256.988,417.058    c-25.343,16.875-44.313,32.245-57.656,44.223c0.606-17.274,4.537-38.063,17.65-52.955c38.41-12.875,83.226-34.044,121.025-68.584    C317.134,369.695,290.619,394.666,256.988,417.058z M428.133,136.128l-22.362,22.362c-1.962,1.962-3.365,4.413-4.065,7.099    c-10.722,41.166-32.806,99.542-77.129,143.864c-44.896,44.896-104.199,67.032-146.043,77.696    c-26.86,6.845-50.206,9.984-65.071,11.412c3.891-40.144,20.366-142.389,89.098-211.123    c44.324-44.322,102.699-66.407,143.865-77.128c2.686-0.7,5.136-2.103,7.099-4.065l22.361-22.362    c7.202-7.202,16.662-10.802,26.121-10.802c9.434,0,18.869,3.582,26.064,10.745c0.041,0.042,0.081,0.082,0.123,0.123    C442.534,98.356,442.515,121.745,428.133,136.128z M480.685,53.979l-20.526,20.526c-2.755-4.513-6.067-8.782-9.968-12.683    c-0.039-0.041-0.08-0.08-0.121-0.12c-3.835-3.817-8.051-7.109-12.551-9.868l20.512-20.512c0.176-0.177,0.461-0.177,0.639,0    l22.016,22.017C480.861,53.517,480.861,53.803,480.685,53.979z"></path>
                </g>
              </g>
            </svg>
          </span>
          <h5 className="u-custom-font u-font-raleway u-text u-text-3">
            Dependable
          </h5>
          <h5 className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-font-raleway u-text u-text-4">
            Usable
          </h5>
          <h5 className="u-align-center-xs u-custom-font u-font-raleway u-text u-text-5">
            Edible
          </h5>
          <h5 className="u-custom-font u-font-raleway u-text u-text-6">
            Available
          </h5>
        </div>
      </section>

      <section
        className="u-clearfix u-image u-shading u-section-5"
        id="sec-f253"
        data-image-width="1920"
        data-image-height="1280"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h1 className="u-align-center u-text u-text-1">Design Perfection</h1>
          <p
            className="u-align-center u-text u-text-2"
            style={{ fontFamily: 'Raleway' }}
          >
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </p>
        </div>
      </section>

      <section
        className="u-clearfix u-image u-image-contain u-section-6"
        id="sec-f64e"
        data-image-width="1297"
        data-image-height="865"
      >
        <div className="u-clearfix u-sheet u-valign-middle-sm u-sheet-1">
          <h1 className="u-custom-font u-font-raleway u-text u-text-1">
            What We Offer
          </h1>
          <p className="u-align-center u-custom-font u-font-raleway u-text u-text-2">
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </p>
          <div
            alt=""
            className="u-border-8 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-1"
            data-image-width="1600"
            data-image-height="1600"
            data-animation-name="fadeIn"
            data-animation-duration="1000"
            data-animation-delay="0"
            data-animation-direction=""
            data-aos="fade-in"
          ></div>
          <div
            alt=""
            className="u-border-8 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-2"
            data-image-width="1600"
            data-image-height="1600"
            data-animation-name="fadeIn"
            data-animation-duration="1000"
            data-animation-delay="0"
            data-animation-direction=""
            data-aos="fade-in"
          ></div>
          <div
            alt=""
            className="u-border-8 u-border-grey-75 u-image u-image-circle u-preserve-proportions u-image-3"
            data-image-width="1600"
            data-image-height="1600"
            data-animation-name="fadeIn"
            data-animation-duration="1000"
            data-animation-delay="0"
            data-animation-direction=""
            data-aos="fade-in"
          ></div>
          <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-3">
            Bread
          </h3>
          <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-4">
            Bread
          </h3>
          <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-5">
            Bread
          </h3>
          <p className="u-align-center u-custom-font u-font-raleway u-text u-text-6">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <p className="u-align-center u-custom-font u-font-raleway u-text u-text-7">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <p className="u-align-center u-custom-font u-font-raleway u-text u-text-8">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <a
            href="https://nicepage.com/c/sale-html-templates"
            className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-2-dark-1 u-btn-1"
          >
            SEE MORE&nbsp;
          </a>
          <span className="u-icon u-icon-circle u-text-white u-icon-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 512 512"
            ></svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 512 512"
              x="0px"
              y="0px"
              id="svg-5873"
              style={{ background: 'rgba(0 0 512 512)' }}
            >
              <g>
                <g>
                  <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"></path>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </section>

      <section
        className="u-clearfix u-palette-2-light-1 u-section-7"
        id="sec-a842"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <img
            src={Image}
            alt=""
            className="u-image u-image-default u-image-1"
            data-aos="fade-left"
          />
          <h1 className="u-custom-font u-font-raleway u-text u-text-white u-text-1">
            Lorem Ipsum
          </h1>
          <img
            src={Image}
            alt=""
            className="u-expanded-width-xs u-image u-image-default u-image-2"
            data-aos="fade-right"
          />
          <p className="u-custom-font u-font-raleway u-text u-text-body-alt-color u-text-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h1 className="u-custom-font u-font-raleway u-text u-text-3">
            Lorem Ipsum
          </h1>
          <p className="u-custom-font u-font-raleway u-text u-text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <Team />
      {/* Our Team */}

      {/* Client Reviews Begins */}
      <section
        className="u-clearfix u-palette-2-light-3 u-section-9"
        id="carousel_7bfc"
      >
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-xl u-sheet-1">
          <div
            id="carousel-d79e"
            data-interval="5000"
            data-u-ride="carousel"
            className="u-carousel u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-slider u-slider-1"
          >
            <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
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
                <div className="u-container-layout u-container-layout-1">
                  <h1 className="u-custom-font u-font-raleway u-text u-text-1">
                    Client Reviews
                  </h1>
                  <p className="u-custom-font u-font-raleway u-text u-text-2">
                    "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                    justo. Mauris efficitur, mauris in auctor euismod, quam elit
                    ultrices urna, eget eleifend arcu risus id metus. Maecenas
                    ex enim,​ mattis eu velit vitae, blandit mattis sapien. Sed
                    aliquam leo et semper vestibulum."
                  </p>
                  <h5 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-3">
                    frank kinney
                  </h5>
                </div>
              </div>
              <div className="u-align-center u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-2">
                  <h1 className="u-custom-font u-font-raleway u-text u-text-4">
                    Client Reviews
                  </h1>
                  <p className="u-custom-font u-font-raleway u-text u-text-5">
                    "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                    justo. Mauris efficitur, mauris in auctor euismod, quam elit
                    ultrices urna, eget eleifend arcu risus id metus. Maecenas
                    ex enim,​ mattis eu velit vitae, blandit mattis sapien. Sed
                    aliquam leo et semper vestibulum."
                  </p>
                  <h5 className="u-align-center-md u-text u-text-6">
                    Mary Smith
                  </h5>
                </div>
              </div>
            </div>
            <a
              className="u-carousel-control u-carousel-control-prev u-icon-circle u-text-body-color u-text-hover-grey-50 u-carousel-control-1"
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
              className="u-carousel-control u-carousel-control-next u-icon-circle u-text-body-color u-text-hover-grey-50 u-carousel-control-2"
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
      {/* Client Review Ends */}

      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default Home
