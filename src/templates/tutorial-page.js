import React from "react"
import { graphql, Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa'
import Layout from "../components/layout"
import './tutorial-page.css'

const StoryPage = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <div className="tutorial-container">
        <div dangerouslySetInnerHTML={{__html: html}} />
        <Link to={'/learn'}>
          <FaArrowLeft /> back to tutorials.
        </Link>
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
