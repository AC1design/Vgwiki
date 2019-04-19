module.exports = {
  siteMetadata: {
    title: 'VGWIKI',
    description: `A Vainglory Wiki`,
    author: `AngeloCant1 - IGN: AngeloC`,
    url: "https://www.vgwiki.netlify.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/BG`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'VGWIKI',
        short_name: 'VGWIKI',
        start_url: '/',
        background_color: '#1f1f21',
        theme_color: '#1f1f21',
        display: 'fullscreen',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/constants/heroes/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
  ],
}
