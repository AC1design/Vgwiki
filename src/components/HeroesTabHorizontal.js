import React from 'react'
import Menu from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Card from './Card'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { heroCards } from '../constants/heroes'
import 'animate.css/animate.min.css'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'

const heroTabs = ['ALL', 'ASSASSINS', 'MAGE', 'PROTECTOR', 'SNIPER', 'WARRIOR']

const Selectan = styled.div`
  display: flex;
  max-width: 1366px;
`
const StyledMenu = withStyles({
  root: {
    background: 'trasparent',
    boxShadow: 'none',
    padding: '16px 0px 0px 16px',
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
    background: '#313133',
    color: 'white',
    fontWeight: '800',
    borderRadius: '50px',
    fontSize: '12px',
    marginRight: '16px',
    minHeight: '35px',
    minWidth: 'fit-content',
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

class HeroesHorizontal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      value: 0,
      hideNameAndRole: false,
      displayflex: '',
      displayflexwrap: '',
      displayflexwrapmargin: '',
      displayflexjustify: '',
      showRole: true,
    }
  }


  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleHideClick = event => {
    this.setState({ hideNameAndRole: true })
    this.setState({ displayflex: 'flex' })
    this.setState({ displayflexwrap: 'wrap' })
    this.setState({ displayflexwrapmargin: '0' })
    this.setState({ displayflexjustify: 'center' })
    this.setState({ showRole: false })
  }

  handleShowClick = event => {
    this.setState({ hideNameAndRole: false })
    this.setState({ displayflex: '' })
    this.setState({ displayflexwrap: '' })
    this.setState({ displayflexwrapmargin: '' })
    this.setState({ displayflexjustify: '' })
    this.setState({ showRole: true })
  }

  makeHeroCard = (hero, index) => (
    <Card
      title={hero.name}
      text={hero.type.join(', ')}
      image={require(`./../images/Cards/${hero.name}_Card.jpg`)}
      image2={require(`./../images/heroes/${hero.name.toLowerCase()}.jpg`)}
      link={hero.name}
      key={index}
      hideNameAndRole={this.state.hideNameAndRole}
      reduce={this.state.hideNameAndRole}
      showRole={this.state.showRole}
      roleimg={require(`./../images/${hero.role}.png`)}
    />
  )

  render() {
    const { value } = this.state

    return (
      <div>
          <div className="Selectan">
            <h1>Heroes</h1>
            <div className='SelctanIcon'>
              <Square onClick={this.handleShowClick}>Show</Square>
              <Grid style={{ marginLeft: '16px' }} onClick={this.handleHideClick}>Hide</Grid>
            </div>
          </div>
        <div>
          <StyledMenu
            position="static" color="default" style={{ background: 'none' }}
          >
            <StyledTabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons='off'
              indicatorColor='none'
            >
              {heroTabs.map((label, index) => (
                <StyledTab label={label} onClick={this.handleClose} key={index} selected={false}>
                  {label}
                </StyledTab>
              ))}
            </StyledTabs>
          </StyledMenu>
        </div>
        {value === 0 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards.map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards
                  .filter(hero => hero.type.includes('ASSASSIN'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards
                  .filter(hero => hero.type.includes('MAGE'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards
                  .filter(hero => hero.type.includes('PROTECTOR'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards
                  .filter(hero => hero.type.includes('SNIPER'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <div className='CardboxGroupScroll'>
              <div className='CardboxGroup' style={{
                display: this.state.displayflex,
                flexWrap: this.state.displayflexwrap,
                margin: this.state.displayflexwrapmargin,
                justifyContent: this.state.displayflexjustify
              }}>
                {heroCards
                  .filter(hero => hero.type.includes('WARRIOR'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default HeroesHorizontal
