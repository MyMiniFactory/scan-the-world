import './ObjectTile.scss'

import React from 'react';

function ObjectTile({ object }) {
  return (
      <a className="object-tile-a" href={object.url} >
        <div className="object-tile" style={{
          backgroundImage: `url(${object.images[0].thumbnail.url})`,
        }}>
          <div className="info">
            <p>{object.name}</p>
          </div>
        </div>
      </a>
  );
}

export default ObjectTile;
