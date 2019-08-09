import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import StoryRoll from '../components/storyRoll'
import Banner from '../components/banner'
import './stories-page.scss'

export default ({ data }) => (
    <Layout>
      <Banner url={'/'} bannerUrl={data.banner.frontmatter.bannerImage.childImageSharp.original.src}/>
      <section className='stories-container'>
        <h1>Latest Stories</h1>
        <StoryRoll edges={data.allMarkdownRemark.edges} />
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
                original {
                  src
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
            original {
              src
            }
          }
        }
      }
    }
  }
`
