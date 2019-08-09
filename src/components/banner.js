import React from 'react'
import './banner.scss'

const Banner = (props) => (
    <div className="banner" style={{backgroundImage: `url(${props.bannerUrl})`}}/>
)

export default Banner
