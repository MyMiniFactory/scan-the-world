import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Banner from '../components/banner'
import './uses-page.scss'

const UsesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Banner url={'/about'} childImageSharp={frontmatter.bannerImage.childImageSharp}/>
      <div className="uses-container">
        {frontmatter.uses.map((use, index) => {
          if (index % 2 === 0) {
            return (
              <div className="use-item item-even" key={index}>
                <Img className="use-image" fixed={use.useImage.childImageSharp.fixed} alt={use.title}/>
                <div>
                  <h2>{use.title}</h2>
                  {use.intro.split('\n').map((pg) => (
                    <p>{pg}</p>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <div className="use-item item-odd" key={index}>
              <div>
                <h2>{use.title}</h2>
                {use.intro.split('\n').map((pg) => (
                  <p>{pg}</p>
                ))}
              </div>
              <Img className="use-image" fixed={use.useImage.childImageSharp.fixed} alt={use.title}/>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql `
  query UsesQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "uses-page"}}) {
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        uses {
          intro
          useImage {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
        }
      }
    }
  }
`

export default UsesPage
