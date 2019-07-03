import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import Gallery from "react-photo-gallery"
import './home-page.css'

const onImageClick = (event, {photo}) => photo.href ? window.location.href = photo.href : null

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div className="intro">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.intro}</p>
      </div>
      <div className="container">
        <SearchContainer objects={data.allMyMiniFactoryObject.nodes} />
        <div className="gallery">
          <Gallery photos={frontmatter.trends} direction={`column`} margin={20} onClick={onImageClick}/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      frontmatter {
        bannerUrl
        intro
        title
        trends {
          height
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
