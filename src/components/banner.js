import React from 'react'
import { Link } from 'gatsby'
import { FaChevronLeft } from 'react-icons/fa'
import './banner.css'

const Banner = (props) => (
  <>
    <Link to={props.url}>
      <FaChevronLeft className='return'/>
    </Link>
    <div className="banner" style={{backgroundImage: `url(${props.bannerUrl})`}}/>
  </>
)

export default Banner
