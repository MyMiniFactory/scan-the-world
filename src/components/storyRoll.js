import React from 'react'
import { Link } from 'gatsby'
import './storyRoll.css'

export default ({ edges: stories }) => (
  <div className="stories">
    {stories &&
      stories.map(({ node: story }) => (
        <article key={story.id} className="story-item">
          <div className="story-header">
            <div className="story-preview">
              <img src={story.frontmatter.storyImage.childImageSharp.original.src} alt={story.frontmatter.title} height='100px'/>
            </div>
            <div>
              <Link to={story.fields.slug}>{story.frontmatter.title}</Link>
              <p>{story.frontmatter.date}</p>
            </div>
          </div>
          <p>
            {story.excerpt}
          </p>
          <Link to={story.fields.slug} style={{display:`block`, textAlign:`right`}}>
            Keep Reading →
          </Link>
        </article>
      ))}
  </div>
)
