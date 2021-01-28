import React from "react"
import L from "leaflet"
import { graphql } from "gatsby"
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-markercluster"
import "react-leaflet-markercluster/dist/styles.min.css"
import Layout from "../../components/layout"
import config from "../../config"
import museum_icon from "../../images/museum_icon.svg"
import sculpture_icon from "../../images/sculpture_icon.svg"
import "./index.css"

const id = 'romainbou.pljg503g'
const accessToken = 'pk.eyJ1Ijoicm9tYWluYm91IiwiYSI6ImNpbXhta3U5bTAwZG12emx5dmF2aW05dnIifQ.HcDxPxknP7xvs2Wb8rsEpw'

export default ({ data }) => {
  const { edges: places } = data.allMapTilePlace
  const { edges: objects } = data.allMapTileObject

  if (typeof window !== 'undefined') {
    const sculptureIcon = new L.icon({
      iconUrl: sculpture_icon,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [31, 50],
    })

    const museumIcon = new L.icon({
      iconUrl: museum_icon,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [31, 50],
    })

    const createClusterCustomIcon = function (cluster) {
      const markers = cluster.getAllChildMarkers()
      let n = 0

      markers.forEach(marker => {
        n += Number(marker.options.alt)
      })

      let c = ' marker-cluster-';
      if (n < 10) {
        c += 'small';
      } else if (n < 100) {
        c += 'medium';
      } else {
        c += 'large';
      }
      return L.divIcon({
        html: `<div><span>${n}</span></div>`,
        className: `marker-cluster ${c}`,
        iconSize: new L.Point(40, 40, true)
      })
    }

    return (
      <Layout>
        <div className="stw-map">
          <p>The map is currently in working progress...</p>
          <Map style={{height:`80vh`}} center={[51.505, -0.09]} zoom={3} maxZoom={18} fullscreenControl>
            <TileLayer noWrap={true} url={`https://api.tiles.mapbox.com/v4/${id}/{z}/{x}/{y}.png?access_token=${accessToken}`}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
              {places &&
                places.map(({ node }, index) => {
                  const { lat, lng } = node
                  if (lat && lng) {
                    return (
                      <Marker key={index} position={[lat, lng]} icon={museumIcon} alt={node.objects.length} title={node.name}>
                        <Popup>
                          <h1>{node.name}</h1>
                          {node.objects &&
                            node.objects.map((object, index) => (
                              <a key={index} href={`${config.myMiniFactoryUrl}/object/${object.url}`}>
                                <p>{object.title}</p>
                                <img src={object.image_url} alt='sculture'/>
                              </a>
                            ))}
                        </Popup>
                        <Tooltip permanent={true} direction='right'>{node.objects.length}</Tooltip>
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
                      <Marker key={index} position={[lat, lng]} icon={sculptureIcon} alt='1' title={node.name}>
                        <Popup>
                          <a href={`${config.myMiniFactoryUrl}/object/${node.url}`}>
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
        </div>
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
