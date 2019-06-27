import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import './index.css';


const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container objects={data.allMyMiniFactoryObject.nodes}>
      <div className="intro" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
    </Container>
  </Layout>
)

export const query = graphql `
  query IndexQuery {
    markdownRemark(frontmatter: {path: {eq: "index"}}) {
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

export default HomePage;
