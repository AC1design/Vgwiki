import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'vainglory, wiki, vaingloriwiki, vainglory wiki, vgwiki, vg, vaingloryheroes'},
            { property: 'og:image', content: 'https://i.imgur.com/qBMkj19.png' },
            { name:"viewport", content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}
          ]}
        >
          <meta name="title" content="VGWIKI"/>
            <meta name="description" content="A Vainglory Wiki"/>

          <meta name="keywords" content="vainglory, wiki, vaingloriwiki, vainglory wiki, vgwiki, vg, vaingloryheroes" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="VGWIKI"/>
          <meta property="og:description" content="A Vainglory Wiki" />
          <meta property="og:image" content="https://i.imgur.com/qBMkj19.png" />
          <meta property="og:url" content="https://www.vgwiki.netlify.com" />

          <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://vgwiki.netlify.com/"/>
              <meta property="twitter:title" content="VGWIKI"/>
                <meta property="twitter:description" content="A Vainglory Wiki"/>
                  <meta property="twitter:image" content="https://i.imgur.com/qBMkj19.png"/>
          <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="723cc8d9-3751-4bf3-826f-a7fa548b4a79" type="text/javascript" data-blockingmode="auto"></script>
          <script id="CookieDeclaration" src="https://consent.cookiebot.com/723cc8d9-3751-4bf3-826f-a7fa548b4a79/cd.js" type="text/javascript" async></script>
          <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
          <html lang="en" />
        </Helmet>
        <div>
          {children}
        </div>
    </>
  )
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
