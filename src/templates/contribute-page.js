import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "react-photo-gallery"
import { FaChevronLeft } from "react-icons/fa"
import "./contribute-page.css"

const onImageClick = (event, {photo}) => photo.href ? window.location.href = photo.href : null

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
          <Gallery photos={frontmatter.contributions} margin={20} onClick={onImageClick} />
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
            height
            href
            src
            title
            width
          }
        }
      }
  }
`

export default ContributePage;
