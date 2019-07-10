import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import './home-page.css'
import logo from '../images/stw_logo.svg'


const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <main>
      <SEO title="Home" />
      <div className="intro">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.intro}</p>
      </div>
      <div className="container">
        <SearchContainer objects={data.allMyMiniFactoryObject.nodes} url={frontmatter.bannerUrl}>
          <img src={logo} alt="Scan the world" height='30' style={{marginBottom:`20px`}}/>
          <nav className="nav-link">
            <Link to='/about'>About</Link>
            <Link to='/contribute'>Contribute</Link>
            <Link to='/learn' >Learn</Link>
            <Link to='/community/stories'>Community</Link>
            <a href='https://cdn.myminifactory.com/static/STW_For_Galleries_Archives_and_Museum.pdf' target='_blank' rel="noopener noreferrer">Museums</a>
          </nav>
        </SearchContainer>
        <div className="masonry">
          {
            frontmatter.trends.map((trend, index) => {
              const { width, marginTop, float } = trend
              const margin = marginTop ? {marginTop: `${marginTop}px`} : null
              const style = width ? {width: `${width}px`, float} : {float}
              return (
                <div key={index} style={margin}>
                  <a href={trend.href}>
                    <img src={trend.src} alt={trend.alt} style={style}/>
                  </a>
                  <p className='desc'>{trend.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export const query = graphql `
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      frontmatter {
        bannerUrl
        intro
        title
        trends {
          alt
          float
          href
          marginTop
          src
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
