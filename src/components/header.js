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
      isTransiting: false,
      src: logo_static,
    }
    this.handleIn = this.handleIn.bind(this)
    this.handleOut = this.handleOut.bind(this)
  }

  handleIn() {
    const state = {isHovering: true}
    if (!this.state.isTransiting) {
      state.src = logo_in
      state.isTransiting = true
      setTimeout(() => {
        this.setState({isTransiting: false})
        if (!this.state.isHovering) {
          this.handleOut()
        }
      }, 800)
    }
    this.setState(state)
  }

  handleOut() {
    const state = {isHovering: false}
    if (!this.state.isTransiting) {
      state['src'] = logo_out
      state.isTransiting = true
      setTimeout(() => {
        this.setState({isTransiting: false})
        if (this.state.isHovering) {
          this.handleIn()
        }
      }, 800)
    }
    this.setState(state)
  }

  render() {
    const isHome = this.state.isHome;
    if (isHome) {
      return (
        <>
          <img src={logo} alt="stw" onClick={() => this.props.onSearch('', 'popularity')} style={{marginBottom:`20px`, height:`30px`}}/>
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
            onMouseEnter={this.handleIn} onMouseLeave={this.handleOut}
            src={this.state.src} alt="Scan the world"/>
          <img className="stw-logo-mobile" src={logo} alt="Scan the World mobile"/>
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
