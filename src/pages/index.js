import React from 'react'
import Layout from '../components/layout'
import Tabsind from '../components/Tab'
import MediaQuery from 'react-responsive'
import Page from 'react-page-loading'
import Charms from '../components/MobileCharmsTab'
import AdComponent from '../components/ad'
import GridList from '../components/GridList'
import StickyFooter from 'react-sticky-footer'
import ItemsGridList from '../components/ItemsGridList'
import SocialPingsMobile from '../components/SocialPingsMobile'
import { Link, graphql } from 'gatsby'
import ImgHero from 'gatsby-image'

const IndexPage = (props) => (
  <Layout>
    
    <meta name="theme-color" content="#1f1f21" />
    <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
      <MediaQuery query="(min-width: 412px)">
        <div className='Hero'>
        <div className='HeroContainer'>
          <ImgHero className='Img'
           fluid={props.data.imageOne.childImageSharp.fluid}
          ></ImgHero>
          <div className='gradient' />
        </div>
        <div className="HeroGroup">
          <h1>VAINGLORY WIKI</h1>
          <p>UPDATE 4.0</p>
        </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 411px)">
        <div className='Hero'>
          <div className='HeroContainer'>
            <ImgHero className='Img'
              fluid={props.data.imageTwo.childImageSharp.fluid}
            ></ImgHero>
            <div className='gradient' />
          </div>
          <div className="HeroGroup">
            <h1>VAINGLORY WIKI</h1>
            <p>UPDATE 4.0</p>
          </div>
        </div>
      </MediaQuery>
      <Tabsind />
      <MediaQuery query="(max-width: 1366px)">
        <div className="mobile">
          <GridList/>
          <AdComponent/>
          <ItemsGridList/>
          <Charms />
          <SocialPingsMobile/>
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
export const pageQuery = graphql`
{
  imageOne: file(relativePath: { eq: "SanFeng_Desktop.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2560) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageTwo: file(relativePath: { eq: "SanFeng_Mobile.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2560) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`