import React from 'react'
import './objectTile.scss'

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
      <a href={threedObject.url} >
        <img src={threedObject.images[0].thumbnail.url} alt={object.title}/>
      </a>
      <p>
        <span style={{fontWeight:`bold`}}>{object.title}</span>
        {place}
        {artist}
      </p>
      {threedObject.designer &&
        <a className="object-designer" href={threedObject.designer.profile_url}>
          <img src={threedObject.designer.avatar_thumbnail_url} alt={threedObject.designer.name}/>
        </a>
      }
    </div>
  )
}
