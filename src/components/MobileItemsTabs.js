import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Itemsbox from './Item'
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Selectan = styled.div`
display:flex;
`
const StyledButton = withStyles({
    root: {
        position: "absolute",
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 20px',
        marginLeft: '16px',
        marginRight: '16px',
        right: 0,
        display: "inline-block",
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

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
    }
}))(Tabs)


const StyledTab = withStyles(theme => ({
    selected: {
        fontWeight: '800',
        borderBottom: '2px solid rgb(0, 183, 255)'
    },
    disabled: {
        color: 'red',
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
        <Typography component="div" style={{
            padding: 0, color: '',
            fontSize: '', fontWeight: "", fontFamily: "", lineHeight: ''
        }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class MobileItemsTab extends React.Component {
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
                        <h1>Select an Item</h1>
                    </div>
                    <StyledButton
                        aria-owns={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{ color: "white", fontWeight: "900", marginTop: '10px' }}
                    >
                        FILTER
                </StyledButton>
                </Selectan>
                <div style={{
                    display: 'flex', background: 'black',
                }}>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        TransitionComponent={Fade}
                        style={{ outline: 'none'}}>
                        <VerticalTabs value={value} onChange={this.handleChange} className="menu-hack">
                            <StyledTab label="All" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>All</MenuItem></StyledTab>
                            <StyledTab label="Crystal" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Crystal</MenuItem></StyledTab>
                            <StyledTab label="Weapon" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Weapon</MenuItem></StyledTab>
                            <StyledTab label="Defense" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Defense</MenuItem></StyledTab>
                            <StyledTab label="Utility" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Utility</MenuItem></StyledTab>
                            <StyledTab label="Consumable" onClick={this.handleClose}><MenuItem onClick={this.handleClose}>Consumable</MenuItem></StyledTab>
                        </VerticalTabs>
                    </Menu>
                </div>
                {value === 0 && <TabContainer >
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
                            <Itemsbox
            itemimg={require('./../images/Items/celestial-shroud.png')}
            itemname="Celestial Shroud"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="2200"
        tag="NEW"
        description="+95 Shield 
Passive: Grants immunity to abilities and debuffs. Disabled for 35s shortly after negating ability damage"
          tip="Tip: Buy this against heavy crystal damage or hard-engage heroes"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/kinetic-shield.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/aegis.png')}
        itemname="Aegis"
        class="DEFENSE"
        tier="TIER 3"
        color="#A0D46B"
        cost="2200"
        description="+40 Shield
+40 Armor
+200 Max Health

Activate: Reflex Block (45s cooldown)." 
tip="Tip: Greatly reduces damage from enemy abilities."
          builtfrom="BUILT FROM"
item1={require("./../images/Items/reflex-block.png")}
          item2={require("./../images/Items/warmail.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/aftershock.png')}
        itemname="Aftershock"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2600"
        description="+15% Cooldown Speed (Max +35%) 
+1.0 Energy Recharge 
+30 Crystal Power
        Passive: After using an ability, your next basic attack deals 10% of target's max health as damage with +25% lifesteal. Max 300 damage vs structures and non-heroes. 1s cooldown."
          tip="Tip: Very effective against enemies with high health."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/eclipse-prism.png")}
          item2={require("./../images/Items/chronograph.png")}
          > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/alternating-current.png')}
        itemname="Alternating Current"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2800"
        description="+45 Crystal Power  
                     +40% Attack Speed  
                     Passive: Every other basic attack deals 70% of your crystal power as bonus damage."
          tip="Tip: Very effective against enemies with high health."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/blazing-salvo.png")} >
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/atlas-pauldron.png')}
        itemname="Atlas Pauldron"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="1900"
        description="+65 Armor 
Activate: Maim nearby enemies, lowering their attack speed by 65% of their total for 4s in a 4-meter range. (45s cooldown)
"
          tip="Tip: Counters enemies with high attack speed, but you must get close to the enemies to affect them."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/coat-of-plates.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/barbed-needle.png')}
        itemname="Barbed Needle"
        class="WEAPON"
          tier="TIER 2"
        color="#ED5565"
        cost="800"
        description="+10 Weapon Power 
+10% Weapon Lifesteal 
Passive: Restores 10 health whenever you kill a minion or monster (25 if using a melee default attack)."
          tip="Tip: Helps you stay healthy while last-hitting in lane."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/book-of-eulogies.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/serpent-mask.png")}
          item5={require("./../images/Items/poisoned-shiv.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/blazing-salvo.png')}
        itemname="Blazing Salvo"
        class="WEAPON"
          tier="TIER 2"
        color="#ED5565"
        cost="700"
        description="+20% Attack Speed"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/swift-shooter.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/bonesaw.png")}
          item5={require("./../images/Items/breaking-point.png")}
          item6={require("./../images/Items/poisoned-shiv.png")}
          item7={require("./../images/Items/tornado-trigger.png")}
          > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/bonesaw.png')}
        itemname="Bonesaw"
        class="WEAPON"
          tier="TIER 3"
        color="#ED5565"
        cost="2700"
         description="+40 Weapon Power 
+20% Attack Speed 
+25% Armor Pierce 
On Hit: Your basic attacks shred 10% of the target’s armor for 3s. Max 4 stacks."
          tip="Tip: Effective against turrets and enemies with high armor. Best if you or your team are already dealing lots of weapon damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/piercing-spear.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/book-of-eulogies.png')}
        itemname="Book of Eulogies"
        class="WEAPON"
          tier="TIER 1"
        color="#ED5565"
        cost="300"
        description="+5 Weapon Power 
+5% Weapon Lifesteal 
Passive: Restores 10 health whenever you kill a minion or monster (25 if using a melee default attack)."
          tip="Tip: Helps you stay healthy while last-hitting in lane."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/barbed-needle.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/breaking-point.png')}
        itemname="Breaking Point"
        class="WEAPON"
          tier="TIER 3"
        color="#ED5565"
        cost="2700"
        description="+20% Attack Speed 
+50 Weapon Power 
Passive: Gain 5 Weapon Power for every 100 weapon damage done to enemy heroes; +5/10 (melee/ranged) needed for each stack thereafter. 35 stacks max. Decays 5 stacks per second after you’ve stopped attacking for 2.5s."
          tip="Tip: Very weak at first, but becomes extremely powerful over the course of long battles."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/broken-myth.png')}
        itemname="Broken Myth"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2700"
        description="+35% Shield Pierce 
+50 Crystal Power"
          tip="Tip: Helps for punching through enemies with high shield."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/piercing-shard.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/capacitor-plate.png')}
        itemname="Capacitor Plate"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="2400"
        description="+400 Health 
+30 Armor 
+30 Shield 
+15% Cooldown Reduction 
+2.5 Energy Regen 
Passive: Your heals and barriers are 15% stronger. 
Passive: Your heals and barriers also grant other allied heroes bonus movement speed for 2s. (10s cooldown per hero)"
          tip="Tip: Buy this if your hero utilizes heals or barriers frequently."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/warmail.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/chronograph.png')}
        itemname="Chronograph"
        class="CRYSTAL"
          tier="TIER 2"
        color="#4a90e2"
        cost="800"
        description="+15% Cooldown Reduction (Max 35%) 
+0.75 Energy Recharge
"
          tip="Tip: Cooldown speed increases the speed at which your abilities come off the timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/hourglass.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aftershock.png")}
          item5={require("./../images/Items/clockwork.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/clockwork.png')}
        itemname="Clockwork"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2400"
        description="+30 Crystal Power 
+20% Cooldown Speed (Max 35%) 
+400 Max Energy 
+5 Energy Recharge 
Passive: Upon damaging an enemy hero with an ability, refresh all ability cooldowns by 10% (maximum 3s). This can only occur once every 3s.
"
          tip="Tip: Cooldown speed increases the speed at which your abilities come off the timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/void-battery.png")}
          item2={require("./../images/Items/chronograph.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/coat-of-plates.png')}
        itemname="Coat of Plates"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="750"
        description="+60 Armor"
          tip="Tip: Armor reduces damage from basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-armor.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/atlas-pauldron.png")}
          item5={require("./../images/Items/metal-jacket.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/contraption.png')}
        itemname="Contraption"
        class="UTILITY"
          tier="TIER 3"
        color="#AC92EC"
        cost="2100"
          description="+350 Max Health 
+40% Cooldown Speed 
+2 Energy Recharge 
Activate: Target yourself to place a Scout Trap. Target the ground farther away to fire a Flare. 5s cooldown. 3 charges max. 20s per charge."
          tip="Tip: A great way to save inventory space while still being able to control vision around the map."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/flare-gun.png")}
          item2={require("./../images/Items/chronograph.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/crucible.png')}
        itemname="Crucible"
        class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
        cost="2100"
        description="+700 Max Health 
Activate: Trigger Reflex Block for you and nearby teammates. (75s cooldown)"
          tip="Tip: Protect your friends with Reflex Block!"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/reflex-block.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/crystal-bit.png')}
        itemname="Crystal Bit"
        class="CRYSTAL"
          tier="TIER 1"
        color="#4a90e2"
        cost="300"
          description="+15 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/eclipse-prism.png")}
          item5={require("./../images/Items/heavy-prism.png")}
          item6={require("./../images/Items/piercing-shard.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/crystal-infusion.png')}
        itemname="Crystal Infusion"
                class="CONSUMABLE"
                tier="TIER 1"
                color="#CCD1D9"
        cost="500"
          description="Consume: Temporarily gain 30-60 crystal power, 7.5-15% cooldown reduction, and 10-20 armor & shield based on your level. Lasts 150s. Can only have one infusion active at a time."
          tip="Tip: Gain a powerful temporary advantage in your abilities."
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/dragons-eye.png')}
        itemname="Dragon's Eye"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="3000"
          description="+75 crystal power 
Passive: Gain 10 Crystal Power each second you damage enemy heroes. After 5s, lose 3 stack per second. 15 stacks max."
          tip="Abilities become stronger staying longer in battle"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/dragonblood-contract.png')}
        itemname="Dragonblood Contract"
                class="CONSUMABLE"
                tier="TIER 1"
                color="#CCD1D9"
        cost="250"
          description="Activate: After a brief delay, nearby enemy heroes are marked for 3 seconds. The next basic attack from an ally consumes the mark, slowing by 30% for 2s and dealing 100 bonus crystal damage. 10s cooldown. 2 max charges. 25s per charge."
          tip="Tip: Use this to aggressively secure kills in the early game."
          > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/dragonheart.png')}
        itemname="Dragonheart"
        class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
        cost="650"
          description="+400 Max Health"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/capacitor-plate.png")}
          item5={require("./../images/Items/crucible.png")}
          item6={require("./../images/Items/pulseweave.png")}
          item7={require("./../images/Items/slumbering-husk.png")}
        > 
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/eclipse-prism.png')}
          itemname="Eclipse Prism"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="650"
          description="+30 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aftershock.png")}
          item5={require("./../images/Items/frostburn.png")}
          item6={require("./../images/Items/shatterglass.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/energy-battery.png')}
          itemname="Energy Battery"
          class="CRYSTAL"
          tier="TIER 1"
          color="#4a90e2"
          cost="300"
          description="+100 Max Energy
+1.5 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/eve-of-harvest.png')}
          itemname="Eve of Harvest"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2600"
          description="+10% Crystal Lifesteal 
+60 Crystal Power 
+300 Max Energy 
+4 Energy Recharge 
Passive: Your next 400-800 (level 1-12) points of crystal damage to enemy heroes have +25% lifesteal, recharges over 40s."
          tip="Tip: Crystal lifesteal heals you for a % of crystal damage dealt."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/flare.png')}
          itemname="Flare"
                class="CONSUMABLE"
                tier="TIER 1"
                color="#CCD1D9"
          cost="25"
          description="Consume: Reveal an area for 5s. Can see over walls, into brush, and stealthed units. Scout Traps within this area are permanently revealed."
          tip="Tip: Use this to avoid being ambushed, especially in the late game."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/flare-gun.png')}
          itemname="Flare Gun"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="600"
          description="+250 Max Health 
Activate: Fire a flare. 5s cooldown. 2 charges max. 20s per charge."
          tip="Tip: Use this to avoid being ambushed, especially in the late game."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/contraption.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/flare-gun.png')}
          itemname="Flare Loader"
          class="UTILITY"
          tier="TIER 1"
          color="#AC92EC"
          cost="300"
          tag="5V5"
          description="+150 Max Health 
          Activate: Flare - Fires a Flare that lasts 3s, granting vision and true sight in the area. Flares have 3 max charges and recover 1 charge every 75s."
          tip="Tip: Buy this to counter enemy stealth/vision and to safely check objectives."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/fountain-of-renewal.png')}
          itemname="Fountain of Renewal"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+400 Max Health 
+60 Shield 
+20 Armor 
Passive: Lifespring 
Activate: Heals you and nearby allies for 2 health for each % missing health per second for 3s. (75s cooldown)"
          tip="Tip: Heal is especially powerful on allies who are almost dead."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/lifespring.png")}
          item2={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/frostburn.png')}
          itemname="Frostburn"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2700"
          description="+90 Crystal Power 
Passive: Crystal damage abilities slow enemy heroes by 25% for 1.5 seconds."
          tip="Tip: The slow becomes more powerful as you build more crystal power."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/halcyon-chargers.png')}
          itemname="Halcyon Chargers"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="1500"
          description="+150 Max Health 
+15% Cooldown Speed 
+250 Max Energy 
+3.5 Energy Recharge 
Passive: +0.5 move speed. (Does not stack with other boots.) 
Passive: Travel. 
Activate: Sprint for 2s (45s cooldown)."
          tip="Tip: Allows you to chase down enemy targets and use abilities more frequently... or to escape trouble!"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          item2={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/healing-flask.png')}
          itemname="Healing Flask"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="Eqp"
          description="Activate: Block 115-500 (level 1-12) damage and recover 200 (+25 per hero level) health and energy over the next 5s (120 cooldown)."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/heavy-prism.png')}
          itemname="Heavy Prism"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="1050"
          description="+45 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/alternating-current.png")}
          item5={require("./../images/Items/broken-myth.png")}
          item6={require("./../images/Items/eve-of-harvest.png")}
          item7={require("./../images/Items/frostburn.png")}
          item8={require("./../images/Items/shatterglass.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/heavy-steel.png')}
          itemname="Heavy Steel"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="1150"
          description="+45 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/breaking-point.png")}
          item5={require("./../images/Items/serpent-mask.png")}
          item6={require("./../images/Items/sorrowblade.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/hourglass.png')}
          itemname="Hourglass"
          class="CRYSTAL"
          tier="TIER 1"
          color="#4a90e2"
          cost="250"
          description="+7.5% Cooldown Reduction 
+0.25 Energy Recharge "
          tip="Tip: Cooldown reduction the time it takes for your abilities to come off the cooldown timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/ironguard-contract.png')}
          itemname="Ironguard Contract"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="250"
          description="Passive: When a nearby ally kills a jungle monster or large lane minion, it heals you and your ally by 75 health each and 10 energy each."
          tip="Tip: Use this to be battle ready coming out of the jungle. Be sure to sell this item when you are durable enough to survive the jungle."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/journey-boots.png')}
          itemname="Journey Boots"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="1500"
          description="+150 Max Health 
Passive: +0.5 move speed. (Does not stack with other boots.) 
Passive: Travel. 
Activate: Sprint for 2s (75s cooldown). Damaging heroes instantly sets the cooldown to 10s if it is above it."
          tip="Tip: Purchase to be able to chase down fleeing targets and sustain pressure."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/kinetic-shield.png')}
          itemname="Kinetic Shield"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="800"
          description="+60 Shield"
          tip="Tip: Shield reduces damage from abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-shield.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/fountain-of-renewal.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/level-juice.png')}
          itemname="Level Juice"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="0"
          tag="PRACTICE"
          description="Activate: Instantly level up."
          tip="Tip: This item is only available in practice mode."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/lifespring.png')}
          itemname="Ligespring"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="800"
          description="+200 Max Health 
Passive: Regenerate 2.5% of your missing health per second whenever you are out of combat with enemy heroes for 5s.
"
          tip="Tip: Helps you stay healthy in between battles."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/fountain-of-renewal.png")}
          item5={require("./../images/Items/pulseweave.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/light-armor.png')}
          itemname="Light Armor"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+25 Armor"
          tip="Tip: Armor reduces damage from basic attacks."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/coat-of-plates.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/light-shield.png')}
          itemname="Light Shield"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+25 Shield"
          tip="Tip: Shield reduces damage from abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/lucky-strike.png')}
          itemname="Lucky Strike"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="900"
          description="+20% Critical Chance 
+5% Critical Damage "
          tip="Tip: Critical strikes deal 50% more damage than usual."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/minions-foot.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/tornado-trigger.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/metal-jacket.png')}
          itemname="Metal Jacket"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+90 Armor 
          Passive: Reduces incoming damage from Basic Attacks by 15%."
          tip="Tip: Armor reduces damage from basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/coat-of-plates.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/minion-candy.png')}
          itemname="Minion Candy"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="75"
          description="Consume: Empowers nearby friendly minions for 60s and friendly jungle bosses for 30s. They are granted 40% increased damage, 120 armor, 60 shield, and 0.5 increased movement speed."
          tip="Tip: Helps you push and siege enemy turrets, especially in early game."
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/minions-foot.png')}
          itemname="Minion's Foot"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10% Critical Chance 
+5% Critical Damage 
Passive: After buying this item, your very first attack on an enemy hero will crit.
"
          tip="Tip: You can sell and re-buy this item to refresh the passive."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/nullwave-gauntlet.png')}
          itemname="Nullwave Gauntlet"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2200"
          description="+400 Max Health 
+25% Cooldown Reduction 
+1 Energy Recharge 
Activate: Fires a blast at an enemy hero which explodes shortly after hitting its target, item silencing for 4s and dealing 50-100 + 15% max health in crystal damage (35s cooldown) (11 range)."
          tip="Tip: Use this against opponents with many active items."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
          item1={require("./../images/Items/dragonheart.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/oakheart.png')}
          itemname="Oakheart"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+200 Max Health"
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/dragonheart.png")}
          item5={require("./../images/Items/lifespring.png")}
          item6={require("./../images/Items/reflex-block.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/piercing-shard.png')}
          itemname="Piercing Shard"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="900"
          description="+10% Shield Pierce 
+20 Crystal Power
"
          tip="Tip: Shield pierce makes a % of your crystal damage bypass shield."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/piercing-spear.png')}
          itemname="Piercing Spear"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="900"
          description="+8% Armor Pierce 
+15 Weapon Power
"
          tip="Tip: Armor pierce makes a % of your weapon damage bypass armor."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/bonesaw.png")}
          item5={require("./../images/Items/tension-bow.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/poisoned-shiv.png')}
          itemname="Poisoned Shiv"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="900"
          description="+30 Weapon Power 
+25% Attack Speed 
+10% Weapon Lifesteal 
Passive: Every 2 basic attacks will apply a mortal wound for 2s. 
Passive: Barbed Needle
"
          tip="Tip: Buy this against high sustain targets."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/barbed-needle.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/protector-contract.png')}
          itemname="Protector Contract"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="250"
          description="Activate: Grants a 120 health barrier to nearby allied heroes for 2s. 5s cooldown. 2 max charges, 15s per charge."
          tip="Tip: Purchase this if you expect heavy aggression coming from the enemy team or want early teamfights." >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/pulseweave.png')}
          itemname="Pulseweave"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2700"
          description="+600 Health 
Passive: Upon taking damage from an enemy hero, gain bonus movement speed for 3s then deal 50 (+25% of bonus health) damage and slow enemies by 5% (+0.02% of bonus health) for 2s. (30s cooldown) 
Passive: +10% base movement speed 
Passive: Lifespring" 
          tip="Tip: Purchase this to strengthen your engage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/lifespring.png")}
          item2={require("./../images/Items/dragonheart.png")}
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/reflex-block.png')}
          itemname="Reflex Block"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="700"
          description="+200 Max Health 
Activate: Gain a barrier worth 100-400 (level 1-12) and block all debuffs for 1.5s. (75s cooldown) Can activate while stunned." 
          tip="Tip: Block dangerous but predictable abilities with your fast reflexes."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/crucible.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/rooks-decree.png')}
          itemname="Rook's Decree"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+500 Health 
+30 Armor 
+30 Shield 
+5% Cooldown Reduction 
Passive: After using an ability, your next basic attack against an enemy hero applies a barrier (100+15% of bonus health) to all nearby allies for 2 seconds (10s cooldown)."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/warmail.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scout-cam.png')}
          itemname="Scout Cam"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="Eqp"
          description="The enemy doesn't deserve privacy. These gizmos are the latest in high-tech surveillance. They're small, light and undetectable...except by other Scout Cams"
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scout-trap.png')}
          itemname="Scout Trap"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="50"
          description="Consume: Place a trap at your feet. Trap grants vision & will explode on contact with enemy heroes after a short delay. Deals splash damage and reveals affected enemies for 5s."
          tip="Tip: Use this to gain vision of strategic locations such as the Gold Mine or Kraken."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scoutpak.png')}
          itemname="ScoutPak"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="500"
          tag="5V5"
          description="+10% CDR 
+2.0 Energy Recharge 
Breadth: You can hold 1 additional Scout Cam(s) and obtain charges 30s faster per Scout Cam." 
          tip="Tip: Buy this to spread out vision across various areas."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/hourglass.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/superscout-2000.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scouttuff.png')}
          itemname="ScoutTuff"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="500"
          tag="5V5"
          description="+250 Max Health 
Depth: Scout Cams last 30s longer and take 1 extra hit(s) to kill. 
Activate: Flare. 
" 
          tip="Tip: Buy this to strengthen your vision control in specific areas."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/superscout-2000.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/serpent-mask.png')}
          itemname="Serpent Mask"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+70 Weapon Power 
+15% Weapon Lifesteal 
Passive: Your next 400-800 (level 1-12) points of weapon damage to enemy heroes has +25% lifesteal, recharges over 40 seconds. 
Passive: Barbed Needle  
" 
          tip="Tip: Helps you stay alive in battle, especially if you are already dealing lots of weapon damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/barbed-needle.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/shatterglass.png')}
          itemname="Shatterglass"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="3000"
          description="+130 Crystal Power" 
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/shiversteel.png')}
          itemname="Shiversteel"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="1950"
          description="+400 Max Health 
+25% Attack Speed 
Activate: For the next 4s (6s if you are melee), your basic attacks slow enemy heroes by 40% for 1.4s. (12s cooldown)"
          tip="Tip: Use this to slow fleeing enemies."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/six-sins.png')}
          itemname="Six Sins"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="650"
          description="+25 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/sorrowblade.png")}
          item5={require("./../images/Items/tension-bow.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/slumbering-husk.png')}
          itemname="Slumbering Husk"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2600"
          description="+45 Armor 
+90 Shield 
Passive: Taking 25% of your max health in damage over 1s fortifies your remaining health for 2s (30s cooldown)."
          tip="Tip: Buy this to survive against opponents with high burst damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/warmail.png")}
          item2={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/sorrowblade.png')}
          itemname="Sorrowblade"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="3100"
          description="+120 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/six-sins.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/spellfire.png')}
          itemname="Spellfire"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2900"
          description="+80 crystal power 
Passive: Abilities dealing crystal damage to enemies (excluding lane minions) deal 10-120 (level 1-12) + 60% of your crystal power as bonus crystal damage over 3s and apply Mortal Wounds for the duration."
          
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/spellsword.png')}
          itemname="Spellsword"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+85 Weapon Power 
+35% Cooldown Speed 
+2 Energy Recharge 
Passive: Every basic attack grants you 4 energy (12 on heroes)."
          tip="Tip: Particularly useful on heroes who run into energy problems."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/chronograph.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/sprint-boots.png')}
          itemname="Sprint Boots"
          class="UTILITY"
          tier="TIER 1"
          color="#AC92EC"
          cost="300"
          description="Passive: +0.3 move speed. (Does not stack with other boots.) 
Activate: Sprint for 2s (150s cooldown)."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/travel-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/stormcrown.png')}
          itemname="Stormcrown"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          description="+15% Cooldown Reduction 
+1 Energy Recharge 
+200 Max Health 
Stormguard: Your next basic attack will deal 140-480 bonus true damage (4s cooldown). 25% effectiveness against heroes and structures. (Does not stack with other Stormguard)"
          tip="Tip: Substantially increases your damage to objectives."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
          item2={require("./../images/Items/stormguard-banner.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/stormguard-banner.png')}
          itemname="Stormguard Banner"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="600"
          description="+200 Max Health 
Stormguard: Your next basic attack will deal 30-200 bonus true damage (4s cooldown). 25% effectiveness against heroes and structures. (Does not stack with other Stormguard)
"
          tip="Tip: Helps you damage objectives such as turrets & jungle bosses."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/stormcrown.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/superscout-2000.png')}
          itemname="SuperScout2000"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          tag="5V5"
          description="+450 Max Health 
+20% CDR 
+4.5 Energy Recharge 
Breadth: You can hold 3 additional Scout Cam(s) and obtain charges 60s faster per Scout Cam. 
Depth: Scout Cams last 60s longer and take 3 extra hit(s) to kill. 
Activate: Flare"
          tip="Tip: Buy this to provide maximum vision control for your team."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/scoutpak.png")}
          item2={require("./../images/Items/scouttuff.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/swift-shooter.png')}
          itemname="Swift Shooter"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10% Attack Speed"
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/teleport-boots.png')}
          itemname="Teleport Boots"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          tag="5V5"
          description="+150 Max Health 
+15 Shield 
+15 Armor 
Boots: +0.5 move speed (does not stack) 
Passive (Travel): +1 move speed when not in combat with heroes, monsters or turrets. 
Activate: After channeling for 2.5s, teleport to allied structure, minion or Scout Cam. Grant 600 barrier to the target while channeling. Gain a burst of move speed upon arrival (180s cooldown)."
          tip="Tip: Lets you quickly join your team from across the map or flank unsuspecting opponents."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tension-bow.png')}
          itemname="Tension Bow"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2700"
          description="+450 Max Health 
+20% CDR 
+4.5 Energy Recharge 
Breadth: You can hold 3 additional Scout Cam(s) and obtain charges 60s faster per Scout Cam. 
Depth: Scout Cams last 60s longer and take 3 extra hit(s) to kill. 
Activate: Flare"
          tip="Tip: Buy this to provide maximum vision control for your team."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/six-sins.png")}
          item2={require("./../images/Items/piercing-spear.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tornado-trigger.png')}
          itemname="Tornado Trigger"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+40% Attack Speed 
+35% Critical Chance 
+5% Critical Damage 
Passive: Basic attacking grants you +10% bonus base movement speed for 1.2s.
"
          tip="Tip: Use this if you already have lots of weapon power but little attack speed, or if you wish to apply on-hit effects faster."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/blazing-salvo.png")}
          item2={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/travel-boots.png')}
          itemname="Travel Boots"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="350"
          description="+100 Max Health 
Passive: +0.3 move speed. (Does not stack with other boots.) 
Passive (Travel): +1 move speed when not in combat with heroes, monsters or turrets. 
Activate: Sprint for 2s (90s cooldown).
"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/sprint-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tyrants-monocle.png')}
          itemname="Tyrant's Monocle"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2900"
          description="+35% Critical Chance 
+15% Critical Damage 
+50 Weapon Power
"
          tip="Tip: Most effective when combined with more weapon power & attack speed."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/six-sins.png")}
          item2={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/void-battery.png')}
          itemname="Void Battery"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="700"
          description="+250 Max Energy 
+3 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/energy-battery.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/clockwork.png")}
          item5={require("./../images/Items/eve-of-harvest.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/war-treads.png')}
          itemname="War Treads"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          description="+250 Max Energy 
+3 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          item2={require("./../images/Items/dragonheart.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/warmail.png')}
          itemname="Warmail"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2600"
          description="++30 Shield 
+30 Armor"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-armor.png")}
          item2={require("./../images/Items/light-shield.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/capacitor-plate.png")}
          item6={require("./../images/Items/slumbering-husk.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/weapon-blade.png')}
          itemname="Weapon Blade"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/heavy-steel.png")}
          item5={require("./../images/Items/piercing-spear.png")}
          item6={require("./../images/Items/six-sins.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/weapon-infusion.png')}
          itemname="Weapon Infusion"
          class="CONSUMABLE"
          tier="TIER 1"
          color="#CCD1D9"
          cost="500"
          description="Consume: Temporarily gain 20-40 weapon power, 15-35%% attack speed, and 10-20 armor & shield based on your level. Lasts 150s. Can only have one infusion at a time."
          tip="Tip: Gain a powerful temporary advantage in your basic attacks."
          >
        </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
                            <Itemsbox
        itemimg={require('./../images/Items/aftershock.png')}
        itemname="Aftershock"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2600"
        description="+15% Cooldown Speed (Max +35%) 
+1.0 Energy Recharge 
+30 Crystal Power
Passive: After using an ability, your next basic attack deals 10% of target's max health as damage with +25% lifesteal. Max 400 damage vs structure and non-heroes. 1s cooldown."
          tip="Tip: Very effective against enemies with high health."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/eclipse-prism.png")}
          item2={require("./../images/Items/chronograph.png")}
          > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/alternating-current.png')}
        itemname="Alternating Current"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2800"
        description="+45 Crystal Power  
                      +40% Attack Speed  
                      Passive: Every other basic attack deals 70% of your crystal power as bonus damage."
          tip="Tip: Very effective against enemies with high health."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/blazing-salvo.png")} >
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/broken-myth.png')}
        itemname="Broken Myth"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2700"
        description="+35% Shield Pierce 
+50 Crystal Power"
          tip="Tip: Helps for punching through enemies with high shield."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/piercing-shard.png")}
        > 
        </Itemsbox>
        
        <Itemsbox
        itemimg={require('./../images/Items/chronograph.png')}
        itemname="Chronograph"
        class="CRYSTAL"
          tier="TIER 2"
        color="#4a90e2"
        cost="800"
        description="+15% Cooldown Reduction (Max 35%) 
+0.75 Energy Recharge
"
          tip="Tip: Cooldown speed increases the speed at which your abilities come off the timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/hourglass.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aftershock.png")}
          item5={require("./../images/Items/clockwork.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/clockwork.png')}
        itemname="Clockwork"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="2400"
        description="+30 Crystal Power 
+20% Cooldown Speed (Max 35%) 
+400 Max Energy 
+5 Energy Recharge 
Passive: Upon damaging an enemy hero with an ability, refresh all ability cooldowns by 10% (maximum 3s). This can only occur once every 3s.
"
          tip="Tip: Cooldown speed increases the speed at which your abilities come off the timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/void-battery.png")}
          item2={require("./../images/Items/chronograph.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/crystal-bit.png')}
        itemname="Crystal Bit"
        class="CRYSTAL"
          tier="TIER 1"
        color="#4a90e2"
        cost="300"
          description="+15 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/eclipse-prism.png")}
          item5={require("./../images/Items/heavy-prism.png")}
          item6={require("./../images/Items/piercing-shard.png")}
        > 
        </Itemsbox>
        
        <Itemsbox
        itemimg={require('./../images/Items/dragons-eye.png')}
        itemname="Dragon's Eye"
        class="CRYSTAL"
          tier="TIER 3"
        color="#4a90e2"
        cost="3000"
          description="+75 crystal power 
Passive: Gain 10 Crystal Power each second you damage enemy heroes. After 5s, lose 3 stack per second. 15 stacks max."
          tip="Abilities become stronger staying longer in battle"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        > 
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/eclipse-prism.png')}
          itemname="Eclipse Prism"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="650"
          description="+30 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aftershock.png")}
          item5={require("./../images/Items/frostburn.png")}
          item6={require("./../images/Items/shatterglass.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/energy-battery.png')}
          itemname="Energy Battery"
          class="CRYSTAL"
          tier="TIER 1"
          color="#4a90e2"
          cost="300"
          description="+100 Max Energy
+1.5 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/eve-of-harvest.png')}
          itemname="Eve of Harvest"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2600"
          description="+10% Crystal Lifesteal 
+60 Crystal Power 
+300 Max Energy 
+4 Energy Recharge 
Passive: Your next 400-800 (level 1-12) points of crystal damage to enemy heroes have +25% lifesteal, recharges over 40s."
          tip="Tip: Crystal lifesteal heals you for a % of crystal damage dealt."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/frostburn.png')}
          itemname="Frostburn"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2700"
          description="+90 Crystal Power 
Passive: Crystal damage abilities slow enemy heroes by 25% for 1.5 seconds."
          tip="Tip: The slow becomes more powerful as you build more crystal power."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/heavy-prism.png')}
          itemname="Heavy Prism"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="1050"
          description="+45 Crystal Power"
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/alternating-current.png")}
          item5={require("./../images/Items/broken-myth.png")}
          item6={require("./../images/Items/eve-of-harvest.png")}
          item7={require("./../images/Items/frostburn.png")}
          item8={require("./../images/Items/shatterglass.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/hourglass.png')}
          itemname="Hourglass"
          class="CRYSTAL"
          tier="TIER 1"
          color="#4a90e2"
          cost="250"
          description="+7.5% Cooldown Reduction 
+0.25 Energy Recharge "
          tip="Tip: Cooldown reduction the time it takes for your abilities to come off the cooldown timer."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/piercing-shard.png')}
          itemname="Piercing Shard"
          class="CRYSTAL"
          tier="TIER 2"
          color="#4a90e2"
          cost="900"
          description="+10% Shield Pierce 
+20 Crystal Power
"
          tip="Tip: Shield pierce makes a % of your crystal damage bypass shield."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/crystal-bit.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/shatterglass.png')}
          itemname="Shatterglass"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="3000"
          description="+130 Crystal Power" 
          tip="Tip: Crystal power increases the strength of abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/spellfire.png')}
          itemname="Spellfire"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="2900"
          description="+80 crystal power 
Passive: Abilities dealing crystal damage to enemies (excluding lane minions) deal 10-120 (level 1-12) + 60% of your crystal power as bonus crystal damage over 3s and apply Mortal Wounds for the duration."
          
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-prism.png")}
          item2={require("./../images/Items/eclipse-prism.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/void-battery.png')}
          itemname="Void Battery"
          class="CRYSTAL"
          tier="TIER 3"
          color="#4a90e2"
          cost="700"
          description="+250 Max Energy 
+3 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/energy-battery.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/clockwork.png")}
          item5={require("./../images/Items/eve-of-harvest.png")}
        >
        </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
        <Itemsbox
        itemimg={require('./../images/Items/barbed-needle.png')}
        itemname="Barbed Needle"
        class="WEAPON"
          tier="TIER 2"
        color="#ED5565"
        cost="800"
        description="+10 Weapon Power 
+10% Weapon Lifesteal 
Passive: Restores 10 health whenever you kill a minion or monster (25 if using a melee default attack)."
          tip="Tip: Helps you stay healthy while last-hitting in lane."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/book-of-eulogies.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/serpent-mask.png")}
          item5={require("./../images/Items/poisoned-shiv.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/blazing-salvo.png')}
        itemname="Blazing Salvo"
        class="WEAPON"
          tier="TIER 2"
        color="#ED5565"
        cost="700"
                description="+20% Attack Speed"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/swift-shooter.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/bonesaw.png")}
          item5={require("./../images/Items/breaking-point.png")}
          item6={require("./../images/Items/poisoned-shiv.png")}
          item7={require("./../images/Items/tornado-trigger.png")}
          > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/bonesaw.png')}
        itemname="Bonesaw"
        class="WEAPON"
          tier="TIER 3"
        color="#ED5565"
        cost="2700"
         description="+40 Weapon Power 
+20% Attack Speed 
+25% Armor Pierce 
On Hit: Your basic attacks shred 10% of the target’s armor for 3s. Max 4 stacks."
          tip="Tip: Effective against turrets and enemies with high armor. Best if you or your team are already dealing lots of weapon damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/piercing-spear.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/book-of-eulogies.png')}
        itemname="Book of Eulogies"
        class="WEAPON"
          tier="TIER 1"
        color="#ED5565"
        cost="300"
        description="+5 Weapon Power 
+5% Weapon Lifesteal 
Passive: Restores 10 health whenever you kill a minion or monster (25 if using a melee default attack)."
          tip="Tip: Helps you stay healthy while last-hitting in lane."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/barbed-needle.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/breaking-point.png')}
        itemname="Breaking Point"
        class="WEAPON"
          tier="TIER 3"
        color="#ED5565"
        cost="2700"
        description="+20% Attack Speed 
+50 Weapon Power 
Passive: Gain 5 Weapon Power for every 100 weapon damage done to enemy heroes; +5/10 (melee/ranged) needed for each stack thereafter. 35 stacks max. Decays 5 stacks per second after you’ve stopped attacking for 2.5s."
          tip="Tip: Very weak at first, but becomes extremely powerful over the course of long battles."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        > 
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/heavy-steel.png')}
          itemname="Heavy Steel"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="1150"
          description="+45 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/breaking-point.png")}
          item5={require("./../images/Items/serpent-mask.png")}
          item6={require("./../images/Items/sorrowblade.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/lucky-strike.png')}
          itemname="Lucky Strike"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="900"
          description="+20% Critical Chance 
+5% Critical Damage "
          tip="Tip: Critical strikes deal 50% more damage than usual."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/minions-foot.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/tornado-trigger.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/minions-foot.png')}
          itemname="Minion's Foot"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10% Critical Chance 
+5% Critical Damage 
Passive: After buying this item, your very first attack on an enemy hero will crit.
"
          tip="Tip: You can sell and re-buy this item to refresh the passive."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/piercing-spear.png')}
          itemname="Piercing Spear"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="900"
          description="+8% Armor Pierce 
+15 Weapon Power
"
          tip="Tip: Armor pierce makes a % of your weapon damage bypass armor."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/bonesaw.png")}
          item5={require("./../images/Items/tension-bow.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/poisoned-shiv.png')}
          itemname="Poisoned Shiv"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="900"
          description="+30 Weapon Power 
+25% Attack Speed 
+10% Weapon Lifesteal 
Passive: Every 2 basic attacks will apply a mortal wound for 2s. 
Passive: Barbed Needle
"
          tip="Tip: Buy this against high sustain targets."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/barbed-needle.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/serpent-mask.png')}
          itemname="Serpent Mask"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+70 Weapon Power 
+15% Weapon Lifesteal 
Passive: Your next 400-800 (level 1-12) points of weapon damage to enemy heroes has +25% lifesteal, recharges over 40 seconds. 
Passive: Barbed Needle  
" 
          tip="Tip: Helps you stay alive in battle, especially if you are already dealing lots of weapon damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/barbed-needle.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/six-sins.png')}
          itemname="Six Sins"
          class="WEAPON"
          tier="TIER 2"
          color="#ED5565"
          cost="650"
          description="+25 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/weapon-blade.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/sorrowblade.png")}
          item5={require("./../images/Items/tension-bow.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/sorrowblade.png')}
          itemname="Sorrowblade"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="3100"
          description="+120 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/six-sins.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/spellsword.png')}
          itemname="Spellsword"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+85 Weapon Power 
+35% Cooldown Speed 
+2 Energy Recharge 
Passive: Every basic attack grants you 4 energy (12 on heroes)."
          tip="Tip: Particularly useful on heroes who run into energy problems."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/heavy-steel.png")}
          item2={require("./../images/Items/chronograph.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/swift-shooter.png')}
          itemname="Swift Shooter"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10% Attack Speed"
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tension-bow.png')}
          itemname="Tension Bow"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2700"
          description="+450 Max Health 
+20% CDR 
+4.5 Energy Recharge 
Breadth: You can hold 3 additional Scout Cam(s) and obtain charges 60s faster per Scout Cam. 
Depth: Scout Cams last 60s longer and take 3 extra hit(s) to kill. 
Activate: Flare"
          tip="Tip: Buy this to provide maximum vision control for your team."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/six-sins.png")}
          item2={require("./../images/Items/piercing-spear.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tornado-trigger.png')}
          itemname="Tornado Trigger"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2800"
          description="+40% Attack Speed 
+35% Critical Chance 
+5% Critical Damage 
Passive: Basic attacking grants you +10% bonus base movement speed for 1.2s.
"
          tip="Tip: Use this if you already have lots of weapon power but little attack speed, or if you wish to apply on-hit effects faster."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/blazing-salvo.png")}
          item2={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/tyrants-monocle.png')}
            itemname="Tyrant's Monocle"
          class="WEAPON"
          tier="TIER 3"
          color="#ED5565"
          cost="2900"
          description="+35% Critical Chance 
+15% Critical Damage 
+50 Weapon Power
"
          tip="Tip: Most effective when combined with more weapon power & attack speed."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/six-sins.png")}
          item2={require("./../images/Items/lucky-strike.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/weapon-blade.png')}
          itemname="Weapon Blade"
          class="WEAPON"
          tier="TIER 1"
          color="#ED5565"
          cost="300"
          description="+10 Weapon Power"
          tip="Tip: Weapon power increases the damage of basic attacks."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/heavy-steel.png")}
          item5={require("./../images/Items/piercing-spear.png")}
          item6={require("./../images/Items/six-sins.png")}
        >
        </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
                            <Itemsbox
            itemimg={require('./../images/Items/celestial-shroud.png')}
            itemname="Celestial Shroud"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="2200"
        tag="NEW"
        description="+95 Shield 
Passive: Grants immunity to abilities and debuffs. Disabled for 35s shortly after negating ability damage"
          tip="Tip: Buy this against heavy crystal damage or hard-engage heroes"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/kinetic-shield.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/aegis.png')}
        itemname="Aegis"
        class="DEFENSE"
        tier="TIER 3"
        color="#A0D46B"
        cost="2200"
        description="+40 Shield
+40 Armor
+200 Max Health

Activate: Reflex Block (45s cooldown)." 
tip="Tip: Greatly reduces damage from enemy abilities."
          builtfrom="BUILT FROM"
item1={require("./../images/Items/reflex-block.png")}
          item2={require("./../images/Items/warmail.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/atlas-pauldron.png')}
        itemname="Atlas Pauldron"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="1900"
        description="+65 Armor 
Activate: Maim nearby enemies, lowering their attack speed by 65% of their total for 4s in a 4-meter range. (45s cooldown)
"
          tip="Tip: Counters enemies with high attack speed, but you must get close to the enemies to affect them."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/coat-of-plates.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/capacitor-plate.png')}
        itemname="Capacitor Plate"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="2400"
        description="+400 Health 
+30 Armor 
+30 Shield 
+15% Cooldown Reduction 
+2.5 Energy Regen 
Passive: Your heals and barriers are 15% stronger. 
Passive: Your heals and barriers also grant other allied heroes bonus movement speed for 2s. (10s cooldown per hero)"
          tip="Tip: Buy this if your hero utilizes heals or barriers frequently."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/warmail.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/coat-of-plates.png')}
        itemname="Coat of Plates"
        class="DEFENSE"
          tier="TIER 3"
        color="#A0D46B"
        cost="750"
        description="+60 Armor"
          tip="Tip: Armor reduces damage from basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-armor.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/atlas-pauldron.png")}
          item5={require("./../images/Items/metal-jacket.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/crucible.png')}
        itemname="Crucible"
        class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
        cost="2100"
        description="+700 Max Health 
Activate: Trigger Reflex Block for you and nearby teammates. (75s cooldown)"
          tip="Tip: Protect your friends with Reflex Block!"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/reflex-block.png")}
        > 
        </Itemsbox>
        <Itemsbox
        itemimg={require('./../images/Items/dragonheart.png')}
        itemname="Dragonheart"
        class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
        cost="650"
          description="+400 Max Health"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/capacitor-plate.png")}
          item5={require("./../images/Items/crucible.png")}
          item6={require("./../images/Items/pulseweave.png")}
          item7={require("./../images/Items/slumbering-husk.png")}
        > 
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/fountain-of-renewal.png')}
          itemname="Fountain of Renewal"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+400 Max Health 
+60 Shield 
+20 Armor 
Passive: Lifespring 
Activate: Heals you and nearby allies for 2 health for each % missing health per second for 3s. (75s cooldown)"
          tip="Tip: Heal is especially powerful on allies who are almost dead."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/lifespring.png")}
          item2={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/kinetic-shield.png')}
          itemname="Kinetic Shield"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="800"
          description="+60 Shield"
          tip="Tip: Shield reduces damage from abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-shield.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/fountain-of-renewal.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/lifespring.png')}
          itemname="Ligespring"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="800"
          description="+200 Max Health 
Passive: Regenerate 2.5% of your missing health per second whenever you are out of combat with enemy heroes for 5s.
"
          tip="Tip: Helps you stay healthy in between battles."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/fountain-of-renewal.png")}
          item5={require("./../images/Items/pulseweave.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/light-armor.png')}
          itemname="Light Armor"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+25 Armor"
          tip="Tip: Armor reduces damage from basic attacks."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/coat-of-plates.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/light-shield.png')}
          itemname="Light Shield"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+25 Shield"
          tip="Tip: Shield reduces damage from abilities."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/metal-jacket.png')}
          itemname="Metal Jacket"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+90 Armor 
          Passive: Reduces incoming damage from Basic Attacks by 15%."
          tip="Tip: Armor reduces damage from basic attacks."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/coat-of-plates.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/oakheart.png')}
          itemname="Oakheart"
          class="DEFENSE"
          tier="TIER 1"
          color="#A0D46B"
          cost="300"
          description="+200 Max Health"
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/dragonheart.png")}
          item5={require("./../images/Items/lifespring.png")}
          item6={require("./../images/Items/reflex-block.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/pulseweave.png')}
          itemname="Pulseweave"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2700"
          description="+600 Health 
Passive: Upon taking damage from an enemy hero, gain bonus movement speed for 3s then deal 50 (+25% of bonus health) damage and slow enemies by 5% (+0.02% of bonus health) for 2s. (30s cooldown) 
Passive: +10% base movement speed 
Passive: Lifespring" 
          tip="Tip: Purchase this to strengthen your engage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/lifespring.png")}
          item2={require("./../images/Items/dragonheart.png")}
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/reflex-block.png')}
          itemname="Reflex Block"
          class="DEFENSE"
          tier="TIER 2"
          color="#A0D46B"
          cost="700"
          description="+200 Max Health 
Activate: Gain a barrier worth 100-400 (level 1-12) and block all debuffs for 1.5s. (75s cooldown) Can activate while stunned." 
          tip="Tip: Block dangerous but predictable abilities with your fast reflexes."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/crucible.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/rooks-decree.png')}
          itemname="Rook's Decree"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2400"
          description="+500 Health 
+30 Armor 
+30 Shield 
+5% Cooldown Reduction 
Passive: After using an ability, your next basic attack against an enemy hero applies a barrier (100+15% of bonus health) to all nearby allies for 2 seconds (10s cooldown)."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/warmail.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/slumbering-husk.png')}
          itemname="Slumbering Husk"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2600"
          description="+45 Armor 
+90 Shield 
Passive: Taking 25% of your max health in damage over 1s fortifies your remaining health for 2s (30s cooldown)."
          tip="Tip: Buy this to survive against opponents with high burst damage."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/warmail.png")}
          item2={require("./../images/Items/kinetic-shield.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/warmail.png')}
          itemname="Warmail"
          class="DEFENSE"
          tier="TIER 3"
          color="#A0D46B"
          cost="2600"
          description="++30 Shield 
+30 Armor"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/light-armor.png")}
          item2={require("./../images/Items/light-shield.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/aegis.png")}
          item5={require("./../images/Items/capacitor-plate.png")}
          item6={require("./../images/Items/slumbering-husk.png")}
        >
        </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}
                {value === 4 && <TabContainer>
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
                            <Itemsbox
        itemimg={require('./../images/Items/contraption.png')}
        itemname="Contraption"
        class="UTILITY"
          tier="TIER 3"
        color="#AC92EC"
        cost="2100"
          description="+350 Max Health 
+40% Cooldown Speed 
+2 Energy Recharge 
Activate: Target yourself to place a Scout Trap. Target the ground farther away to fire a Flare. 5s cooldown. 3 charges max. 20s per charge."
          tip="Tip: A great way to save inventory space while still being able to control vision around the map."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/flare-gun.png")}
          item2={require("./../images/Items/chronograph.png")}
        > 
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/flare-gun.png')}
          itemname="Flare Gun"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="600"
          description="+250 Max Health 
Activate: Fire a flare. 5s cooldown. 2 charges max. 20s per charge."
          tip="Tip: Use this to avoid being ambushed, especially in the late game."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/contraption.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/flare-gun.png')}
          itemname="Flare Loader"
          class="UTILITY"
          tier="TIER 1"
          color="#AC92EC"
          cost="300"
          tag="5V5"
          description="+150 Max Health 
          Activate: Flare - Fires a Flare that lasts 3s, granting vision and true sight in the area. Flares have 3 max charges and recover 1 charge every 75s."
          tip="Tip: Buy this to counter enemy stealth/vision and to safely check objectives."
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/halcyon-chargers.png')}
          itemname="Halcyon Chargers"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="1500"
          description="+150 Max Health 
+15% Cooldown Speed 
+250 Max Energy 
+3.5 Energy Recharge 
Passive: +0.5 move speed. (Does not stack with other boots.) 
Passive: Travel. 
Activate: Sprint for 2s (45s cooldown)."
          tip="Tip: Allows you to chase down enemy targets and use abilities more frequently... or to escape trouble!"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          item2={require("./../images/Items/void-battery.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/journey-boots.png')}
          itemname="Journey Boots"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="1500"
          description="+150 Max Health 
Passive: +0.5 move speed. (Does not stack with other boots.) 
Passive: Travel. 
Activate: Sprint for 2s (75s cooldown). Damaging heroes instantly sets the cooldown to 10s if it is above it."
          tip="Tip: Purchase to be able to chase down fleeing targets and sustain pressure."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/nullwave-gauntlet.png')}
          itemname="Nullwave Gauntlet"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2200"
          description="+400 Max Health 
+25% Cooldown Reduction 
+1 Energy Recharge 
Activate: Fires a blast at an enemy hero which explodes shortly after hitting its target, item silencing for 4s and dealing 50-100 + 15% max health in crystal damage (35s cooldown) (11 range)."
          tip="Tip: Use this against opponents with many active items."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
          item1={require("./../images/Items/dragonheart.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scoutpak.png')}
          itemname="ScoutPak"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="500"
          tag="5V5"
          description="+10% CDR 
+2.0 Energy Recharge 
Breadth: You can hold 1 additional Scout Cam(s) and obtain charges 30s faster per Scout Cam." 
          tip="Tip: Buy this to spread out vision across various areas."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/hourglass.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/superscout-2000.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/scouttuff.png')}
          itemname="ScoutTuff"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="500"
          tag="5V5"
          description="+250 Max Health 
Depth: Scout Cams last 30s longer and take 1 extra hit(s) to kill. 
Activate: Flare. 
" 
          tip="Tip: Buy this to strengthen your vision control in specific areas."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/superscout-2000.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/shiversteel.png')}
          itemname="Shiversteel"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="1950"
          description="+400 Max Health 
+25% Attack Speed 
Activate: For the next 4s (6s if you are melee), your basic attacks slow enemy heroes by 40% for 1.4s. (12s cooldown)"
          tip="Tip: Use this to slow fleeing enemies."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/dragonheart.png")}
          item2={require("./../images/Items/blazing-salvo.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/sprint-boots.png')}
          itemname="Sprint Boots"
          class="UTILITY"
          tier="TIER 1"
          color="#AC92EC"
          cost="300"
          description="Passive: +0.3 move speed. (Does not stack with other boots.) 
Activate: Sprint for 2s (150s cooldown)."
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/travel-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/stormcrown.png')}
          itemname="Stormcrown"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          description="+15% Cooldown Reduction 
+1 Energy Recharge 
+200 Max Health 
Stormguard: Your next basic attack will deal 140-480 bonus true damage (4s cooldown). 25% effectiveness against heroes and structures. (Does not stack with other Stormguard)"
          tip="Tip: Substantially increases your damage to objectives."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/chronograph.png")}
          item2={require("./../images/Items/stormguard-banner.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/stormguard-banner.png')}
          itemname="Stormguard Banner"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="600"
          description="+200 Max Health 
Stormguard: Your next basic attack will deal 30-200 bonus true damage (4s cooldown). 25% effectiveness against heroes and structures. (Does not stack with other Stormguard)
"
          tip="Tip: Helps you damage objectives such as turrets & jungle bosses."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/oakheart.png")}
          buildsto="BUILDS INTO"
          item4={require("./../images/Items/stormcrown.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/superscout-2000.png')}
          itemname="SuperScout2000"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          tag="5V5"
          description="+450 Max Health 
+20% CDR 
+4.5 Energy Recharge 
Breadth: You can hold 3 additional Scout Cam(s) and obtain charges 60s faster per Scout Cam. 
Depth: Scout Cams last 60s longer and take 3 extra hit(s) to kill. 
Activate: Flare"
          tip="Tip: Buy this to provide maximum vision control for your team."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/scoutpak.png")}
          item2={require("./../images/Items/scouttuff.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/teleport-boots.png')}
          itemname="Teleport Boots"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          tag="5V5"
          description="+150 Max Health 
+15 Shield 
+15 Armor 
Boots: +0.5 move speed (does not stack) 
Passive (Travel): +1 move speed when not in combat with heroes, monsters or turrets. 
Activate: After channeling for 2.5s, teleport to allied structure, minion or Scout Cam. Grant 600 barrier to the target while channeling. Gain a burst of move speed upon arrival (180s cooldown)."
          tip="Tip: Lets you quickly join your team from across the map or flank unsuspecting opponents."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/travel-boots.png')}
          itemname="Travel Boots"
          class="UTILITY"
          tier="TIER 2"
          color="#AC92EC"
          cost="350"
          description="+100 Max Health 
Passive: +0.3 move speed. (Does not stack with other boots.) 
Passive (Travel): +1 move speed when not in combat with heroes, monsters or turrets. 
Activate: Sprint for 2s (90s cooldown).
"
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/sprint-boots.png")}
        >
        </Itemsbox>
        <Itemsbox
          itemimg={require('./../images/Items/war-treads.png')}
          itemname="War Treads"
          class="UTILITY"
          tier="TIER 3"
          color="#AC92EC"
          cost="2000"
          description="+250 Max Energy 
+3 Energy Recharge"
          tip="Tip: Energy is needed to use your abilities."
          builtfrom="BUILT FROM"
          item1={require("./../images/Items/travel-boots.png")}
          item2={require("./../images/Items/dragonheart.png")}
        >
        </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}
                {value === 5 && <TabContainer>
                    <div className="ItemboxGroupScroll">
                        <div className="ItemboxGroup">
                            <Itemsbox
                                itemimg={require('./../images/Items/crystal-infusion.png')}
                                itemname="Crystal Infusion"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="500"
                                description="Consume: Temporarily gain 30-60 crystal power, 7.5-15% cooldown reduction, and 10-20 armor & shield based on your level. Lasts 150s. Can only have one infusion active at a time."
                                tip="Tip: Gain a powerful temporary advantage in your abilities."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/ironguard-contract.png')}
                                itemname="Dragonblood Contract"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="250"
                                description="Activate: After a brief delay, nearby enemy heroes are marked for 3 seconds. The next basic attack from an ally consumes the mark, slowing by 30% for 2s and dealing 100 bonus crystal damage. 10s cooldown. 2 max charges. 25s per charge."
                                tip="Tip: Use this to aggressively secure kills in the early game."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/flare.png')}
                                itemname="Flare"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="25"
                                description="Consume: Reveal an area for 5s. Can see over walls, into brush, and stealthed units. Scout Traps within this area are permanently revealed."
                                tip="Tip: Use this to avoid being ambushed, especially in the late game."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/healing-flask.png')}
                                itemname="Healing Flask"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="Eqp"
                                description="Activate: Block 115-500 (level 1-12) damage and recover 200 (+25 per hero level) health and energy over the next 5s (120 cooldown)."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/ironguard-contract.png')}
                                itemname="Ironguard Contract"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="250"
                                description="Passive: When a nearby ally kills a jungle monster or large lane minion, it heals you and your ally by 75 health each and 10 energy each."
                                tip="Tip: Use this to be battle ready coming out of the jungle. Be sure to sell this item when you are durable enough to survive the jungle."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/level-juice.png')}
                                itemname="Level Juice"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="0"
                                tag="PRACTICE"
                                description="Activate: Instantly level up."
                                tip="Tip: This item is only available in practice mode."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/minion-candy.png')}
                                itemname="Minion Candy"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="75"
                                description="Consume: Empowers nearby friendly minions for 60s and friendly jungle bosses for 30s. They are granted 40% increased damage, 120 armor, 60 shield, and 0.5 increased movement speed."
                                tip="Tip: Helps you push and siege enemy turrets, especially in early game."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/protector-contract.png')}
                                itemname="Protector Contract"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="250"
                                description="Activate: Grants a 120 health barrier to nearby allied heroes for 2s. 5s cooldown. 2 max charges, 15s per charge."
                                tip="Tip: Purchase this if you expect heavy aggression coming from the enemy team or want early teamfights." >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/scout-cam.png')}
                                itemname="Scout Cam"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="Eqp"
                                description="The enemy doesn't deserve privacy. These gizmos are the latest in high-tech surveillance. They're small, light and undetectable...except by other Scout Cams"
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/scout-trap.png')}
                                itemname="Scout Trap"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="50"
                                description="Consume: Place a trap at your feet. Trap grants vision & will explode on contact with enemy heroes after a short delay. Deals splash damage and reveals affected enemies for 5s."
                                tip="Tip: Use this to gain vision of strategic locations such as the Gold Mine or Kraken."
                            >
                            </Itemsbox>
                            <Itemsbox
                                itemimg={require('./../images/Items/weapon-infusion.png')}
                                itemname="Weapon Infusion"
                                class="CONSUMABLE"
                                tier="TIER 1"
                                color="#CCD1D9"
                                cost="500"
                                description="Consume: Temporarily gain 20-40 weapon power, 15-35%% attack speed, and 10-20 armor & shield based on your level. Lasts 150s. Can only have one infusion at a time."
                                tip="Tip: Gain a powerful temporary advantage in your basic attacks."
                            >
                            </Itemsbox>
                        </div>
                    </div>
                </TabContainer>}

            </div>
        );
    }
}

export default MobileItemsTab
