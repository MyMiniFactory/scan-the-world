import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import "./team.css"

function Member(props) {
  return (
    <div className="member">
      <img src={props.profilePicture} alt="profile"/>
      <p>{props.name}</p>
      <p>{props.role}</p>
      <blockquote>{props.quote}</blockquote>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/team/"}}, sort: {fields: frontmatter___order, order: ASC}) {
          nodes {
            frontmatter {
              profile_picture
              quote
              role
              name
              order
            }
          }
        }
      }
    `}
    render={data => (
      <div className="members">
        {data.allMarkdownRemark.nodes.map(node => (
          <Member key={node.frontmatter.order}
            profilePicture={node.frontmatter.profile_picture}
            name={node.frontmatter.name}
            role={node.frontmatter.role}
            quote={node.frontmatter.quote}
          />)
        )}
      </div>
    )}
  />
)
