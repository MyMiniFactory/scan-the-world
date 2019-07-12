import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import './home-page.css'
import SocialBar from '../components/SocialBar/SocialBar';
import logo from '../images/stw_logo.svg'
import scan_the_world from '../images/scan_the_world.svg'


const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <main>
        <SEO title="Home" />
        <div className="intro">
          <img src={scan_the_world} alt="Scan the world" width="400px" style={{marginBottom:`20px`}}/>
          <p>{frontmatter.intro}</p>
          {console.log(frontmatter.featuredImage.childImageSharp.original.src)}
        </div>
        <div className="home-container">
          <SearchContainer objects={data.allMyMiniFactoryObject.nodes} url={frontmatter.featuredImage.childImageSharp.original.src}>
            <img src={logo} alt="stw" height='30' style={{marginBottom:`20px`}}/>
            <nav className="nav-link">
              <Link to='/about'>About</Link>
              <Link to='/community/stories'>Community</Link>
              <Link to='/learn' >Learn</Link>
              <a href='https://cdn.myminifactory.com/static/STW_For_Galleries_Archives_and_Museum.pdf' target='_blank' rel="noopener noreferrer">Museums</a>
              <Link to='/contribute'>Contribute</Link>
            </nav>
          </SearchContainer>
          <div className="masonry">
            <iframe title="introduction to scan the world" src="https://player.vimeo.com/video/347516450?color=ff9933&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
            {
              frontmatter.trends.map((trend, index) => {
                const { width, marginTop, float } = trend
                const m = marginTop ? {marginTop: `${marginTop}px`} : null
                const w = width ? {width: `${width}px`} : null
                return (
                  <div key={index} style={{float, ...m, ...w}}>
                    <a href={trend.href !== ` ` ? trend.href : null}>
                      <img src={trend.trendImage.childImageSharp.original.src} alt={trend.alt}/>
                    </a>
                    <p>{trend.title}</p>
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

export const query = graphql `
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      frontmatter {
        featuredImage {
          childImageSharp {
            original {
              src
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
              original {
                src
              }
            }
          }
          title
          width
        }
      }
    }
    allMyMiniFactoryObject {
      nodes {
        images {
          thumbnail {
            url
          }
        }
        name
        url
      }
    }
  }
`

export default HomePage;
