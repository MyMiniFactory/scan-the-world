import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Objects from '../components/Objects/Objects'
import Search from '../components/Search/Search'
import Header from '../components/header'
import RandomArt from '../components/randomArt'
import SocialBar from '../components/socialBar/socialBar'
import Img from 'gatsby-image'
import scan_the_world from '../images/scan_the_world.svg'
import earth from '../images/earth.svg'
import india from '../images/india.svg'
import './home-page.scss'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.data.allMyMiniFactoryObject.nodes,
      query: `query=&artist=&place=`,
      sortBy: ``,
      showingRandom: false,
    }
    this.onSearch = this.onSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onSearch(value, sortBy) {
    this.setState({
      objects: [],
      query: value,
      sortBy: sortBy,
      showingRandom: sortBy === 'random',
    });
  }

  handleClick() {
    this.setState({showingRandom: this.state.showingRandom})
  }

  render() {
    const { data } = this.props
    const { edges:stories } = data.stories
    const { frontmatter } = data.markdownRemark
    const content = this.state.showingRandom
      ? <RandomArt />
      : <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} childImageSharp={frontmatter.featuredImage.childImageSharp}/>
    return (
      <>
        <main className="home-container">
          <SEO title="Home" />
          <div className="intro">
            <img src={scan_the_world} alt="Scan the world" width="400px" style={{marginBottom:`20px`}}/>
            <p>{frontmatter.intro}</p>
          </div>
          <div className="home-content">
            <div className="search-wrap">
              <Header isHome={true} onSearch={this.onSearch}/>
              <a href={data.site.siteMetadata.indiaUrl} target='_blank' rel="noopener noreferrer">
                <img className="stw-icon" src={india} alt='india'/>Scan the World India
              </a>
              <Link to='/map'><img className="stw-icon" src={earth} alt='earth'/>Map view</Link>
              <Search sortBy={this.state.sortBy} onSearch={this.onSearch} />
            </div>
            <div className="search-container">
              {content}
            </div>
            <div className="masonry">
              <iframe title="introduction to scan the world" src="https://player.vimeo.com/video/347516450?color=ff9933&title=0&byline=0&portrait=0" width="640" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
              {frontmatter.trends &&
                frontmatter.trends.map((trend, index) => {
                  const { width, marginTop, float } = trend
                  const m = marginTop ? {marginTop: `${marginTop}px`} : null
                  const w = width ? {width: `${width}%`} : null
                  return (
                    <div key={index} style={{float, ...m, ...w}}>
                      <a href={trend.href !== ` ` ? trend.href : null}>
                        <Img className="masonry-image" fluid={trend.trendImage.childImageSharp.fluid} alt={trend.alt}/>
                        <p>{trend.title}</p>
                      </a>
                    </div>
                  )
                })
              }
              {
                stories.map((story, index) => {
                  const { frontmatter, fields, id } = story.node
                  const float = index%2 === 0 ? {float: `left`} : {float: `right`}
                  return (
                    <div key={id} style={{width: `70%`, marginTop: `50px`, ...float}}>
                      <Link to={fields.slug}>
                        <Img className="masonry-image" fluid={frontmatter.storyImage.childImageSharp.fluid} alt={frontmatter.title} />
                        <p>{frontmatter.title}</p>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>
        <SocialBar />
      </>
    )
  }
}

export const query = graphql `
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 230, maxHeight: 230) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro
        title
        trends {
          alt
          float
          href
          marginTop
          trendImage {
            childImageSharp {
              fluid(maxWidth: 460) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          width
        }
      }
    }
    stories: allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            storyImage {
              childImageSharp {
                fluid(maxWidth: 460, duotone: {highlight: "#404040", shadow: "#404040", opacity: 50}) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          fields {
            slug
          }
          id
        }
      }
    }
    allMyMiniFactoryObject {
      nodes {
        artist
        id
        place
        threedObject {
          designer {
            avatar_thumbnail_url
            name
            profile_url
          }
          images {
            thumbnail {
              url
            }
          }
          url
        }
        title
      }
    }
    site {
      siteMetadata {
        indiaUrl
      }
    }
  }
`

export default HomePage;
