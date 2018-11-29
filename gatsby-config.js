module.exports = {
  siteMetadata: {
    title: 'Vainglorywiki',
  },
  plugins: [
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
  ],
}
