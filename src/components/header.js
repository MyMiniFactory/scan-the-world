import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import logo from "../images/stw_logo.svg"
import logo_static from "../images/stw_logo_static.gif"
import logo_in from "../images/stw_logo_in.gif"
import logo_out from "../images/stw_logo_out.gif"

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isHome: props.isHome,
      isHovering: false,
      src: logo_static,
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    if (!this.state.isHovering) {
      this.setState({
        isHovering: true,
        src: logo_in,
      })
    }
    else {
      this.setState({
        isHovering: false,
        src: logo_out,
      })
    }
  }

  render() {
    const isHome = this.state.isHome;
    if (isHome) {
      return (
        <>
          <img src={logo} alt="stw" style={{marginBottom:`20px`, height:`30px`}} />
          <nav className="nav-link">
            <Link to='/about'>About</Link>
            <Link to='/community/stories'>Community</Link>
            <Link to='/learn' >Learn</Link>
            <a href='https://cdn.myminifactory.com/static/STW_For_Galleries_Archives_and_Museum.pdf' target='_blank' rel="noopener noreferrer">Museums</a>
            <Link to='/contribute'>Contribute</Link>
          </nav>
        </>
      )
    }
    return (
      <header className="stw-header">
        <Link to='/'>
          <img className="stw-logo"
            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
            src={this.state.src} alt="Scan the world"/>
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/contribute'>Contribute</Link>
          <Link to='/learn' >Learn</Link>
          <Link to='/community/stories'>Community</Link>
          <a href='https://cdn.myminifactory.com/static/STW_For_Galleries_Archives_and_Museum.pdf' target='_blank' rel="noopener noreferrer">Museums</a>
        </nav>
      </header>
    )
  }
}

export default Header
