import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { heroCards } from '../constants/heroes'
import 'animate.css/animate.min.css'
import Frame from '../components/Frame'
import Filter from './Icon/FilterIcon'

const heroTabs = ['ALL', 'ASSASSINS', 'MAGE', 'PROTECTOR', 'SNIPER', 'WARRIOR']

const Selectan = styled.div`
  display: flex;
`
const StyledButton = withStyles({
  root: {
    position: 'absolute',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 0,
    padding: '0px',
    marginLeft: '16px',
    marginRight: '16px',
    right: 0,
    backgroundColor: 'transparent',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button)

const VerticalTabs = withStyles(theme => ({
  root: {
    outline: 'none',
  },
  flexContainer: {
    flexDirection: 'column',
    background: '#2B2B2D',
  },
  indicator: {
    display: 'none',
  },
}))(Tabs)

const StyledTab = withStyles(theme => ({
  selected: {
    fontWeight: '800',
    borderBottom: '2px solid rgb(0, 183, 255)',
  },
  disabled: {
    color: 'red',
  },
  textColorInherit: {
    color: 'white',
    opacity: 0.7,
    '&$selected': {
      opacity: 1,
    },
    '&$disabled': {
      opacity: 0.2,
    },
  },
}))(Tab)

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

class HeroesGrid extends React.Component {
  state = {
    anchorEl: null,
    value: 0,
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

  makeHeroCard = (hero, index) => (
    <Frame
      image={`https://vgproassets.nyc3.cdn.digitaloceanspaces.com/heroes/${hero.name.toLowerCase()}.png`}
      link={hero.name}
      key={index}
      type={hero.type}
    />
  )

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const { value } = this.state

    return (
      <div>
        <Selectan>
          <div className="Selectan">
            <h1>Select an Hero</h1>
          </div>
          <StyledButton
            aria-owns={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            style={{
              color: 'white',
              fontWeight: '900',
              marginTop: '15px',
              padding: '0px',
              minWidth: '30px',
            }}
          >
            <Filter />
          </StyledButton>
        </Selectan>
        <div
          style={{
            display: 'flex',
            background: 'black',
          }}
        >
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Fade}
            style={{ outline: 'none' }}
          >
            <VerticalTabs
              value={value}
              onChange={this.handleChange}
              className="menu-hack"
            >
              {heroTabs.map((label, index) => (
                <StyledTab label={label} onClick={this.handleClose} key={index}>
                  <MenuItem onClick={this.handleClose}>{label}</MenuItem>
                </StyledTab>
              ))}
            </VerticalTabs>
          </Menu>
        </div>
        {value === 0 && (
          <TabContainer>
            <div className="farmesgridgroup">
              {heroCards.map((hero, index) => this.makeHeroCard(hero, index))}
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className="farmesgridgroup">
              <div>
                {heroCards
                  .filter(hero => hero.type.includes('ASSASSIN'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className="farmesgridgroup">
              <div>
                {heroCards
                  .filter(hero => hero.type.includes('MAGE'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div className="farmesgridgroup">
              <div>
                {heroCards
                  .filter(hero => hero.type.includes('PROTECTOR'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <div className="farmesgridgroup">
              <div>
                {heroCards
                  .filter(hero => hero.type.includes('SNIPER'))
                  .map((hero, index) => this.makeHeroCard(hero, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <div className="farmesgridgroup">
              <div>
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

export default HeroesGrid
