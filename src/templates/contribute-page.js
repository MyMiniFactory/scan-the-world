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
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.intro}</p>
        </div>
        <div className="contributions">
          { frontmatter.contributions.map((ctb, index) => {
            return (
              <a href={ctb.href} key={index} target='_blank' rel="noopener noreferrer">
                <img title={ctb.title} src={ctb.contributionImage.childImageSharp.original.src} alt={ctb.alt}/>
              </a>
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
          title
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
            title
          }
        }
      }
  }
`

export default ContributePage;
