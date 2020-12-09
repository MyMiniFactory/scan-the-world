import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./scss/contribute-page.scss"

const ContributePage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Upload a scan" />
      <Banner url={'/'} childImageSharp={nodes[0].frontmatter.bannerImage.childImageSharp}/>
      <div className="contribute-container">
        <div className="contribute-content">
          <p>{nodes[0].frontmatter.intro}</p>
        </div>
        <div className="contributions">
          { nodes.map((ctb, index) => {
            return (
              <div key={index} className="contribution-item">
                <a href={ctb.frontmatter.contributions[0].href} target='_blank' rel="noopener noreferrer">
                  <Img className="contribute-image" fluid={ctb.frontmatter.contributions[0].contributionImage.childImageSharp.fluid} alt={ctb.alt}/>
                </a>
                <h2>{ctb.frontmatter.contributions[0].title}</h2>
                <div dangerouslySetInnerHTML={{__html: ctb.html}}/>
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
    allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {eq: "upload-a-scan-page"}}
      }
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
    ){
      nodes {
        html
        frontmatter {
          bannerImage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
  }
`

export default ContributePage;