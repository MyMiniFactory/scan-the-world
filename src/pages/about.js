import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import './about.css';


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
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
    file(sourceInstanceName: {eq: "data"}, name: {eq: "about"}) {
      childDataYaml {
        intro
        title
        bannerUrl
        team {
          position
          quote
          title
          src
        }
      }
    }
  }
`

export default AboutPage;
