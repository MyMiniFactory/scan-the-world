import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import Gallery from "react-photo-gallery"
import './index.css'

const onImageClick = (event, {photo}) => photo.href ? window.location.href = photo.href : null

const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
      <h1>{data.file.childDataYaml.title}</h1>
      <p>{data.file.childDataYaml.intro}</p>
    </div>
    <div className="container">
      <SearchContainer objects={data.allMyMiniFactoryObject.nodes} />
      <div className="gallery">
        <Gallery photos={data.file.childDataYaml.trends} direction={`column`} margin={20} onClick={onImageClick}/>
      </div>
    </div>
  </Layout>
)

export const query = graphql `
  query IndexQuery {
    file(sourceInstanceName: {eq: "data"}, name: {eq: "home"}) {
      childDataYaml {
        intro
        title
        trends {
          alt
          height
          href
          src
          title
          width
        }
      }
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
