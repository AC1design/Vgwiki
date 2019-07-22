import React from 'react'
import Layout from '../components/layout'
import Tabsind from '../components/Tab'
import MediaQuery from 'react-responsive'
import Page from 'react-page-loading'
import Charms from '../components/MobileCharmsTab'
import GridList from '../components/GridList'
import StickyFooter from 'react-sticky-footer'
import ItemsGridList from '../components/ItemsGridList'
import SocialPingsMobile from '../components/SocialPingsMobile'
import { graphql } from 'gatsby'
import ImgHero from 'gatsby-image'
import HatsM from '../components/HatsMobile'
import News from '../components/News';

const IndexPage = props => (
  <Layout>
    <meta name="theme-color" content="#1f1f21" />
    <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
      <MediaQuery query="(min-width: 721px)">
        <div className="Hero">
          <div className="HeroContainer">
            <ImgHero
              imgStyle={{ objectPosition: "center top"}}
              className="Img"
              fluid={props.data.imageOne.childImageSharp.fluid}
            />
            <div className="gradient" />
          </div>
          <div className="HeroGroup">
            <h1>VAINGLORY WIKI</h1>
            <p>UPDATE 4.5</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 720px)">
        <div className="Hero">
          <div className="HeroContainer">
            <ImgHero
              imgStyle={{ objectPosition: "center top" }}
              className="Img"
              fluid={props.data.imageTwo.childImageSharp.fluid}
            />
            <div className="gradient" />
          </div>
          <div className="HeroGroup">
            <h1>VAINGLORY WIKI</h1>
            <p>UPDATE 4.5</p>
          </div>
        </div>
      </MediaQuery>
      <News/>
      <Tabsind />
      <MediaQuery query="(max-width: 1366px)">
        <div className="mobile">
          <GridList />
          <ItemsGridList />
          <HatsM />
          <SocialPingsMobile />
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
          <p>Copyright © 2019 VGWIKI</p>
          <p>VGWIKI is not affiliated or part of Super Evil Megacorp. All Vainglory copyrights and art assets belong to Super Evil Megacorp.</p>
          Made by 
{' '}
          <a href="https://twitter.com/AngeloCant1">AngeloC</a>
          <a href='https://www.freeprivacypolicy.com/privacy/view/2dbe2eebdd983174b4a7a27d5f5312e4'>Privacy Policy</a>
          <h1 style={{fontSize: '14px'}}>Cookie Declaration</h1>
          <script id="CookieDeclaration" src="https://consent.cookiebot.com/723cc8d9-3751-4bf3-826f-a7fa548b4a79/cd.js" type="text/javascript" async></script>
        </StickyFooter>
      </div>
    </Page>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "45bgdesktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "45bgmobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`
/*
      <div className='MPL'>
            <img src={require('../images/maxman.png')} alt='maxmanpremierleague' />
            <div className='MPLtext'>
              <h1>MAXMAN PREMIER LEAGUE</h1>
              <h2>EUROPE - 1000€ PRIZE</h2>
              <p className='MPLagroup'>
                <a href="https://twitter.com/AngeloCant1">JOIN</a>
                <a to="https://www.twitch.tv/maxman30">TWITCH</a>
              </p>
            </div>
      </div> */