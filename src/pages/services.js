import React from 'react'
import { motion } from 'framer-motion'
import '../services.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Services = () => {
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
        class="skrollable u-align-center u-clearfix u-image u-section-13"
        src=""
        data-image-width="1297"
        data-image-height="865"
        id="sec-295b"
      >
        <div class="u-clearfix u-sheet u-sheet-13">
          <h1 class="u-align-left u-custom-font u-font-raleway u-text u-text-13">
            Our Services
          </h1>
          <h2 class="u-align-left u-custom-font u-font-raleway u-text u-text-23">
            <span class="u-text-palette-2-dark-1">Home</span> &gt; Services
          </h2>
        </div>
      </section>

      <section
        class="u-clearfix u-image u-image-contain u-section-23"
        id="sec-6095"
        data-image-width="1024"
        data-image-height="1024"
      >
        <div class="u-clearfix u-sheet u-valign-middle-lg u-sheet-13">
          <h1 class="u-align-center-xs u-custom-font u-font-raleway u-text u-text-13">
            What We Do
          </h1>
          <p class="u-align-center u-custom-font u-font-raleway u-text u-text-23">
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </p>
          <img
            src="images/casserole-dish-2776735_1920.jpg"
            alt=""
            class="u-image u-image-default u-image-13"
            data-image-width="1600"
            data-image-height="1067"
          />
          <h2 class="u-align-center u-custom-font u-font-raleway u-text u-text-33">
            Service1
          </h2>
          <p class="u-align-center u-custom-font u-font-raleway u-text u-text-43">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img
            src="images/casserole-dish-2776735_1920.jpg"
            alt=""
            class="u-image u-image-default u-image-23"
            data-image-width="1600"
            data-image-height="1067"
          />
          <h2 class="u-align-center u-custom-font u-font-raleway u-text u-text-53">
            Service2
          </h2>
          <p class="u-align-center u-custom-font u-font-raleway u-text u-text-63">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img
            src="images/casserole-dish-2776735_1920.jpg"
            alt=""
            class="u-image u-image-default u-image-13"
            data-image-width="1600"
            data-image-height="1067"
          />
          <h2 class="u-align-center u-custom-font u-font-raleway u-text u-text-33">
            Service3
          </h2>
          <p class="u-align-center u-custom-font u-font-raleway u-text u-text-43">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img
            src="images/casserole-dish-2776735_1920.jpg"
            alt=""
            class="u-image u-image-default u-image-43"
            data-image-width="1600"
            data-image-height="1067"
          />
          <h2 class="u-align-center u-custom-font u-font-raleway u-text u-text-53">
            Service4
          </h2>
          <p class="u-align-center u-custom-font u-font-raleway u-text u-text-63">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default Services
