# gatsby-source-mmf-map

This plugin sets up source for Gatsby application fetching data from MyMiniFactory API

## Install plugin

To install the plugin, follow these steps.

1. Gatsby loads plugins from the your local website plugins folder which is a folder named `plugins` in the website’s root directory. So place the plugin folder inside it.

2. Ensure that [npm](https://www.npmjs.com/) is installed. This provides dependencies to run the plugin.

3. From the plugin folder, execute the following command:

  ```shell
  npm install
  ```

## Configure the plugin

Open `gatsby-config.js` from the root directory of your tutorial site, and add the gatsby-source-mmf-map plugin inside plugin table:

```javascript
plugins: [
  ...,
  {
    resolve: "gatsby-source-mmf-map",
    options: {
      name: "MapTile",
      url: "https://www.myminifactory.com/stw/objects/map",
    },
  },
]
```
## Query for result

Your plugin is ready. Start `gatsby develop` and open a browser at http://localhost:8000/___graphql. The map tile data can be queried from here. try:

```graphql
query MyQuery {
  allMapTileObject {
    edges {
      node {
        id
      }
    }
  }
  allMapTilePlace {
    edges {
      node {
        id
      }
    }
  }
}
```
