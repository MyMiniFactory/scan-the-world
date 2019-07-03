import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{maxWidth:`1000px`, margin:`0 auto`}}>
      <h1>404: NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>Click <Link to={'/'}>here</Link> to return to the home page.</p>
    </div>
  </Layout>
)

export default NotFoundPage
