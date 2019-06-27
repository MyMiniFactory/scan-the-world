import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.css';


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div class="about-container">
      <div></div>
      <div className="about-content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
      <div className="team">
        <h2>the team</h2>
      </div>
    </div>
    </Layout>
    )

export const query = graphql `
  query AboutQuery {
    markdownRemark(frontmatter: {path: {eq: "about"}}) {
      html
    }
    allMyMiniFactoryObject {
      nodes {
        images {
          thumbnail {
            url
          }
        }
        name
        url
      }
    }
  }
`

export default AboutPage;
