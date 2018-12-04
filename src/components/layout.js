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
            { property: 'og:image', content:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Vainglory_-_Saw_shooting_at_Kraken_at_the_Vain_crystal.jpg'}
          ]}
        >
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
