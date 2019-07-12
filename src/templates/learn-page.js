import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import './learn-page.css'

export default ({ data }) => {
  const { edges: tutorials } = data.allMarkdownRemark
  return (
    <Layout>
      <Banner url={'/'} bannerUrl={data.banner.frontmatter.bannerImage.childImageSharp.original.src}/>
      <section className='tutorials-container'>
        <h1>Learn</h1>
        <div className="tutorials">
          {tutorials &&
            tutorials.map(({ node: tutorial }) => (
              <Link to={tutorial.fields.slug}>
                <div key={tutorial.id} className="tutorial-item" style={{backgroundImage:`url(${tutorial.frontmatter.tutorialImage.childImageSharp.original.src})`}}>
                  <p>{tutorial.frontmatter.title}</p>
                </div>
              </Link>
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
            title
            tutorialImage {
              childImageSharp {
                original {
                  src
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
            original {
              src
            }
          }
        }
      }
    }
  }
`
