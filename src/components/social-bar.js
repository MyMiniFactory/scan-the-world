import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaInstagram, FaMedium } from "react-icons/fa"
import "./scss/social-bar.scss"

const SocialLink = ({ link }) => {
  let icon
  switch (link.name.toLowerCase()) {
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
  return (icon && <a href={link.url} target='_blank' rel="noopener noreferrer">{icon}</a>)
}

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  return (
    <div className="social-bar">
      <p className="social">social</p>
      {site.siteMetadata.socialLinks.map(link => <SocialLink key={link.name} link={link} />)}
    </div>
  )
}
