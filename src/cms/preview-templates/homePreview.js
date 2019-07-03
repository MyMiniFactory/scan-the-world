import React from 'react'
import Gallery from 'react-photo-gallery'

const HomePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return <Gallery photos={data.trends} direction={`column`}/>
  } else {
    return <div>Loading...</div>
  }
}

export default HomePreview;
