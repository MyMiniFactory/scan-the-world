import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import Layout from "../components/layout"
// import Banner from "../components/banner"
import "./scss/faq-page.scss"

const FaqPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Faq" />
      {/* <Banner url={'/about'} childImageSharp={frontmatter.bannerImage.childImageSharp}/> */}
      <div className="faq-container">
        <div className="use-item" key={0}>
          <div>
            <h2>How do I scan?</h2>
              <p>
              Our community scans are usually realised via photogrammetry. We have a section on our website where you can read more about it and learn how to scan. We have also released a video tutorial that explains how to scan and how the uploading process works&nbsp;
                <Link to='/learn/tutorials/upload-pictures/'>
                  here
                </Link>.
              </p>
          </div>
        </div>
        <div className="use-item" key={1}>
          <div>
            <h2>I don’t have a professional camera, can I still scan?</h2>
              <p>
                Of course yes! 
                You can use a smartphone camera as long as it takes good quality pictures. To give you an example, an iphone 7 camera works perfectly!
              </p>
          </div>
        </div>
        <div className="use-item" key={2}>
          <div>
            <h2>How do I create a 3D model?</h2>
              <p>
                Our team will recreate the 3D model from the pictures you send to us. You do not need to create a 3D model of the sculpture, you only need to follow our tutorial on how to scan and patiently wait for the amazing result!
                If you want to process the images yourself there are plenty of ‘photogrammetry’ programs available:
                
                Agisoft Metashape ($150 for a standalone license)

                Reality Capture $$$
              </p>
          </div>
        </div>
        <div className="use-item" key={3}>
          <div>
            <h2>How can I use the models that I download from Scan The World? Can I use them for commercial purposes?</h2>
              <p>
                While all of our models are freely available and downloadable, some of them are not allowed to be used for commercial purposes. 
                Many of our models are available as CC0, this means that they can be used as you please (including commercial purposes). 
                The key is to check the license before downloading and using the models so that you can be sure how those models can be used.
                We are working with the artists who share their IP with the community. Please do not use these for commercial use.
              </p>
          </div>
        </div>
        <div className="use-item" key={4}>
          <div>
            <h2>After sending the pictures of the sculpture, how long does it take for the model to be processed?</h2>
              <p>
                While it definitely depends on the amount of models we are working on at the moment, it usually takes around two weeks.
              </p>
          </div>
        </div>
        <div className="use-item" key={5}>
          <div>
            <h2>Do I need permission to scan objects in museums using photogrammetry?</h2>
              <p>
                When working with artworks whose artist has been dead for at least the past 7o years, the work is in the public domain. Therefore, asking for authorization in order to take pictures is not required. 
                All considered, every museum has a different policy and this also changes depending on the Country. It is important to scan keeping in mind the general museum’s rules and respecting the artworks.
              </p>
          </div>
        </div>
        <div className="use-item" key={6}>
          <div>
            <h2>I am able to create 3D models. I would like to upload one directly to Scan The World, can I do it?</h2>
              <p>
                Yes you can. You can set up a Scan The World profile on My Mini Factory and follow the instructions to upload your 3D object. 
                We will then review the object, check the printability and approve it.
                Keep in mind that when you upload an object on STW, it is important to write as much information as possible in order to keep our open source museum up to date. 
                Because MyMiniFactory is a curated platform, we require the resulting 3D models to be printable. If you are unable to do this, we have the resources to clean your scan for free - simply upload them to the website and we’ll take it from there!
              </p>
          </div>
        </div>
        <div className="use-item" key={7}>
          <div>
            <h2>I am able to create 3D models. I would like to upload one directly to Scan The World, can I do it?</h2>
              <p>
                As a non-profit, community based initiative, we focus a lot on our mission to answer this question.  We believe in culture, in art, in knowledge, and we believe that all of this must be accessible from everywhere to everyone. Our mission keeps community in our focus, believing their stories are vastly more important than the narratives written by institutions. We want to raise awareness of decolonisation by building object-based narratives fuelled by the people these artefacts belong to.
                The Internet allows us to work together with our community in a space which is not physical and helps us fulfill our mission. Accessibility and preservation of precious cultural artifacts from all over the world are two of the many aspects of our work and two of the reasons that brought us into creating this space, this open access museum. Read more about us&nbsp;
                <Link to='/about/uses'>
                  here
                </Link>.
              </p>
          </div>
        </div>
        {/* For if we use the markdown file, 
        the reason for not using it is links do not work, nor the character ":" */}
        {/* {frontmatter.uses.map((use, index) => {
          return (
            <div className="use-item" key={index+1}>
              <div>
                <h2>{use.title}</h2>
                {use.intro.split('\n').map((pg) => (
                  <p>{pg}</p>
                ))}
              </div>
            </div>
          )
        })} */}
      </div>
    </Layout>
  )
}

export const query = graphql `
  query FaqQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "faq-page"}}) {
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        uses {
          intro
          title
        }
      }
    }
  }
`

export default FaqPage
