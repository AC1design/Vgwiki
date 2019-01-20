import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from './Card'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Selectan= styled.div`
display:flex;
`
const StyledButton = withStyles({
    root: {
        position:"absolute",
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 20px',
        marginLeft:'16px',
        marginRight: '16px',
        right:0,
        display:"inline-block",
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const VerticalTabs = withStyles(theme => ({
    root:{
        outline: 'none',
    },
    flexContainer: {
        flexDirection: 'column',
        background: '#2B2B2D',
    },
    indicator: {
        display: 'none',
    }
}))(Tabs)


const StyledTab = withStyles(theme => ({
    selected: {
        fontWeight:'800',
        borderBottom: '2px solid rgb(0, 183, 255)'
    },
    disabled: {
        color:'red',
    },
    textColorInherit: {
        color: 'white',
        opacity: 0.7,
        '&$selected': {
            opacity: 1
        },
        '&$disabled': {
            opacity: 0.2,
            
        }
    },
}))(Tab);

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 0, lineHeight: 1.2,}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class MobileHeroesTab extends React.Component {
    state = {
        anchorEl: null,
        value: 0,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;
        const { value } = this.state;

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
                        style={{ color: "white", fontWeight: "900", marginTop: '10px'}}
            >
                FILTER
                </StyledButton>
                </Selectan>
                
                <div style={{
                    display: 'flex', background:'black',
                }}>
                    <Menu 
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                        style={{ outline: 'none', }}>
                        <VerticalTabs value={value} onChange={this.handleChange} className="menu-hack">
                            <StyledTab label="All" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>All</MenuItem></StyledTab>
                            <StyledTab label="Assassins" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Assassins</MenuItem></StyledTab>
                            <StyledTab label="Mage" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Mage</MenuItem></StyledTab>
                            <StyledTab label="Protector" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Protector</MenuItem></StyledTab>
                            <StyledTab label="Sniper" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Protector</MenuItem></StyledTab>
                            <StyledTab label="Warriors" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Protector</MenuItem></StyledTab>
                        </VerticalTabs>
                    </Menu>
                    </div>
                {value === 0 && <TabContainer >
                    <div className="CardboxGroupScroll">
                        <div className="CardboxGroup">
                            <Card
                                title="Ylva"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Ylva_Card.png')}
                                link="/Ylva/" />
                            <Card
                                title="Adagio"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Adagio_Card.jpg')}
                                link="/Adagio/" />
                            <Card
                                title="Alpha"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Alpha_Card.jpg')}
                                link="/Alpha/" />
                            <Card
                                title="Anka"
                                text="LANE, ASSASSIN"
                                image={require('./../images/Cards/Anka_Card.jpg')}
                                link="/Anka/" />
                            <Card
                                title="Ardan"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Ardan_Card.jpg')}
                                link="/Ardan/" />
                            <Card
                                title="Baptiste"
                                text="JUNGLE, MAGE"
                                image={require('./../images/Cards/Baptiste_Card.jpg')}
                                link="/Baptiste/" />
                            <Card
                                title="Baron"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Baron_Card.jpg')}
                                link="/Baron/" />
                            <Card
                                title="Blackfeather"
                                text="LANE, ASSASSIN"
                                image={require('./../images/Cards/Blackfeather_Card.jpg')}
                                link="/Blackfeather/" />
                            <Card
                                title="Catherine"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Catherine_Card.jpg')}
                                link="/Catherine/" />
                            <Card
                                title="Celeste"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Celeste_Card.jpg')}
                                link="/Celeste/" />
                            <Card
                                title="Churnwalker"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Churnwalker_Card.jpg')}
                                link="/Churnwalker/" />
                            <Card
                                title="Flicker"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Flicker_Card.jpg')}
                                link="/Flicker/" />
                            <Card
                                title="Fortress"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Fortress_Card.jpg')}
                                link="/Fortress/" />
                            <Card
                                title="Glaive"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Glaive_Card.jpg')}
                                link="/Glaive/" />
                            <Card
                                title="Grace"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Grace_Card.jpg')}
                                link="/Grace/" />
                            <Card
                                title="Grumpjaw"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Grumpjaw_Card.jpg')}
                                link="/Grumpjaw/" />
                            <Card
                                title="Gwen"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Gwen_Card.jpg')}
                                link="/Gwen/" />
                            <Card
                                title="Idris"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Idris_Card.jpg')}
                                link="/Idris/" />
                            <Card
                                title="Inara"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Inara_Card.png')}
                                link="/Inara/" />
                            <Card
                                title="Joule"
                                text="LANE, WARRIOR"
                                image={require('./../images/Cards/Joule_Card.jpg')}
                                link="/Joule/" />
                            <Card
                                title="Kensei"
                                text="LANE, JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Kensei_Card.jpg')}
                                link="/Kensei/" />
                            <Card
                                title="Kestrel"
                                text="JUNGLE, SNIPER"
                                image={require('./../images/Cards/Kestrel_Card.jpg')}
                                link="/Kestrel/" />
                            <Card
                                title="Kinetic"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Kinetic_Card.jpg')}
                                link="/Kinetic/" />
                            <Card
                                title="Koshka"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Koshka_Card.jpg')}
                                link="/Koshka/" />
                            <Card
                                title="Krul"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Krul_Card.jpg')}
                                link="/Krul/" />
                            <Card
                                title="Lance"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lance_Card.jpg')}
                                link="/Lance/" />
                            <Card
                                title="Lorelai"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lorelai_Card.jpg')}
                                link="/Lorelai/" />
                            <Card
                                title="Lyra"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lyra_Card.jpg')}
                                link="/Lyra/" />
                            <Card
                                title="Magnus"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Magnus_Card.jpg')}
                                link="/Magnus/" />
                            <Card
                                title="Malene"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Malene_Card.jpg')}
                                link="/Malene/" />
                            <Card
                                title="Ozo"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Ozo_Card.jpg')}
                                link="/Ozo/" />
                            <Card
                                title="Petal"
                                text="JUNGLE, SNIPER"
                                image={require('./../images/Cards/Petal_Card.jpg')}
                                link="/Petal/" />
                            <Card
                                title="Phinn"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Phinn_Card.jpg')}
                                link="/Phinn/" />
                            <Card
                                title="Reim"
                                text="JUNGLE, MAGE"
                                image={require('./../images/Cards/Reim_Card.jpg')}
                                link="/Reim/" />
                            <Card
                                title="Reza"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Reza_Card.jpg')}
                                link="/Reza/" />
                            <Card
                                title="Ringo"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Ringo_Card.jpg')}
                                link="/Ringo/" />
                            <Card
                                title="Rona"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Rona_Card.jpg')}
                                link="/Rona/" />
                            <Card
                                title="Samuel"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Samuel_Card.jpg')}
                                link="/Samuel/" />
                            <Card
                                title="SAW"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Saw_Card.jpg')}
                                link="/SAW/" />
                            <Card
                                title="Silvernail"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Silvernail_Card.jpg')}
                                link="/Silvernail/" />
                            <Card
                                title="Skaarf"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Skaarf_Card.jpg')}
                                link="/Skaarf/" />
                            <Card
                                title="Skye"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Skye_Card.jpg')}
                                link="/Skye/" />
                            <Card
                                title="Taka"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Taka_Card.jpg')}
                                link="/Taka/" />
                            <Card
                                title="Tony"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Tony_Card.jpg')}
                                link="/Tony/" />
                            <Card
                                title="Varya"
                                text="LANE, MAGE"
                                image={require('./../images/Cards/Varya_Card.jpg')}
                                link="/Varya/" />
                            <Card
                                title="Vox"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Vox_Card.jpg')}
                                link="/Vox/" />
                            <Card
                                title="Yates"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Yates_Card.jpg')}
                                link="/Yates/" />
                        </div>
                    </div>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <div className="CardboxGroupScroll">
                        <div className="CardboxGroup">
                            <Card
                                title="Ylva"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Ylva_Card.png')}
                                link="/Ylva/" />
                            <Card
                                title="Anka"
                                text="LANE, ASSASSIN"
                                image={require('./../images/Cards/Anka_Card.jpg')}
                                link="/Anka/" />
                            <Card
                                title="Blackfeather"
                                text="LANE, ASSASSIN"
                                image={require('./../images/Cards/Blackfeather_Card.jpg')}
                                link="/Blackfeather/" />
                            <Card
                                title="Idris"
                                text="JUNGLE, MAGE"
                                image={require('./../images/Cards/Idris_Card.jpg')}
                                link="/Idris/" />
                            <Card
                                title="Kensei"
                                text="LANE, JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Kensei_Card.jpg')}
                                link="/Kensei/" />
                            <Card title="Koshka"
                                text="LANE, JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Koshka_Card.jpg')}
                                link="/Koshka/" />
                            <Card
                                title="Reza"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Reza_Card.jpg')}
                                link="/Reza/" />
                            <Card
                                title="Taka"
                                text="JUNGLE, ASSASSIN"
                                image={require('./../images/Cards/Taka_Card.jpg')}
                                link="/Taka/" />
                        </div>
                    </div>
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <div className="CardboxGroupScroll">
                    <div className="CardboxGroup">
                        <Card
                            title="Magnus"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Magnus_Card.jpg')}
                            link="/Magnus/" />
                        <Card
                            title="Baptiste"
                            text="JUNGLE, MAGE"
                            image={require('./../images/Cards/Baptiste_Card.jpg')}
                            link="/Baptiste/" />
                        <Card
                            title="Celeste"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Celeste_Card.jpg')}
                            link="/Celeste/" />
                        <Card
                            title="Kinetic"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Kinetic_Card.jpg')}
                            link="/Kinetic/" />
                        <Card
                            title="Malene"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Malene_Card.jpg')}
                            link="/Malene/" />
                        <Card
                            title="Reim"
                            text="JUNGLE, MAGE"
                            image={require('./../images/Cards/Reim_Card.jpg')}
                            link="/Reim/" />

                        <Card
                            title="Samuel"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Samuel_Card.jpg')}
                            link="/Samuel/" />
                        <Card
                            title="Varya"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Varya_Card.jpg')}
                            link="/Varya/" />
                        <Card
                            title="Skaarf"
                            text="LANE, MAGE"
                            image={require('./../images/Cards/Skaarf_Card.jpg')}
                            link="/Skaarf/" />
                    </div>
                </div>
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <div className="CardboxGroupScroll">
                        <div className="CardboxGroup">
                            <Card
                                title="Adagio"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Adagio_Card.jpg')}
                                link="/Adagio/" />
                            <Card
                                title="Ardan"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Ardan_Card.jpg')}
                                link="/Ardan/" />
                            <Card
                                title="Catherine"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Catherine_Card.jpg')}
                                link="/Catherine/" />
                            <Card
                                title="Flicker"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Flicker_Card.jpg')}
                                link="/Flicker/" />
                            <Card
                                title="Fortress"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Fortress_Card.jpg')}
                                link="/Fortress/" />
                            <Card
                                title="Grace"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Grace_Card.jpg')}
                                link="/Grace/" />

                            <Card
                                title="Lance"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lance_Card.jpg')}
                                link="/Lance/" />
                            <Card
                                title="Lorelai"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lorelai_Card.jpg')}
                                link="/Lorelai/" />
                            <Card
                                title="Lyra"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Lyra_Card.jpg')}
                                link="/Lyra/" />
                            <Card
                                title="Phinn"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Phinn_Card.jpg')}
                                link="/Phinn/" />
                            <Card
                                title="Yates"
                                text="JUNGLE, PROTECTOR"
                                image={require('./../images/Cards/Yates_Card.jpg')}
                                link="/Yates/" />
                        </div>
                    </div>
                </TabContainer>}
                {value === 4 && <TabContainer>
                    <div className="CardboxGroupScroll">
                        <div className="CardboxGroup">
                            <Card
                                title="Baron"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Baron_Card.jpg')}
                                link="/Baron/" />
                            <Card
                                title="Gwen"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Gwen_Card.jpg')}
                                link="/Gwen/" />
                            <Card
                                title="Kestrel"
                                text="JUNGLE, SNIPER"
                                image={require('./../images/Cards/Kestrel_Card.jpg')}
                                link="/Kestrel/" />
                            <Card
                                title="Petal"
                                text="JUNGLE, SNIPER"
                                image={require('./../images/Cards/Petal_Card.jpg')}
                                link="/Petal/" />
                            <Card
                                title="Ringo"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Ringo_Card.jpg')}
                                link="/Ringo/" />
                            <Card
                                title="SAW"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Saw_Card.jpg')}
                                link="/SAW/" />
                            <Card
                                title="Silvernail"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Silvernail_Card.jpg')}
                                link="/Silvernail/" />
                            <Card
                                title="Skye"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Skye_Card.jpg')}
                                link="/Skye/" />
                            <Card
                                title="Vox"
                                text="LANE, SNIPER"
                                image={require('./../images/Cards/Vox_Card.jpg')}
                                link="/Vox/" />
                        </div>
                    </div>
                </TabContainer>}
                {value === 5 && <TabContainer>
                    <div className="CardboxGroupScroll">
                        <div className="CardboxGroup">
                            <Card
                                title="Alpha"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Alpha_Card.jpg')}
                                link="/Alpha/" />
                            <Card
                                title="Churnwalker"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Churnwalker_Card.jpg')}
                                link="/Churnwalker/" />
                            <Card
                                title="Glaive"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Glaive_Card.jpg')}
                                link="/Glaive/" />
                            <Card
                                title="Grumpjaw"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Grumpjaw_Card.jpg')}
                                link="/Grumpjaw/" />
                            <Card
                                title="Inara"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Inara_Card.png')}
                                link="/Inara/" />
                            <Card
                                title="Joule"
                                text="LANE, WARRIOR"
                                image={require('./../images/Cards/Joule_Card.jpg')}
                                link="/Joule/" />
                            <Card
                                title="Krul"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Krul_Card.jpg')}
                                link="/Krul/" />
                            <Card
                                title="Rona"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Rona_Card.jpg')}
                                link="/Rona/" />
                            <Card
                                title="Tony"
                                text="JUNGLE, WARRIOR"
                                image={require('./../images/Cards/Tony_Card.jpg')}
                                link="/Tony/" />
                        </div>
                    </div>
                </TabContainer>}
                
            </div>
        );
    }
}

export default MobileHeroesTab
