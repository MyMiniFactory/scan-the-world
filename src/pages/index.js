import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.scss';
import Objects from '../components/Objects/Objects';
import Search from '../components/Search/Search';


class ScanTheWorld extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
    this.state.query = '';
    this.state.sortBy = 'date';
    this.onSearch = this.onSearch.bind(this);
  }
  
  onSearch(query, sortBy) {
    console.log(sortBy)
    this.setState({
      query: query,
      sortBy: sortBy
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="content">
          <Search
            onSearch={this.onSearch}
          />
          <div className="scan-the-world">
            <div className="intro">
              <h1><b>scan</b> the <i>world</i></h1>
              <p>Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.</p>
            </div>
            <Objects
              query={this.state.query}
              sortBy={this.state.sortBy}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ScanTheWorld;