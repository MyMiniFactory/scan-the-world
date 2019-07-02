import React from 'react'
import { Link } from 'gatsby'
import logo from './logo.png'
import './footer.css'

const MMY_URL = `https://www.myminifactory.com`

export default () => (
  <footer>
    <a href={MMY_URL}><img src={logo} alt="Logo" height='30'/></a>
    <p>
      copyright, MyMiniFactory, 2019
    </p>
    <div className='footer-tools'>
      <span>dark theme </span>
      <span>translation </span>
    </div>
  </footer>
)
