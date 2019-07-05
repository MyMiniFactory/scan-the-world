import React from 'react'
import { Link } from 'gatsby'
import './learnBar.css'

export default () => (
  <div className={"nav-learn"}>
    <Link to={'/learn/uses'}>Uses</Link>
    <Link>Tutorials</Link>
    <Link>Stories</Link>
  </div>
)
