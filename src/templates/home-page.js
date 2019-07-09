import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import SearchContainer from "../components/searchContainer"
import './home-page.css'
import logo from '../images/stw_logo.svg'
import images from '../test/image-set'


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
        <SearchContainer objects={data.allMyMiniFactoryObject.nodes}>
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
            // frontmatter.trends.map((trend, index) => {
            //   const { width, marginTop, float } = trend
            //   return (
            //    <div key={index} style={{marginTop}}>
            //       <a href={trend.href}>
            //       <img src={trend.src} alt={trend.alt} style={{width, float}}/>
            //     </a>
            //     <p className='desc'>{trend.title}</p>
            //   </div>
            //   )
            // })
            images.map((pic, index) => {
              const { width, marginTop, float } = pic
              return (
                <div key={index} style={{marginTop}}>
                  <a href={pic.href}>
                    <img src={pic.src} alt={'trend'} style={{width, float}}/>
                  </a>
                  <p className='desc'>{pic.title}</p>
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
