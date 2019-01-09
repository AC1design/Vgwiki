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
import { ListItemIcon, Divider } from '@material-ui/core';
import { Link } from "react-dom";
import SimpleDialogDemo from './VgDialog';


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

const StyledList = withStyles({
  root: {
    fontSize:'12px',
    padding:'0px'
  },
})(List);

const StyledSwipeableDrawer = withStyles({
  paper: {
    background: '#2B2B2D',
    width:'180px'
  },
})(SwipeableDrawer);

const StyledDivider = withStyles({
  middle: {
    margin: '16px',
    backgroundColor:' rgb(0, 183, 255)'
  },
})(Divider);


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
      <div style={{ background: '#2B2B2D', color: 'white', }} className='classes.list'>
        <h1 style={{ fontSize: '14px', marginLeft: '16px', marginTop: '20px',}}>Heroes</h1>
        <StyledDivider variant="middle" />
        <StyledList>
          {['Magnus', 'Adagio', 'Alpha', 'Anka', 'Ardan', 'Baptiste', 'Baron', 'Blackfeather',
          'Catherine', 'Celeste', 'Churnwalker', 'Flicker', 'Fortress', 'Glaive', 'Grace', 'Grumpjaw',
            'Gwen', 'Idris', 'Inara', 'Joule', 'Kensei', 'Kestrel', 'Kinetic', 'Koshka',
            'Krul', 'Lance', 'Lorelai', 'Lyra', 'Magnus', 'Malene', 'Ozo', 'Petal',
            'Phinn', 'Reim', 'Reza', 'Ring', 'Rona', 'Samuel', 'Saw', 'Silvernail',
            'Skaarf', 'Skye', 'Taka', 'Tony', 'Varya', 'Vox', 'Yates',].map((text,index) => (
              <div style={{textTransform:'capitalize'}} className='Listitem'>
                <a style={{ textTransform: 'capitalize' }} href={`/${text}`}>
                
                  <ListItem button style={{ textTransform: 'capitalize', padding: '10px'}}>
              <img src={'https://vgproassets.nyc3.cdn.digitaloceanspaces.com/heroes/' + `${text.toLowerCase()}` + '.png'}></img>
              {text}</ListItem>
            </a>
            </div>
          ))}
        </StyledList>
      </div>
    );
    

    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <SimpleDialogDemo></SimpleDialogDemo>
          <a href="/">
            <img src={require("./../images/LOGOWHITE.png")} />
          </a>
          <StyledButton onClick={this.toggleDrawer('right', true)}><SvgComponent></SvgComponent></StyledButton>
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
