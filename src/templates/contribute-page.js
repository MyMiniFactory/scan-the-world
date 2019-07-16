import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import "./contribute-page.css"

const ContributePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Contribute" />
      <Banner url={'/'} bannerUrl={frontmatter.bannerImage.childImageSharp.original.src}/>
      <div className="contribute-container">
        <div className="contribute-content">
          <p>{frontmatter.intro}</p>
        </div>
        <div className="contributions">
          { frontmatter.contributions.map((ctb, index) => {
            return (
              <div className="contribution-item">
                <a href={ctb.href} key={index} target='_blank' rel="noopener noreferrer">
                  <img src={ctb.contributionImage.childImageSharp.original.src} alt={ctb.alt}/>
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
              original {
                src
              }
            }
          }
          intro
          contributions {
            alt
            href
            contributionImage {
              childImageSharp {
                original {
                  src
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
