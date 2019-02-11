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
import { itemBoxes } from '../constants/items'
import 'animate.css/animate.min.css'
import Filter from './Icon/FilterIcon';
import Framesitem from './ItemFrames';

const itemTabs = ['ALL',
    'CRYSTAL',
    'WEAPON',
    'DEFENSE',
    'UTILITY',
    'CONSUMABLE',]

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
        backgroundColor: 'transparent'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button)

const VerticalTabs = withStyles(() => ({
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

const StyledTab = withStyles(() => ({
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

class ItemsTabGrid extends React.Component {
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
        <Framesitem
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
                        <h1>Select an Item</h1>
                    </div>
                    <StyledButton
                        aria-owns={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{ color: 'white', fontWeight: '900', marginTop: '15px', padding: '0px', minWidth: '30px' }}
                    >
                        <Filter></Filter>
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
                            {itemTabs.map((label, index) => (
                                <StyledTab label={label} onClick={this.handleClose} key={index}>
                                    <MenuItem onClick={this.handleClose}>{label}</MenuItem>
                                </StyledTab>
                            ))}
                        </VerticalTabs>
                    </Menu>
                </div>
                {value === 0 && (
                    <TabContainer>
                        <div className='farmesgridgroup'>
                            {itemBoxes.map((item, index) => this.makeItemBox(item, index))}
                        </div>
                    </TabContainer>
                )}
                {value === 1 && (
                    <TabContainer>
                        <div className="farmesgridgroup">
                                {itemBoxes
                                    .filter(item => item.class === 'CRYSTAL')
                                    .map((item, index) => this.makeItemBox(item, index))}
                            </div>
                    </TabContainer>
                )}
                {value === 2 && (
                    <TabContainer>
                        <div className="farmesgridgroup">
                                {itemBoxes
                                    .filter(item => item.class === 'WEAPON')
                                    .map((item, index) => this.makeItemBox(item, index))}
                        </div>
                    </TabContainer>
                )}
                {value === 3 && (
                    <TabContainer>
                        <div className="farmesgridgroup">
                                {itemBoxes
                                    .filter(item => item.class === 'DEFENSE')
                                    .map((item, index) => this.makeItemBox(item, index))}
                            </div>
                    </TabContainer>
                )}
                {value === 4 && (
                    <TabContainer>
                        <div className="farmesgridgroup">
                                {itemBoxes
                                    .filter(item => item.class === 'UTILITY')
                                    .map((item, index) => this.makeItemBox(item, index))}
                            </div>
                    </TabContainer>
                )}
                {value === 5 && (
                    <TabContainer>
                        <div className="farmesgridgroup">
                                {itemBoxes
                                    .filter(item => item.class === 'CONSUMABLE')
                                    .map((item, index) => this.makeItemBox(item, index))}
                            </div>
                    </TabContainer>
                )}
            </div>
        )
    }
}

export default ItemsTabGrid