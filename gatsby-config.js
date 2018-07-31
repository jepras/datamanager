module.exports = {
  pathPrefix: "/datamanager",
  siteMetadata: {
    title: 'Data Manager',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
