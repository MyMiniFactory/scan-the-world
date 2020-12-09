import React from "react"
import Header from "./header"
import SocialBar from "./social-bar"
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
