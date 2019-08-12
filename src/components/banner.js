import React from 'react'
import Img from 'gatsby-image'
import './banner.scss'

export default ({ childImageSharp }) => (
  <Img className="banner" fluid={childImageSharp.fluid} />
)
