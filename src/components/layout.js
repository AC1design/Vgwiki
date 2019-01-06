import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Vainglory Wiki' },
            { name: 'keywords', content: 'vainglory, wiki, vaingloriwiki, vainglory wiki, vgwiki, vg' },
            { property: 'og:image', content:'https://i.imgur.com/qBMkj19.png'}
          ]}
        >
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
