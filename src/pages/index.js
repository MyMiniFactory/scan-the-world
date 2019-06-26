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
      <div className="intro">
        <h1>scan the world</h1>
        <p>Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.</p>
      </div>
    </Container>
  </Layout>
)

export const query = graphql `
  query MyQuery {
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
