import './ObjectTile.css'

import React from 'react';

function ObjectTile({ object }) {
  const { threedObject } = object
  return (
    <div className="object-tile">
      <a href={threedObject.url} >
        <img src={threedObject.images[0].thumbnail.url} alt={object.title}/>
      </a>
      <p>{`${object.title}${object.place ? ', ' + object.place : ''} ${object.artist ? 'by ' + object.artist : ''}`}</p>
      {threedObject.designer &&
        <a className="object-designer" href={threedObject.designer.profile_url}>
          <img src={threedObject.designer.avatar_thumbnail_url} alt={threedObject.designer.name}/>
        </a>
      }
    </div>
  );
}

export default ObjectTile;
