import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import { FaChevronLeft } from 'react-icons/fa'
import './about-page.css';



const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Link to={'/'}>
      <FaChevronLeft className='return'/>
    </Link>
    <div className="banner" style={{backgroundImage: `url(${data.file.childDataYaml.bannerUrl})`}}/>
    <div className="about-container">
      <div className="about-content">
        <h1>{data.file.childDataYaml.title}</h1>
        <p>{data.file.childDataYaml.intro}</p>
      </div>
      <div className="team">
        <h2>the team</h2>
        <Team members={data.file.childDataYaml.team}/>
      </div>
    </div>
  </Layout>
    )

export const query = graphql `
  query AboutQuery {

  }
`

export default AboutPage;
