import React from 'react'
import { motion } from 'framer-motion'
import '../css/contact.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const contact = () => {
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
        class="u-align-left u-clearfix u-image u-section-12"
        src=""
        data-image-width="1297"
        data-image-height="865"
        id="sec-b44b"
      >
        <div class="u-clearfix u-sheet u-sheet-12">
          <h1 class="u-custom-font u-font-raleway u-text u-text-12">
            <span style={{ fontWeight: 700 }}>Contact</span>
            <br />
          </h1>
          <h3 class="u-custom-font u-font-raleway u-text u-text-22">
            <span class="u-text-palette-2-dark-1">Home</span> &gt; Contact
          </h3>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix  u-section-22"
        id="sec-c2b3"
        style={{ backgroundColor: '#9BBC49', color: '#000' }}
      >
        <div className="u-clearfix u-sheet u-sheet-12">
          <h1 className="u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-font-raleway u-text u-text-12">
            <span style={{ fontWeight: 700 }}>Get In Touch</span>&nbsp;
          </h1>
          <h5 className="u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-font-raleway u-text u-text-22">
            Is there something we need to know? Kindly don't hesitate to connect
            to us via our contact form.
          </h5>
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
              <div className="u-align-left u-form-group u-form-submit">
                <a
                  href="#n"
                  className="u-btn u-btn-submit u-button-style u-custom-font u-font-raleway u-btn-12"
                  style={{ backgroundColor: "#507736"}}
                >
                  SUBMIT
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
                Unable to send your message. Please fix errors then try again.{' '}
              </div>
              <input type="hidden" value="" name="recaptchaResponse" />
            </form>
          </div>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-32">
            Address:
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-42">
            54B Sakumono Street 54356,
            <br />
            La City, IA 3546646.
          </p>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-52">
            Phone:
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-62">
            233 54 726 4511
          </p>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-72">
            Email:&nbsp;
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-82">
            Kyeiyaw437@gmail.com
          </p>
        </div>
      </section>

      {/* Map */}
      <section
        className="u-clearfix u-grey-light-2 u-typography-custom-page-typography-12--Map u-section-32"
        id="sec-a4f9"
      >
        <div className="u-expanded-lg u-expanded-md u-expanded-width-sm u-expanded-width-xs u-expanded-xl u-grey-light-2 u-map u-map-12">
          <div className="embed-responsive">
            <iframe
              className="embed-responsive-item"
              src="//maps.google.com/maps?output=embed&amp;q=Manhattan&amp;t=m"
              data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIyTWFuaGF0dGFuJTIyJTJDJTIyem9vbSUyMiUzQTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQW51bGwlMkMlMjJhcGlLZXklMjIlM0FudWxsJTJDJTIybWFya2VycyUyMiUzQSU1QiU1RCU3RA=="
            ></iframe>
          </div>
        </div>
      </section>
      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default contact
