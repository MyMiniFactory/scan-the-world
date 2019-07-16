import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Banner from '../components/banner'
import './uses-page.css'

const UsesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Banner url={'/about'} bannerUrl={frontmatter.bannerImage.childImageSharp.original.src}/>
      <div className="uses-container">
        {frontmatter.uses.map((use, index) => {
          if (index % 2 === 0) {
            return (
              <div className="use-item" key={index}>
                <img src={use.useImage.childImageSharp.original.src} alt={use.title}/>
                <div style={{paddingLeft:`30px`}}>
                  <h2>{use.title}</h2>
                  {use.intro.split('\n').map((pg) => (
                    <p>{pg}</p>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <div className="use-item" key={index}>
              <div style={{paddingRight:`30px`}}>
                <h2>{use.title}</h2>
                {use.intro.split('\n').map((pg) => (
                  <p>{pg}</p>
                ))}
              </div>
              <img src={use.useImage.childImageSharp.original.src} alt={use.title}/>
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
            original {
              src
            }
          }
        }
        uses {
          intro
          useImage {
            childImageSharp {
              original {
                src
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
