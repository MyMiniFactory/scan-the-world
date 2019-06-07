import './layout.css'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SocialBar from './SocialBar/SocialBar';
import TopBar from './TopBar/TopBar';


const Layout = ({ banner, children }) => {

  let mainStyle = {}
  if(banner){
    mainStyle = {
      backgroundImage: 'url("../' + banner + '")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'auto',
      paddingTop: '300px'
    }
  }

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <React.Fragment>
          <TopBar />
          <SocialBar />
          <main style={mainStyle} >{children}</main>
        </React.Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
