import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import './about.css';


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="banner" style={{backgroundImage: `url(${data.markdownRemark.frontmatter.banner})`}}/>
    <div className="about-container">
      <div className="about-content">
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
      </div>
      <div className="team">
        <h2>the team</h2>
        <Team />
      </div>
    </div>
  </Layout>
    )

export const query = graphql `
  query AboutQuery {
    markdownRemark(frontmatter: {path: {eq: "about"}}) {
      html
      frontmatter {
        banner
      }
    }
  }
`

export default AboutPage;
