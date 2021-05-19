import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import { AnimatePresence, motion } from 'framer-motion'

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Services from './pages/services'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
            backgroundColor: '#804832',
          }}
        >
          <HashLoader color="#fff" loading={loading} size={80} />
        </motion.div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <BrowserRouter>
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
