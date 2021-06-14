import React from 'react'
import { motion } from 'framer-motion'
import '../css/services.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import mushIcon from '../images/mushroom-29738.svg'
import Mushroom from '../images/mushrooms.jpg'
import MushSubstrate from '../images/image2.jpg'
import Snail from '../images/image1.jpg'
import snailIcon from '../images/snail-710086.svg'
import Goat from '../images/goat.jpg'
import goatIcon from '../images/female-48385.svg'
import { Helmet } from 'react-helmet'

const Services = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="u-body u-overlap"
    >
      <Helmet>
        <title>Services - TIES Agric</title>
      </Helmet>
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
        className="u-clearfix u-image u-image-contain u-section-23"
        data-image-width="1024"
        data-image-height="1024"
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 text-center col-sm-12">
              <h1 class=" u-custom-font u-font-raleway font-weight-bold">
                What We Do
              </h1>
              <p class=" u-custom-font u-font-raleway lead">
                Our main areas of focus is primary food production with an
                emphasis on using innovative technology to improve the
                efficiency and sustainability of food cultivation in Africa.
                Currently our business has three (3) lines of services.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 my-5">
              <h1 className="u-custom-font u-font-raleway text-center display-1">
                Mushrooms{' '}
                <img
                  src={mushIcon}
                  alt=""
                  className="img-fluid"
                  style={{ height: '40px', width: '40px' }}
                />
              </h1>
            </div>
            <div className="col-md-6">
              <img
                src={MushSubstrate}
                alt=""
                className="img-fluid rounded"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
              <p className="u-align-left u-custom-font u-font-raleway lead">
                <span className="font-weight-bold">Substrate Production</span>{' '}
                <br /> We provide substrates for local mushroom farmers at
                affordable prices to grow their business.
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src={Mushroom}
                alt=""
                className="img-fluid rounded"
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
              <p className="u-align-left u-custom-font u-font-raleway lead">
                <span className="font-weight-bold">
                  EcoMush and Bulk Supply EcoMus
                </span>{' '}
                <br /> EcoMush and Bulk Supply EcoMush is a frozen mushroom
                product that is sold in cold stores across Kumasi. For bulk
                orders, see our contact info. We also provide order services for
                food joints that need bulk fresh mushroom supply to run their
                business.
              </p>
            </div>
          </div>

          <div className="row my-5 py-5">
            <div className="col-12 my-5">
              <h1 className="u-custom-font u-font-raleway text-center">
                Snails{' '}
                <img
                  src={snailIcon}
                  alt=""
                  className="img-fluid"
                  style={{ height: '50px', width: '50px' }}
                />
              </h1>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
              <p className="u-align-left u-custom-font u-font-raleway lead">
                <span className="font-weight-bold">Fresh Snail</span> <br /> We
                provide order and delivery for bulk purchase of fresh snails in
                Sunyani, Kumasi and Accra.
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src={Snail}
                alt=""
                className="img-fluid rounded"
                data-aos="fade-left"
                data-aos-duration="1500"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 my-5">
              <h1 className="u-custom-font u-font-raleway text-center ">
                Goats{' '}
                <img
                  src={goatIcon}
                  alt=""
                  className="img-fluid"
                  style={{ height: '40px', width: '40px' }}
                />
              </h1>
            </div>
            {/* <div className="col-md-6">
              <img
                src={GoatMeat}
                alt=""
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
              <p className="u-align-left u-custom-font u-font-raleway lead">
                <span className="font-weight-bold">Frozen goat meat</span>{' '}
                <br /> We provide substrates for local mushroom farmers at
                affordable prices to grow their business.
              </p>
            </div> */}
            <div className="col-md-6 mt-5">
              <img
                src={Goat}
                alt=""
                className="img-fluid rounded"
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
              <p className="u-align-left u-custom-font u-font-raleway lead">
                <span className="font-weight-bold">Live healthy goats</span>{' '}
                <br /> We provide order and delivery of live goats in the
                Sunyani area. We also fulfill order and delivery service of
                processed goat meat in Accra, Kumasi and Sunyani.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default Services
