module.exports = {
    siteMetadata: {
      title: `Learo`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
 "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    ],
  }
