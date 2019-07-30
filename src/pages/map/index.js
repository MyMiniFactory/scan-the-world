import React from "react"
import { graphql } from "gatsby"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'react-leaflet-markercluster/dist/styles.min.css'
import './index.css'
import config from '../../config'

import Layout from '../../components/layout'

const id = 'romainbou.pljg503g'
const accessToken = 'pk.eyJ1Ijoicm9tYWluYm91IiwiYSI6ImNpbXhta3U5bTAwZG12emx5dmF2aW05dnIifQ.HcDxPxknP7xvs2Wb8rsEpw'

export default ({ data }) => {
  const { edges: places } = data.allMapTilePlace
  const { edges: objects } = data.allMapTileObject

  if (typeof window !== 'undefined') {
    return (
      <Layout>
        <Map style={{height:'100vh'}} center={[51.505, -0.09]} zoom={3} maxZoom={18}>
          <TileLayer url={`https://api.tiles.mapbox.com/v4/${id}/{z}/{x}/{y}.png?access_token=${accessToken}`}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup>
            {places &&
              places.map(({ node }, index) => {
                const { lat, lng } = node
                if (lat && lng) {
                  return (
                    <Marker key={index} position={[lat, lng]}>
                      <Popup>
                        <h1>{node.name}</h1>
                        {node.objects &&
                          node.objects.map((object, index) => (
                            <a key={index} href={`${config.myminifactory_url}/object/${object.url}`}>
                              <p>{object.title}</p>
                              <img src={object.image_url} alt='sculture'/>
                            </a>
                          ))}
                      </Popup>
                    </Marker>
                  )
                }
                return null
              })
            }
            {objects &&
              objects.map(({ node }, index) => {
                const { lat, lng } = node
                if (lat && lng) {
                  return (
                    <Marker key={index} position={[lat, lng]}>
                      <Popup>
                        <a href={`${config.myminifactory_url}/object/${node.url}`}>
                          <p>{node.title}</p>
                          <img src={node.image_url} alt='sculture'/>
                        </a>
                      </Popup>
                    </Marker>
                  )
                }
                return null
              })
            }
          </MarkerClusterGroup>
        </Map>
      </Layout>
    )
  }
  return null
}

export const query = graphql `
  query MapQuery {
    allMapTilePlace {
      edges {
        node {
          lat
          lng
          name
          objects {
            title
            url
            image_url
          }
        }
      }
    }
    allMapTileObject {
      edges {
        node {
          url
          title
          lng
          lat
          image_url
        }
      }
    }
  }
`
