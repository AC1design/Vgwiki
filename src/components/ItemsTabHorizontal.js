import React from 'react'
import Menu from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Itemsbox from './Item'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { itemBoxes, itemTabs } from '../constants/items'
import 'animate.css/animate.min.css'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'

const Selectan = styled.div`
  display: flex;
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
    <Typography
      component="div"
      style={{
        padding: 0,
        color: '',
        fontSize: '',
        fontWeight: '',
        fontFamily: '',
        lineHeight: '',
      }}
    >
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class MobileItemsTab extends React.Component {
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

  makeItemBox = (item, index) => (
    <Itemsbox
      itemimg={require(`./../images/Items/${item.image}.png`)}
      itemname={item.name}
      class={item.class}
      tier={item.tier}
      color={item.color}
      cost={item.cost}
      tag={item.tag}
      description={item.description}
      tip={item.tip}
      builtfrom={item.item1 ? 'BUILT FROM' : null}
      buildsto={item.item4 ? 'BUILDS INTO' : null}
      item1={item.item1 ? require(`./../images/Items/${item.item1}.png`) : null}
      item2={item.item2 ? require(`./../images/Items/${item.item2}.png`) : null}
      item3={item.item3 ? require(`./../images/Items/${item.item3}.png`) : null}
      item4={item.item4 ? require(`./../images/Items/${item.item4}.png`) : null}
      item5={item.item5 ? require(`./../images/Items/${item.item5}.png`) : null}
      item6={item.item6 ? require(`./../images/Items/${item.item6}.png`) : null}
      item7={item.item7 ? require(`./../images/Items/${item.item7}.png`) : null}
      item8={item.item8 ? require(`./../images/Items/${item.item8}.png`) : null}
      item9={item.item9 ? require(`./../images/Items/${item.item9}.png`) : null}
      key={index}
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
            <h1>Items</h1>
            <div className='SelctanIcon'>
              <Square onClick={this.handleShowClick}>Show</Square>
              <Grid style={{ marginLeft: '16px' }} onClick={this.handleHideClick}>Hide</Grid>
            </div>
          </div>
        </Selectan>
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
              {itemTabs.map((tab, index) => (
                <StyledTab label={tab} onClick={this.handleClose} key={index} selected={false}>
                  {tab}
                </StyledTab>
              ))}
            </StyledTabs>
          </StyledMenu>
        </div>
        {value === 0 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes.map((item, index) => {
                  return this.makeItemBox(item, index)
                })}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes
                  .filter(item => item.class === 'CRYSTAL')
                  .map((item, index) => this.makeItemBox(item, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes
                  .filter(item => item.class === 'WEAPON')
                  .map((item, index) => this.makeItemBox(item, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes
                  .filter(item => item.class === 'DEFENSE')
                  .map((item, index) => this.makeItemBox(item, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes
                  .filter(item => item.class === 'UTILITY')
                  .map((item, index) => this.makeItemBox(item, index))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <div className="ItemboxGroupScroll">
              <div className="ItemboxGroup">
                {itemBoxes
                  .filter(item => item.class === 'CONSUMABLE')
                  .map((item, index) => this.makeItemBox(item, index))}
              </div>
            </div>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default MobileItemsTab
