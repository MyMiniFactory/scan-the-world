import './ObjectTile.css'

import React from 'react';

function ObjectTile({ object }) {
  return (
    <div className="object-tile">
      <a href={object.url} >
        <img src={object.images[0].thumbnail.url} alt={object.name}/>
      </a>
      <p>{object.name}</p>
    </div>
  );
}

export default ObjectTile;
