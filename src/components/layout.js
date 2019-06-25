import './layout.css'
import React from "react"
import PropTypes from "prop-types"

import SocialBar from './SocialBar/SocialBar';
import Header from './header';
import Footer from './footer';


const Layout = ({ banner, children }) => (
  // shortcut to React.Fragment
  <>
    <Header />
    <SocialBar />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
