import React from 'react'
import './Header.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import SvgComponent from './SvgList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 300,
    color:'white'
  },
  fullList: {
    width: 'auto',
  },
};

const StyledButton = withStyles({
  root: {
    position:'absolute',
    right:'25px',
    color: 'white',
    padding: '0px',
    fontSize: '12px',
  minWidth: '0px',
boxSizing: 'border-box',
minHeight: '0px',
transition: 'background-color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, box - shadow 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms',
fontWeight: 800,
fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
borderRadius: '4px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  constructor(props) {
  super(props)
  this.state = {
    hasScrolled: false
  }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

  render() {
    const { classes } = this.props;
    const sideList = (
      <div style={{ background: '#1f1f21', color: 'white', }} className='classes.list'>
        <List>
          {['Magnus', 'Adagio', 'Ardan', 'Alfa'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    

    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <a href="/">
            <img src={require("./../images/LOGOWHITE.png")} />
          </a>
          <StyledButton className="herobut" onClick={this.toggleDrawer('right', true)}><SvgComponent></SvgComponent></StyledButton>
        </div>
        <SwipeableDrawer
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
            style={{ background: '#1f1f21', color:'white' }}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

export default Header
