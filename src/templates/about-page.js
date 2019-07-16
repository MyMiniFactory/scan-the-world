import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Team from "../components/team"
import { FaArrowRight } from 'react-icons/fa'
import './about-page.css';



const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title="About" />
      <Banner bannerUrl={frontmatter.bannerImage.childImageSharp.original.src}/>
      <div className="about-container">
        <div className="about-content">
          <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
          <div>
            <Link to={'/about/uses'}>
              Learn more about us <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="team">
          <h2>the team</h2>
          <Team members={frontmatter.team}/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query AboutQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
      frontmatter {
        bannerImage {
          childImageSharp {
            original {
              src
            }
          }
        }
        title
        team {
          position
          quote
          memberImage {
            childImageSharp {
              original {
                src
              }
            }
          }
          title
        }
      }
      html
    }
  }
`

export default AboutPage;
