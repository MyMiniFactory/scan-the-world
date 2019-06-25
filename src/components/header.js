import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import Logo from "./logo"
import "./header.css"

const MMY_URL = `https://www.myminifactory.com`

const Header = ({data}) => (
  <header>
    <a href={MMY_URL}><img src={`logo.png`} alt="Logo"/></a>
    <Link to={`/`}>
      <Logo color={`black`}/>
    </Link>
    <nav>
      {data.allMarkdownRemark.edges.map(({node}) => <Link key={node.id} to={"/" + node.frontmatter.path}>{node.frontmatter.title}</Link>)}
    </nav>
  </header>
)

export default() => (<StaticQuery query={graphql `
      query {
          allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
          totalCount
          edges {
              node {
              id
              frontmatter {
                  title
                  path
              }
              excerpt
              }
          }
          }
      }
      `
}
  render = { data => <Header data={data} />
  }/>
)
