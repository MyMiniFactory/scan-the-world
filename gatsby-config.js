module.exports = {
  siteMetadata: {
    title: `Scan The World`,
    description: ``,
    author: `Jean-Baptiste Paux`,
    indiaUrl: `https://cdn.myminifactory.com/static/Scan_the_World_India_basic.pdf`,
    museumsUrl: `https://cdn.myminifactory.com/static/STW_For_Galleries_Archives_and_Museum.pdf`,
    socialLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/scantheworld"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/Scan_The_World"
      },
      {
        name: "Medium",
        url: "https://medium.com/scantheworld"
      }
    ],
  },
  pathPrefix: "/scantheworld",
  plugins: [
    {
      resolve: "gatsby-source-mmf",
      options: {
        name: "MyMiniFactoryObject",
        url: "https://www.myminifactory.com/stw/objects/search",
      },
    },
    {
      resolve: "gatsby-source-mmf-map",
      options: {
        name: "MapTile",
        url: "https://www.myminifactory.com/stw/objects/map",
      },
    },
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'assets',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
