import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import "./scss/learn-page.scss"

export default ({ data }) => {
  const { edges: tutorials } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Learn" />
      <Banner url={'/'} childImageSharp={data.banner.frontmatter.bannerImage.childImageSharp}/>
      <section className='tutorials-container'>
        <h1>tutorials</h1>
        <div className="tutorials">
          {tutorials &&
            tutorials.map(({ node: tutorial }) => (
              <div key={tutorial.id} className="tutorial-item">
                <Link to={tutorial.fields.slug}>
                  <Img fluid={tutorial.frontmatter.tutorialImage.childImageSharp.fluid} />
                </Link>
                <h2>{tutorial.frontmatter.title}</h2>
                <p>{tutorial.frontmatter.intro}</p>
              </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql `
  query tutorialsQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "tutorial-page"}}}) {
      edges {
        node {
          id
          frontmatter {
            intro
            title
            tutorialImage {
              childImageSharp {
                fluid(maxWidth: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    banner: markdownRemark(frontmatter: {templateKey: {eq: "learn-page"}}) {
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
