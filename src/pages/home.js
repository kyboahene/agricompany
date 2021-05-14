import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../home.css'
import Team from '../components/team'

import Image from '../images/ttt-min.jpg'
import Mushroom from '../images/fungus-1194380_1920.jpg'
import Snail from '../images/snail-2335758_1920.jpg'
import Goat from '../images/goat-4884605_1920.jpg'
import Animals from '../images/goats-2052733_1920.jpg'
import Plants from '../images/plants.jpg'
import Affordable from '../images/affordable.jpg'

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="u-body u-overlap"
    >
      {/* Navbar Begins */}
      {/* <Navbar /> */}
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
                <div
                  className="u-container-style u-layout-cell u-left-cell u-size-25 u-layout-cell-1"
                  id="forMobile"
                >
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1">
                    <h5 className="u-align-center u-custom-font u-font-raleway u-text u-text-1">
                      Welcome to TIES Agric
                    </h5>
                    <div
                      alt=""
                      className="u-image u-image-circle u-image-1"
                    ></div>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-2">
                      &nbsp;Your place of quality and healthy primary food
                      production. <br />
                    </p>
                    <a
                      href="http://webneel.com/30-incredible-and-award-winning-fashion-photography-cergelyte-khokhlov-and-witzel"
                      className="u-align-center u-btn u-button-style u-btn-1"
                      title="learn more"
                      target="_blank"
                      rel="noreferrer"
                      style={{ backgroundColor: '#1B842C' }}
                    >
                      learn more
                    </a>
                  </div>
                </div>
                <div
                  className="u-container-style u-layout-cell u-left-cell u-size-25 u-layout-cell-1"
                  id="forDesktop"
                >
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1">
                    <h1
                      className="u-align-center u-custom-font u-font-raleway font-weight-bold text-uppercase"
                      style={{ fontSize: '3em' }}
                    >
                      Welcome to TIES Agric
                    </h1>
                    <p className="u-align-center u-custom-font u-font-raleway lead">
                      Using innovative technology to improve the efficiency and
                      sustainability of food cultivation in Africa.
                    </p>
                  </div>
                </div>
                <div
                  className="u-container-style u-layout-cell u-right-cell u-shape-rectangle u-size-35 u-layout-cell-2"
                  id="forDesktop"
                >
                  <div className="u-container-layout">
                    <div
                      className="u-shape u-shape-rectangle u-shape-1"
                      style={{ backgroundColor: '#1B842C' }}
                    ></div>
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
        className="u-align-center u-clearfix u-section-2"
        id="sec-0d7f"
        style={{ backgroundColor: '#1B842C', color: '#fff' }}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-raleway u-text u-text-1">
            Healthy Natural Products
          </h1>
          <p className="u-custom-font u-font-raleway u-text u-text-2">
            We focus on industrializing indigenous enterprises and empowering
            local african farmers through value addition to raw agricultural
            produce.
          </p>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-3" id="sec-07f7">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-list u-list-1 u-custom-font u-font-raleway">
            <div className="u-repeater u-repeater-1">
              <div
                className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-list-item-1"
                style={{ backgroundColor: '#3AAB58', color: '#fff' }}
              >
                <div className="u-container-layout u-similar-container u-container-layout-1 ">
                  <img
                    src={Animals}
                    alt=""
                    className="img-fluid img-thumbnail"
                  />
                  <h5 className="u-text u-text-1 u-custom-font u-font-raleway font-weight-bold">
                    Healthy Animals
                  </h5>
                  <p className="u-text u-text-2 pb-3">
                    We provide you with strong, healthy and disease-free animals
                    such as snails, goats.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-list-item u-repeater-item u-list-item-2"
                style={{ backgroundColor: '#3AAB58', color: '#fff' }}
              >
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <img
                    src={Plants}
                    alt=""
                    className="img-fluid img-thumbnail"
                  />
                  <h5 className="u-text u-text-1 u-custom-font u-font-raleway font-weight-bold">
                    Fresh Plants
                  </h5>
                  <p className="u-text u-text-4 px-3">
                    Sweet and nutritious plants (Mushrooms) at your service.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-list-item-3"
                style={{ backgroundColor: '#3AAB58', color: '#fff' }}
              >
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <img
                    src={Affordable}
                    alt=""
                    className="img-fluid img-thumbnail"
                  />
                  <h5 className="u-text u-text-1 u-custom-font u-font-raleway font-weight-bold">
                    Affordable Prices
                  </h5>
                  <p className="u-text u-text-6 px-3">
                    All these and many more at prices that everyone can afford.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-4" id="sec-b17a">
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
            Since 2017, we have strived to establish the business as a
            trustworthy supplier of primary agricultural produce. We started a
            mushroom farm, a goat farm and a snail farm. We are working to scale
            up while exploring natural preservation methods as our client base
            increases.This year, we hope to start supplying processed products
            to the ...
          </p>
          <div className="row justify-content-center mb-5" id="customRow">
            <div className="col-md-12 col-sm-3 text-center">
              <a href="/services" className="mybutton" rel="noreferrer">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-image u-shading u-section-5"
        id="sec-f253"
        data-image-width="1920"
        data-image-height="1280"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h1 className="u-align-center u-text u-text-1">Our Vision</h1>
          <p
            className="u-align-center u-text u-text-2"
            style={{ fontFamily: 'Raleway' }}
          >
            To become a forerunner in the agricultural business, providing
            organically grown produce and adding value to to raw agricultural
            products.
          </p>
        </div>
      </section>

      <section>
        <div
          className="container u-custom-font u-font-raleway pt-5"
          id="what_we_do"
        >
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 text-center">
              <h1 className="u-custom-font u-font-raleway font-weight-bold">
                What We Offer
              </h1>
              <p className="lead">
                our main areas of focus is primary food production with an
                emphasis on using innovative technology to improve the
                efficiency and sustainability of food cultivation in Africa.
                Currently our business has three (3) lines of services.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-5 mt-5">
            <div className="col-md-4 text-center">
              <img
                src={Mushroom}
                className="img-fluid rounded-circle shadow"
                alt=""
                data-aos="fade-down"
              />
              <h3 className="u-custom-font u-font-raleway">Mushrooms</h3>
              <p>
                We provide substrates for local mushroom farmers at affordable
                prices to grow their business ...
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={Snail}
                className="img-fluid rounded-circle shadow"
                alt=""
                data-aos="fade-up"
              />
              <h3 className="u-custom-font u-font-raleway">Fresh Snails</h3>
              <p>
                We provide order and delivery for bulk purchase of fresh snails
                in Sunyani, Kumasi and Accra ...
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={Goat}
                className="img-fluid rounded-circle shadow"
                alt=""
                data-aos="fade-down"
              />
              <h3 className="u-custom-font u-font-raleway">Live Goats</h3>
              <p>
                We provide order and delivery of live goats in the Sunyani area.
                We also fulfill order and delivery service of ...
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 col-sm-6 col-lg-6 text-center">
              <a href="/services" className="mybutton" rel="noreferrer">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid"
        style={{ backgroundColor: '#3AAB58', color: '#fff' }}
      >
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 col-lg-6 pr-0">
              <img
                src={Image}
                alt=""
                className="img-fluid"
                data-aos="fade-left"
              />
            </div>
            <div className="col-md-12 col-lg-6 justify-content-center align-items-center">
              <h1 className="pt-5 u-custom-font u-font-raleway font-weight-bold">
                Lorem Ipsum
              </h1>
              <p className="lead u-custom-font u-font-raleway">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-12 col-lg-6 justify-content-center align-items-center">
              <h1 className=" pt-5 u-custom-font u-font-raleway font-weight-bold">
                Lorem Ipsum
              </h1>
              <p className="lead u-custom-font u-font-raleway">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-12 col-lg-6 pl-0 ">
              <img
                src={Image}
                alt=""
                className="img-fluid"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <Team />
      {/* Our Team */}

      {/* Client Reviews Begins */}
      <section
        className="container-fluid"
        style={{ backgroundColor: '#4FC880', color: '#fff' }}
      >
        <div className="container py-5">
          <div className="row justify-content-center pt-3">
            <div className="col-md-6 text-center">
              <h1 className="u-custom-font u-font-raleway font-weight-bold">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="col-md-8">
              <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-12">
                <form
                  action="#"
                  method="POST"
                  className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                  style={{ padding: '1px' }}
                  source="custom"
                  name="form"
                >
                  <div className="u-form-group u-form-name">
                    <label
                      for="name-3b9a"
                      className="u-form-control-hidden u-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      id="name-3b9a"
                      name="name"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      required=""
                    />
                  </div>
                  <div className="u-form-email u-form-group">
                    <label
                      for="email-3b9a"
                      className="u-form-control-hidden u-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter a valid email address"
                      id="email-3b9a"
                      name="email"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      required=""
                    />
                  </div>
                  <div className="u-form-group u-form-phone u-form-group-32">
                    <label
                      for="phone-dd0b"
                      className="u-form-control-hidden u-label"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                      placeholder="Enter your phone (e.g. +14155552675)"
                      id="phone-dd0b"
                      name="phone"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      required=""
                    />
                  </div>
                  <div className="u-form-group u-form-message">
                    <label
                      for="message-3b9a"
                      className="u-form-control-hidden u-label"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      rows="4"
                      cols="50"
                      id="message-3b9a"
                      name="message"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      required=""
                    ></textarea>
                  </div>
                  <div className="u-align-center u-form-group u-form-submit">
                    <a
                      href="#n"
                      className="u-btn u-btn-submit u-button-style u-custom-font u-font-raleway u-btn-12"
                      style={{ backgroundColor: '#1B842C' }}
                    >
                      Submit
                    </a>
                    <input
                      type="submit"
                      value="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    {' '}
                    Thank you! Your message has been sent.{' '}
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    {' '}
                    Unable to send your message. Please fix errors then try
                    again.{' '}
                  </div>
                  <input type="hidden" value="" name="recaptchaResponse" />
                </form>
              </div>
            </div>
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
