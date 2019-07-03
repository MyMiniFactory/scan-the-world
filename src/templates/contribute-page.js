import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "react-photo-gallery"
import { FaChevronLeft } from "react-icons/fa"
import "./contribute-page.css"

const onImageClick = (event, {photo}) => photo.href ? window.location.href = photo.href : null

const ContributePage = ({ data }) => (
  <Layout>
    <SEO title="Contribute" />
    <Link to={'/'}>
      <FaChevronLeft className='return'/>
    </Link>
    <div className="banner" style={{backgroundImage: `url(${data.file.childDataYaml.bannerUrl})`}}/>
    <div className="contribute-container">
      <div className="contribute-content">
        <h1>{data.file.childDataYaml.title}</h1>
        <p>{data.file.childDataYaml.intro}</p>
        <Gallery photos={data.file.childDataYaml.contributions} margin={20} onClick={onImageClick} />
      </div>
    </div>
  </Layout>
)

export const query = graphql `
  query ContributeQuery {

  }
`

export default ContributePage;
