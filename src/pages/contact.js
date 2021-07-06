/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { motion } from 'framer-motion'
import '../css/contact.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'

const Contact = () => {
  // const { handleSubmit, register } = useForm()
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_eyqlo05',
        'template_4wlt0zd',
        e.target,
        'user_pXdHN5YaCXwi2QwIxzIrS',
      )
      .then(
        (result) => {
          console.log(result)
          document.getElementsByClassName('popup')[0].classList.add('active')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  const close = () => {
    document.getElementsByClassName('popup')[0].classList.remove('active')
    window.location.reload()
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="u-body u-overlap"
    >
      <Helmet>
        <title>Contact - TIES Agric</title>
      </Helmet>
      {/* Navbar Begins */}
      <Navbar />
      {/* Navbar Ends */}
      <section
        className="u-align-left u-clearfix u-image u-section-12"
        src=""
        data-image-width="1297"
        data-image-height="865"
        id="sec-b44b"
      >
        <div className="u-clearfix u-sheet u-sheet-12">
          <h1 className="u-custom-font u-font-raleway u-text u-text-12">
            <span style={{ fontWeight: 700 }}>Contact</span>
            <br />
          </h1>
          <h3 className="u-custom-font u-font-raleway u-text u-text-22">
            <span className="u-text-palette-2-dark-1">Home</span> &gt; Contact
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
              className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
              style={{ padding: '1px' }}
              source="custom"
              name="form"
              onSubmit={sendEmail}
            >
              <div className="u-form-group u-form-name">
                <label
                  htmlFor="name-3b9a"
                  className="u-form-control-hidden u-label"
                >
                  Name
                </label>
                <input
                  // {...register('name')}
                  type="text"
                  placeholder="Enter your Name"
                  id="name-3b9a"
                  name="name"
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                  required
                />
              </div>
              <div className="u-form-email u-form-group">
                <label
                  htmlFor="email-3b9a"
                  className="u-form-control-hidden u-label"
                >
                  Email
                </label>
                <input
                  // {...register('email')}
                  type="email"
                  placeholder="Enter a valid email address"
                  id="email-3b9a"
                  name="email"
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                  required
                />
              </div>
              <div className="u-form-group u-form-phone u-form-group-32">
                <label
                  htmlFor="phone-dd0b"
                  className="u-form-control-hidden u-label"
                >
                  Phone
                </label>
                <input
                  // {...register('phone')}
                  type="tel"
                  pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                  placeholder="Enter your phone (e.g. +14155552675)"
                  id="phone-dd0b"
                  name="phone"
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                  required
                />
              </div>
              <div className="u-form-group u-form-message">
                <label
                  htmlFor="message-3b9a"
                  className="u-form-control-hidden u-label"
                >
                  Message
                </label>
                <textarea
                  // {...register('message')}
                  placeholder="Enter your message"
                  rows="4"
                  cols="50"
                  id="message-3b9a"
                  name="message"
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                  required
                ></textarea>
              </div>
              <div className="u-align-left u-form-group u-form-submit">
                <input
                  type="submit"
                  value="submit"
                  className="u-btn u-btn-submit u-button-style u-custom-font u-font-raleway u-btn-12"
                  style={{ backgroundColor: '#507736' }}
                />
              </div>
              <div className="popup center">
                <div className="icon">
                  <i className="fa fa-check"></i>
                </div>
                <div className="title">Success!!</div>
                <div className="description">
                  Thank you reaching out to us. You will hear from us soon.
                </div>
                <div className="dismiss-btn">
                  <button id="dismiss-popup-btn" onClick={close}>
                    Dismiss
                  </button>
                </div>
                <div className="overlay"></div>
              </div>
              <input type="hidden" value="" name="recaptchaResponse" />
            </form>
          </div>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-32">
            Address:
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-42">
            Abuosu, Sunyani. <br />
            Behind JUSAG village
          </p>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-52">
            Phone:
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-62">
            +1 (860) 759-6709
          </p>
          <h4 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-72">
            Email:&nbsp;
          </h4>
          <p className="u-align-left u-custom-font u-font-raleway u-text u-text-82">
            saliaabdallah16@gmail.com
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="container-fluid" id="sec-a4f9">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2058.7250244453157!2d-2.3121095028924916!3d7.33774380058029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdacf2948671391%3A0xb6cac72b91017af!2sSunyani!5e0!3m2!1sen!2sgh!4v1623092259956!5m2!1sen!2sgh"
            width="2000"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      {/* Footer Begins */}
      <Footer />
      {/* Footer Ends */}
    </motion.div>
  )
}

export default Contact
