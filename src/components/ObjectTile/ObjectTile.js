import './ObjectTile.css'

import React from 'react';

function ObjectTile({ object }) {
  const { designer } = object
  return (
    <div className="object-tile">
      <a href={object.url} >
        <img src={object.images[0].thumbnail.url} alt={object.name}/>
      </a>
      <p>{object.name}</p>
      {designer &&
        <a className="object-designer" href={designer.profile_url}>
          <img src={designer.avatar_thumbnail_url} alt={designer.name}/>
        </a>
      }
    </div>
  );
}

export default ObjectTile;
