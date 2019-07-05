import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaChevronLeft } from "react-icons/fa"
import "./contribute-page.css"

const ContributePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Contribute" />
      <Link to={'/'}>
        <FaChevronLeft className='return'/>
      </Link>
      <div className="banner" style={{backgroundImage: `url(${frontmatter.bannerUrl})`}}/>
      <div className="contribute-container">
        <div className="contribute-content">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.intro}</p>
        </div>
        <div className="contributions">
          { frontmatter.contributions.map((ctb, index) => {
            return (
              <a href={ctb.href} key={index}>
                <img title={ctb.title} src={ctb.src} alt={ctb.alt}/>
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
          bannerUrl
          intro
          title
          contributions {
            alt
            href
            src
            title
          }
        }
      }
  }
`

export default ContributePage;
