import React from 'react'
import './Header.css'
import { heroCards } from '../constants/heroes'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import SvgComponent from './SvgList'
import ListItem from '@material-ui/core/ListItem'



const StyledList = withStyles({
  root: {
    overflow: 'visible',
    fontSize: '14px',
    fontWeight: '800',
    padding: '0px',
  },
})(List)

const StyledListItem = withStyles({
  root: {
    textTransform: 'capitalize',
    paddingTop: '16px',
  },
  button: {
    '&:hover': {},
  },
})(ListItem)

const StyledSwipeableDrawer = withStyles({
  paper: {
    background: '#2B2B2D',
    width: '230px',
    borderRadius: '26px 0px 0px 26px',
  },
})(SwipeableDrawer)

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 340) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    const sideList = (
      <div
        style={{ background: '#2B2B2D', color: 'white'}}
        className="classes.list"
      >
        <h1 style={{ fontSize: '24px', marginLeft: '25px', marginTop: '20px', fontFamily: 'Antonio' }}>
          Heroes
        </h1>
        <StyledList>
          {heroCards
            .map(hero => hero.name)
            .map((text, index) => (
              <div className="Listitem" key={index}>
                <Link to={`/${text}`}>
                  <StyledListItem button>
                    <img
                      style={{ overflow: 'visible', marginLeft: '16px' }}
                      src={require(`./../images/heroes/${ text.toLowerCase()}.jpg`)}
                      alt={text}
                    />
                    {text}
                  </StyledListItem>
                </Link>
              </div>
            ))}
        </StyledList>
      </div>
    )

    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require('./../images/LOGOCOLORED.png')}
              alt="LOGOVGWIKI"
            />
          </Link>
            <SvgComponent style={{ position: 'absolute', right: 16 }} onClick={this.toggleDrawer('right', true)} />
        </div>

        <StyledSwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </StyledSwipeableDrawer>
      </div>
    )
  }
}

export default Header
