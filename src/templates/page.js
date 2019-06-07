import './page.scss'

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const page = data.markdownRemark
    return (
        <Layout
          banner={page.frontmatter.banner_path}
          >
            <div className='page'>
                <h1 className="title" >{page.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        banner_path
        title
      }
    }
  }
`