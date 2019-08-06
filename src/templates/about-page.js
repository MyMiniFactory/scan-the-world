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
    console.log(this.state)
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
            <div style={{display: `flex`, justifyContent: `space-between`}}>
              <span>objects: {statistic.objects}</span>
              <span>artists: {statistic.artists}</span>
              <span>places: {statistic.places}</span>
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
