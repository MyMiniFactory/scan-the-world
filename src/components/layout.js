import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SocialBar from './SocialBar/SocialBar';
import TopBar from './TopBar/TopBar';

const Layout = ({ children }) => (
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
        <TopBar/>
        <SocialBar />
        <main>{children}</main>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
