module.exports = {
  siteMetadata: {
    title: `Ny York Vintage`,
    description: `Vintage Wear & Jeans.`,
    author: `@brungoth`,
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        includedRoutes: ["**/posts", "**/media", '**/acf'],
        baseUrl: 'admin.nyyork.no',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://admin.nyyork.no',
          replacementUrl: '',
        },
      },
    },
    {
      resolve: 'gatsby-source-instagram',
        options: {
          username: '1697713321'
        },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
  
      }
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};