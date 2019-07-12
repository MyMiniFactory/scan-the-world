import React from "react"
import { graphql, Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa'
import Layout from "../components/layout"
import './story-page.css'

const StoryPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <div className="story-container">
        <h2>{frontmatter.title}</h2>
        <p>{frontmatter.date}</p>
        <div className="story-content" dangerouslySetInnerHTML={{__html: html}} />
        <Link to={'/community/stories'}>
          <FaArrowLeft /> back to stories.
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
    }
  }
`

export default StoryPage
