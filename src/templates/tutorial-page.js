import React from "react"
import { graphql, Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./scss/tutorial-page.scss"

const StoryPage = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Tutorial" />
      <div className="tutorial-container">
        {/* <Link to={'/learn'}>
          <p><FaArrowLeft /> back to tutorials.</p>
        </Link> */}
        <div className="tutorialHTML" dangerouslySetInnerHTML={{__html: html}} />
        {/* <Link to={'/learn'}>
          <FaArrowLeft /> back to tutorials.
        </Link> */}
      </div>
    </Layout>
  )
}

export const query = graphql `
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
    }
  }
`

export default StoryPage
