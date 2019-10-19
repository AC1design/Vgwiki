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
import News from '../components/News'
import HeroesHorizontal from '../components/HeroesTabHorizontal'
import MobileItemsTab from '../components/ItemsTabHorizontal'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'

const StyledMenu = withStyles({
  root: {
    background: 'transparent',
    boxShadow: 'none',
  },
})(Menu)

const StyledTabs = withStyles({
  root: {
    background: 'trasparent',
    boxShadow: 'none',
  },
})(Tabs)

const StyledTab = withStyles({
  root: {
    background: 'transparent',
    color: 'white',
    fontWeight: '800',
    borderRadius: '50px',
    fontSize: '12px',
    marginRight: '16px',
    minWidth: 'fit-content',
    padding: 0,
    marginLeft: '16px',
  },
  selected: {
    fontWeight: '800',
  },
  textColorInherit: {
    opacity: '0.4',
  }
})(Tab)

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
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
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
            </div>
          </MediaQuery>

          <div className="HeroGroup">
            <div className='newhero'>
              <h3>NEW HERO</h3>
              <h1>Viola</h1>
            </div>
            <p>UPDATE 4.8</p>
          </div>
          <div style={{ background: '#1f1f21', paddingTop: '16px', borderRadius: '26px 26px 0px 0px', }}>
            <div className='columnsparent'>
              <div className='left'>
                <div>
                  <StyledMenu
                    position="static" color="default" variant='scrollable' style={{ background: 'none' }}
                  >
                    <StyledTabs
                      value={value}
                      onChange={this.handleChange}
                      variant="scrollable"
                      scrollButtons='off'
                      indicatorColor='none'
                    >
                      <StyledTab label='Heroes'  selected={false}></StyledTab>
                      <StyledTab label='Items'  selected={false}> </StyledTab>
                      <StyledTab label='Miscellaneous' selected={false}>
                        A
                        </StyledTab>
                    </StyledTabs>
                  </StyledMenu>
                </div>
                <Divider variant="middle" style={{backgroundColor:'#ffffff40'}}/>
                {value === 0 && (
                  <TabContainer> <HeroesHorizontal /> </TabContainer>
                )}
                {value === 1 && (
                  <TabContainer> <MobileItemsTab /> </TabContainer>
                )}
                {value === 2 && (
                  <TabContainer>
                    <HatsM />
                    <SocialPingsMobile />
                    <Charms />
                  </TabContainer>
                )}
              </div>
              <News className='right' />
            </div>
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
                borderRadius: '26px 26px 0px 0px',
                position: 'inherit',
                bottom: '0px',
                height: '100%'
              }}
              stickyStyles={{
                position: 'inherit',
                bottom: 0
              }}
            >
              <p>Copyright © 2019 VGWIKI</p>
              <p>VGWIKI is not affiliated or part of Super Evil Megacorp. All Vainglory copyrights and art assets belong to Super Evil Megacorp.</p>
              Made by
{' '}
              <a href="https://twitter.com/AC1design">AngeloC</a>
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
    imageOne: file(relativePath: { eq: "48bgdesktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "48bgmobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`
