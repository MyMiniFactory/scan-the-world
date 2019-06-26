import React from "react"
import { Link } from "gatsby"
import "./header.css"

const MMY_URL = `https://www.myminifactory.com`

export default () => (
  <header>
    <div>
      <a href={MMY_URL}><img src={`logo.png`} alt="Logo"/></a>
      <Link to={`/`}>
        <img src={`stw-black.png`} alt="Scan the World" />
      </Link>
    </div>
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/contribute'>Contribute</Link>
      <Link to='/learn' >Learn</Link>
      <Link to='/community'>Community</Link>
      <Link to='/museums'>Museums</Link>
    </nav>
  </header>
)
