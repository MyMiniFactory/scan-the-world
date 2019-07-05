import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import './home-page.css'


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
        <div className="masonry">
          {
            frontmatter.trends.map((trend, index) => {
              const { width, marginTop, float } = trend
              const style = { width, marginTop, float }
              return (
                <a href={trend.href} key={index}>
                  <img src={trend.src} alt={trend.alt} style={style}/>
                </a>
              )
            })
          }
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
          alt
          float
          href
          marginTop
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
