import React from 'react'
import Layout from '../components/layout'
import Tabsind from '../components/Tab'
import MediaQuery from 'react-responsive'
import ItemsTabHorizontal from '../components/ItemsTabHorizontal'
import Page from 'react-page-loading'
import Charms from '../components/MobileCharmsTab'
import AdComponent from '../components/ad'
import GridList from '../components/GridList'
import StickyFooter from 'react-sticky-footer'
import ItemsTabGrid from '../components/ItemsTabGrid'
import ItemsGridList from '../components/ItemsGridList'

const IndexPage = () => (
  <Layout>
    <meta name="theme-color" content="#1f1f21" />
    <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>VAINGLORY WIKI</h1>
          <p>UPDATE 3.10</p>
        </div>
      </div>
      <Tabsind />
      <MediaQuery query="(max-width: 1366px)">
        <div className="mobile">
          <GridList />
          <div className="adbox">
            <AdComponent />
          </div>
          <ItemsGridList />
          <Charms />
        </div>
      </MediaQuery>
      <div>
        <StickyFooter
          className="footer"
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: '#2B2B2D',
            padding: '1rem',
            fontSize: '12px',
            color: 'white',
            textAlign: 'center',
            marginTop: '50px',
          }}
          stickyStyles={{
            backgroundColor: '#2B2B2D',
            padding: '1rem',
            fontSize: '12px',
            color: 'white',
            textAlign: 'center',
            marginTop: '50px',
          }}
        >
          © 2018 Copyright:{' '}
          <a href="https://twitter.com/AngeloCant1">AngeloC</a>
        </StickyFooter>
      </div>
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </Page>
  </Layout>
)

export default IndexPage
