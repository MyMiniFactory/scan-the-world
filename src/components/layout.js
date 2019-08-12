import './layout.css'
import React from "react"
import PropTypes from "prop-types"

import SocialBar from './socialBar/socialBar';
import Header from './header';
import Footer from './footer';


const Layout = ({ children }) => (
  // shortcut to React.Fragment
  <>
    <Header />
    <main>
      {children}
    </main>
    <SocialBar />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
