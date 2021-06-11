import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import RiseLoader from 'react-spinners/RiseLoader'
import { AnimatePresence, motion } from 'framer-motion'

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Services from './pages/services'
import ScrollTotop from './components/scrollTotop'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ? (
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 1 }}
          style={{
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#507736',
          }}
        >
          <RiseLoader color="#fff" loading={loading} size={40} />
        </motion.div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <BrowserRouter>
            <ScrollTotop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact-us" component={Contact} />
              <Route path="/services" component={Services} />
            </Switch>
          </BrowserRouter>
        </AnimatePresence>
      )}
    </>
  )
}

export default App
