import React from 'react'
import { graphql, Link } from "gatsby"
import { FaChevronLeft } from 'react-icons/fa'
import Layout from '../components/layout'
import LearnBar from '../components/learnBar'
import './uses-page.css'

const UsesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Link to={'/'}>
        <FaChevronLeft className='return'/>
      </Link>
      <div className="banner" style={{backgroundImage: `url(${frontmatter.bannerUrl})`}}/>
      <div className="uses-container">
        <LearnBar />
        {frontmatter.uses.map((use, index) => {
          return (
            <div className="use-item" key={index}>
              <img src={use.src} alt={use.title}/>
              <div>
                <h2>{use.title}</h2>
                <p>{use.intro}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql `
  query UsesQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "uses-page"}}) {
      frontmatter {
        bannerUrl
        uses {
          intro
          src
          title
        }
      }
    }
  }
`

export default UsesPage
