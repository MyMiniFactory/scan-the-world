import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import logo from "../images/stw_logo.gif"
import logo_static from "../images/stw_logo_static.gif"
import logo_in from "../images/stw_logo_in.gif"
import logo_out from "../images/stw_logo_out.gif"
import "./scss/header.scss"

const Navbar = ({ className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            museumsUrl
          }
        }
      }
    `
  )
  return (
    <nav className={className}>
      <Link to='/about'>About</Link>
      <Link to='/upload-a-scan'>Upload a scan</Link>
      <Link to='/learn/tutorials/upload-pictures' >How to scan</Link>
      <Link to='/community/stories'>Community Stories</Link>
      <a href={site.siteMetadata.museumsUrl} target='_blank' rel="noopener noreferrer">Museums</a>
    </nav>
  )
}

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
        <header className="stw-header">
          <img className="stw-logo" src={logo} alt="stw" onClick={() => this.props.onSearch('query=&artist=&place=', '')} style={{cursor:`pointer`}}/>
          <Navbar className="stw-nav-home"/>
        </header>
      )
    }
    return (
      <header className="stw-header">
        <Link to='/'>
          <picture style={{display:`flex`}}>
            <source media="(min-width: 800px)" srcSet={this.state.src} style={{height:0}}/>
            <img className="stw-logo" src={logo} onMouseEnter={this.handleIn} onMouseLeave={this.handleOut} alt="Scan the world"/>
          </picture>
        </Link>
        <Navbar />
      </header>
    )
  }
}

export default Header
