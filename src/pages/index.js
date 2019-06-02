import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.scss';
import Objects from '../components/Objects/Objects';
import Search from '../components/Search/Search';

const ScanTheWorld = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <Search />
      <div className="scan-the-world">
        <div className="intro">
          <h1><b>scan</b> the <i>world</i></h1>
          <p>Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.</p>
        </div>
        <Objects />
      </div>
    </div>
  </Layout>
)

export default ScanTheWorld