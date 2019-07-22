import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import './home-page.scss'
import SocialBar from '../components/SocialBar/SocialBar';
import scan_the_world from '../images/scan_the_world.svg'


const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <main style={{marginTop:`40px`}}>
        <SEO title="Home" />
        <div className="home-container">
          <div style={{maxWidth:`1030px`}}>
            <div className="intro">
              <img src={scan_the_world} alt="Scan the world" width="400px" style={{marginBottom:`20px`}}/>
              <p>{frontmatter.intro}</p>
            </div>
            <SearchContainer objects={data.allMyMiniFactoryObject.nodes} url={frontmatter.featuredImage.childImageSharp.original.src} />
          </div>
          <div className="masonry">
            <iframe title="introduction to scan the world" src="https://player.vimeo.com/video/347516450?color=ff9933&title=0&byline=0&portrait=0" width="640" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
            {
              frontmatter.trends.map((trend, index) => {
                const { width, marginTop, float } = trend
                const m = marginTop ? {marginTop: `${marginTop}px`} : null
                const w = width ? {width: `${width}%`} : null
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
        designer {
          avatar_thumbnail_url
          name
          profile_url
        }
      }
    }
  }
`

export default HomePage;
