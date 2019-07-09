import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import logo from "../images/stw_logo.svg"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: null,
      scroll: window.scrollY,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const scroll = window.scrollY;
    if (scroll) {
      scroll > this.state.scroll ? this.setState({status: `collapse`}) : this.setState({status: `open`});
      this.setState({scroll: scroll});
    }
  }

  render() {
    return (
      <header className={this.state.status}>
        <img src={logo} alt="Scan the world" height='30'/>
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
