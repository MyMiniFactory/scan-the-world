import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Team from "../components/team"
import { FaArrowRight } from 'react-icons/fa'
import config from '../config'
import './about-page.scss'



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
        <Banner childImageSharp={frontmatter.bannerImage.childImageSharp}/>
        <div className="about-container">
          <div className="about-content">
            <h2>Project Start Date - 28th June 2014</h2>
            <div className="about-statistic">
              <h2>Objects: {statistic.objects}</h2>
              <h2>Artists: {statistic.artists}</h2>
              <h2>Places: {statistic.places}</h2>
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
            fluid(maxWidth: 2000, maxHeight: 250, quality: 100, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        team {
          position
          mail
          memberImage {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
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
