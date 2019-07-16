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
        <h1>tutorials</h1>
        <div className="tutorials">
          {tutorials &&
            tutorials.map(({ node: tutorial }) => (
              <div key={tutorial.id} className="tutorial-item">
                <Link to={tutorial.fields.slug}>
                  <img src={tutorial.frontmatter.tutorialImage.childImageSharp.original.src} alt=""/>
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
