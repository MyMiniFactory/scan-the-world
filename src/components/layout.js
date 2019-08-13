import './layout.css'
import React from "react"
import SocialBar from './socialBar/socialBar';
import Header from './header';


const Layout = ({ children }) => (
  // shortcut to React.Fragment
  <>
    <Header />
    <main>
      {children}
    </main>
    <SocialBar />
  </>
)

export default Layout
