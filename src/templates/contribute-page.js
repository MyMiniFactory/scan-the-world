import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./contribute-page.scss"

const ContributePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Contribute" />
      <Banner url={'/'} childImageSharp={frontmatter.bannerImage.childImageSharp}/>
      <div className="contribute-container">
        <div className="contribute-content">
          <p>{frontmatter.intro}</p>
        </div>
        <div className="contributions">
          { frontmatter.contributions.map((ctb, index) => {
            return (
              <div key={index} className="contribution-item">
                <a href={ctb.href} target='_blank' rel="noopener noreferrer">
                  <Img className="contribute-image" fluid={ctb.contributionImage.childImageSharp.fluid} alt={ctb.alt}/>
                </a>
                <h2>{ctb.title}</h2>
                <p>{ctb.intro}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query ContributeQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "contribute-page"}}) {
        frontmatter {
          bannerImage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          intro
          contributions {
            alt
            href
            contributionImage {
              childImageSharp {
                fluid(maxWidth: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            intro
            title
          }
        }
      }
  }
`

export default ContributePage;
