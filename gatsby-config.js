require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Svadbeni Cvet`,
    description: `Započnite svoje svadbeno putovanje sa našim svadbenim cvetićima, bidermajerima, ukrasnim kutijama za koverte i burme, ofingerima i drugim svadbenim ukrasima i dekoracijama.`,
    author: `@zorandsc`,
    image: `/marriage.jpg`,
    siteUrl: `https://svadbenicvet.com`,
  },
  plugins: [
    /*
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-149097573-1",
      },
    },
    */
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.svadbenicvet.com`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://svadbenicvet.com",
        sitemap: "https://svadbenicvet.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `@wardpeet/gatsby-image-nextgen`,
    //`gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`),
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Svadbeni Cvet`,
        short_name: `Svadbeni Cvet`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#d2aa5c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
