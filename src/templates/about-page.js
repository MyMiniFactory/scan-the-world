import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Team from "../components/team"
import { FaArrowRight } from 'react-icons/fa'
import config from '../config'
import './about-page.css'



class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      statistic: {},
    }
  }

  componentDidMount() {
    fetch(config.statistic)
    .then(res => res.json())
    .then(statistic => this.setState({
      statistic,
    }))
  }

  render () {
    const { data, statistic } = this.state
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <SEO title="About" />
        <Banner bannerUrl={frontmatter.bannerImage.childImageSharp.original.src}/>
        <div className="about-container">
          <div className="about-content">
            <h3>Project Start Date - 28th June 2014</h3>
            <div className="about-statistic">
              <h3>Objects: {statistic.objects}</h3>
              <h3 style={{margin:`0 50px 0 50px`}}>Artists: {statistic.artists}</h3>
              <h3>Places: {statistic.places}</h3>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            <Link to={'/about/uses'}>
              Learn more about us <FaArrowRight />
            </Link>
          </div>
          <div className="team">
            <h2>the team</h2>
            <Team members={frontmatter.team}/>
          </div>
        </div>
      </Layout>
    )
  }
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
          mail
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
