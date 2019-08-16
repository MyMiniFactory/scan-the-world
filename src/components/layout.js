import React from "react"
import SocialBar from "./social-bar"
import Header from "./header"
import "./scss/layout.scss"


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
