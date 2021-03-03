import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import NewsletterSubscribe from "../components/newsletter-subscribe"
import Search from "../components/search"
import Objects from "../components/objects"
import RandomArt from "../components/random-art"
import SocialBar from "../components/social-bar"
import scan_the_world from "../images/scan_the_world.svg"
import india from "../images/india.svg"
import china from "../images/china.svg"
import "./scss/home-page.scss"

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
    this.setState({ showingRandom: this.state.showingRandom })
  }

  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    const content = this.state.showingRandom
      ? <RandomArt />
      : <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} childImageSharp={frontmatter.featuredImage.childImageSharp} />
    return (
      <>
        <main className="home-container">
          <SEO title="Home" />
          <div className="home-content">
            <div className="search-wrap">
              <Header isHome={true} onSearch={this.onSearch} />
              <a href={data.site.siteMetadata.indiaUrl} target='_blank' rel="noopener noreferrer">
                <img className="stw-icon" src={india} alt='india' />Scan the World India
              </a>
              <a href={data.site.siteMetadata.chinaUrl} target='_blank' rel="noopener noreferrer">
                <img className="stw-icon" src={china} alt='india' />Scan the World China
              </a>
              <NewsletterSubscribe/>
              <Search sortBy={this.state.sortBy} onSearch={this.onSearch} />
            </div>
            <div className="search-container">
              <div className="intro">
                <img src={scan_the_world} alt="Scan the world" width="400px" style={{ marginBottom: `20px` }} />
                <p>{frontmatter.intro}</p>
              </div>
              {content}
            </div>
          </div>
        </main>
        <SocialBar />
      </>
    )
  }
}

export const query = graphql`
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
        chinaUrl
      }
    }
  }
`

export default HomePage;
