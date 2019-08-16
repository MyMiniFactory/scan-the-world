import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import "./scss/stories-page.scss"

export default ({ data }) => (
    <Layout>
      <SEO title="Stories" />
      <Banner url={'/'} childImageSharp={data.banner.frontmatter.bannerImage.childImageSharp}/>
      <section className='stories-container'>
        <h1>Latest Stories</h1>
        <div className="stories">
          {data.allMarkdownRemark.edges &&
            data.allMarkdownRemark.edges.map(({ node: story }) => (
              <article key={story.id} className="story-item">
                <Link className="story-header" to={story.fields.slug}>
                  <Img className="story-image" fluid={story.frontmatter.storyImage.childImageSharp.fluid} />
                  <h1>{story.frontmatter.title}</h1>
                </Link>
                <p>
                  {story.excerpt}
                </p>
                <div className="story-footer">
                  <p>{story.frontmatter.date}</p>
                  <Link to={story.fields.slug}>
                    Keep Reading →
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
    </Layout>
)

export const query = graphql `
  query storiesQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "story-page"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            storyImage {
              childImageSharp {
                fluid(maxWidth: 380, duotone: {highlight: "#404040", shadow: "#404040", opacity: 50}) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    banner: markdownRemark(frontmatter: {templateKey: {eq: "stories-page"}}) {
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
