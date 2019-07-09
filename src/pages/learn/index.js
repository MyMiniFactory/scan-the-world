import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Banner from '../../components/banner'
import './tutorials.css'

export default ({ data }) => {
  const { edges: tutorials } = data.allMarkdownRemark
  return (
    <Layout>
      <Banner url={'/'} bannerUrl={'/assets/banner_learn.jpg'}/>
      <section className='tutorials-container'>
        <h1>Tutorials</h1>
        <div className="tutorials">
          {tutorials &&
            tutorials.map(({ node: tutorial }) => (
              <Link to={tutorial.fields.slug}>
                <div key={tutorial.id} className="tutorial-item" style={{backgroundImage:`url(${tutorial.frontmatter.src})`}}>
                  <p>{tutorial.frontmatter.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql `
  query tutorialsQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "tutorial-page"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            src
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
