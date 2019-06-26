import React from 'react'
import { Link } from 'gatsby'
import './footer.css'

export default () => (
  <footer>
    <Link to='./' className='footer-stw'>
      <img src={`stw-white.png`} alt="Scan the World" />
    </Link>
    <p>
      copyright, MyMiniFactory, 2019
    </p>
    <div className='footer-tools'>
      <span>dark theme </span>
      <span>translation </span>
    </div>
  </footer>
)
