import React from 'react'
import { Link } from 'gatsby'
import './storyRoll.scss'

export default ({ edges: stories }) => (
  <div className="stories">
    {stories &&
      stories.map(({ node: story }) => (
        <article key={story.id} className="story-item">
          <div className="story-header" style={{backgroundImage:`url(${story.frontmatter.storyImage.childImageSharp.original.src})`}}>
            <Link to={story.fields.slug}><h1>{story.frontmatter.title}</h1></Link>
          </div>
          <p>
            {story.excerpt}
          </p>
          <div className="story-footer">
            <p>{story.frontmatter.date}</p>
            <Link to={story.fields.slug}>
              Keep Reading →
            </Link>
          </div>
        </article>
      ))}
  </div>
)
