import React from "react"
import "./scss/object-tile.scss"

export default ({ object }) => {
  const { threedObject } = object
  const place = object.place
    ? <span>{`, ${object.place}`}</span>
    : null
  const artist = object.artist
    ? <span> by <span style={{fontStyle:`italic`}}>{object.artist}</span></span>
    : null
  return (
    <div className="object-tile">
      <a href={threedObject.url} target='_blank' rel="noopener noreferrer">
        <div>
          <img className="tile-image" src={threedObject.images[0].thumbnail.url} alt={object.title}/>
        </div>
        <p>
          <span style={{fontWeight:`bold`}}>{object.title}</span>
          {place}
          {artist}
        </p>
      </a>
      {threedObject.designer &&
        <a className="object-designer" href={threedObject.designer.profile_url} target='_blank' rel="noopener noreferrer">
          <img src={threedObject.designer.avatar_thumbnail_url} alt={threedObject.designer.name}/>
        </a>
      }
    </div>
  )
}
