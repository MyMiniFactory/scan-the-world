import React from 'react'
import { FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa'
import config from '../../config'
import './socialBar.scss'

const Links = ({ links }) => {
  return links.map((l) => {
    let icon
    switch (l.name.toLowerCase()) {
    case 'twitter':
      icon = <FaTwitter />
      break
    case 'medium':
      icon = <FaMedium />
      break
    case 'instagram':
      icon = <FaInstagram />
      break
    default:
      break
    }
    return (icon && <a key={l.name} href={l.url}>{icon}</a>)
  })
}

class SocialBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        links: props.links ? props.links : config.social_links,
    }
  }

  render() {
    return (
      <div className="social-bar">
        <p className="social">social</p>
        <Links links={this.state.links} />
      </div>
    )
  }
}

export default SocialBar;
