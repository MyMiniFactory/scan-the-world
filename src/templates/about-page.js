import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import { FaChevronLeft } from 'react-icons/fa'
import './about-page.css';



const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title="About" />
      <Link to={'/'}>
        <FaChevronLeft className='return'/>
      </Link>
      <div className="banner" style={{backgroundImage: `url(${frontmatter.bannerUrl})`}}/>
      <div className="about-container">
        <div className="about-content">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.intro}</p>
        </div>
        <div className="team">
          <h2>the team</h2>
          <Team members={frontmatter.team}/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query AboutQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
      frontmatter {
        bannerUrl
        intro
        title
        team {
          position
          quote
          src
          title
        }
      }
    }
  }
`

export default AboutPage;
