import React from 'react'
import Layout from '../components/layout'
import MediaQuery from 'react-responsive'
import Page from 'react-page-loading'
import Charms from '../components/MobileCharmsTab'
import StickyFooter from 'react-sticky-footer'
import SocialPingsMobile from '../components/SocialPingsMobile'
import { graphql } from 'gatsby'
import ImgHero from 'gatsby-image'
import HatsM from '../components/HatsMobile'
import News from '../components/News';
import HeroesHorizontal from '../components/HeroesTabHorizontal'
import MobileItemsTab from '../components/ItemsTabHorizontal'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0, lineHeight: 1.2 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      value: 0,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const { value } = this.state

    return (

    <Layout>
      <meta name="theme-color" content="#1f1f21" />
      <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
        <MediaQuery query="(min-width: 721px)">
          <div className="Hero">
            <div className="HeroContainer">
              <ImgHero
                imgStyle={{ objectPosition: "center right" }}
                className="Img"
                fluid={this.props.data.imageOne.childImageSharp.fluid}
              />
            </div>
            <div className="HeroGroup">
              <p>UPDATE 4.6</p>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 720px)">
          <div className="Hero">
            <div className="HeroContainer">
              <ImgHero
                imgStyle={{ objectPosition: "center top" }}
                className="Img"
                fluid={this.props.data.imageTwo.childImageSharp.fluid}
              />
            </div>
            <div className="HeroGroup">
              <p>UPDATE 4.6</p>
            </div>
          </div>
        </MediaQuery>
        <div style={{ background: '#1f1f21', paddingTop: '16px', borderRadius: '26px 26px 0px 0px' }}>
          <HeroesHorizontal />
          <MobileItemsTab />
          <News />
          <HatsM />
          <SocialPingsMobile />
          <Charms />
        </div>
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
            <a style={{ marginLeft: '16px' }} href='https://www.termsfeed.com/privacy-policy/b38962cdaa462299f0b57bf61cc6dbef'>Privacy Policy</a>
            <h1 style={{ fontSize: '14px' }}>Cookie Declaration</h1>
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/723cc8d9-3751-4bf3-826f-a7fa548b4a79/cd.js" type="text/javascript" async></script>
            <a href="javascript: Cookiebot.renew()">Change your consent</a>
            <a style={{ marginLeft: '16px' }} href="javascript: Cookiebot.withdraw()">Revoke your consent</a>
          </StickyFooter>
        </div>
      </Page>
      </Layout>
    )
  }
}

export default IndexPage
export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "46bgdesktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "46bgmobile.png" }) {
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