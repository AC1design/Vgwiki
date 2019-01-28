import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Blackfeather = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Blackfeather_Desktop.jpg")}
        bgtablet={require("./../images/BG/Blackfeather_Tablet.jpg")}
        bgmobile={require("./../images/BG/Blackfeather_Mobile.jpg")}
        heroname="BLACKFEATHER"
        role='LANE, ASSASSIN'
        description="Evasive fighter who excels at chasing and cleaning up fragile enemies."
                spotlight="d7-fyE9P7QI">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="657 - 2387"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="-"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="81 - 160"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
                color="#f48596"
                />
                <Statbox
                title="ARMOR"
                value="25 - 75"
                color="#f6ee71"
                />
                <Statbox
                title="SHIELD"
                value="20 - 55"
                color="#f6ee71"
                />
                <Statbox
                title="ATTACK RANGE"
                value="1.8"
                color="#e19efb"
                />
                <Statbox
                title="MOVE SPEED"
                value="3.5"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Blackfeatherblurred.jpg")}
   model={require("./../images/models/Blackfeather.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="HEARTTHROB"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Blackfeather-P.png")}
                text="Blackfeather's attacks and abilities apply Heartthrob stacks to enemies. Any time stacks are added or refreshed, Blackfeather deals bonus crystal damage for each stack already on the target. 
• Bonus damage: 5-10 (level 1-12) (+15% of crystal power). 
• Mas 2 stacks on minions and monsters, 5 stacks on heroes and objectives. 
• Stacks appear as broken hearts around enemies. 
• Instead of energy, Blackfeather uses Focus for his abilities. This is capped at 100 and naturally regenerates 10 per second. Blackfeather also recovers and additional 10 focus for each basic attack he lands."
            />
            <Skillbox
                title="FEINT OF HEART"
                subtitle="A ABILITY"
                text="Blackfeather lunges to his target with a thrust of his sword, then gains 2.2 bonus movement speed for 3s. 
• If the target has full Heartthrob stacks, it deals bonus weapon damage based on target's missing health. 
• Overdrive: At max rank, the cooldown for Feint of Heart is reset if the target is killed within 0.5s. 
• Execute damage is capped against non-heroes. 
• This ability triggers basic-attack effects."
                        image={require("./../images/Ability/Blackfeather-A.jpg")}
                            lvl1='LVL 1'
                            lvl2='LVL 2'
                            lvl3='LVL 3'
                            lvl4='LVL 4'
                            lvl5='LVL 5'
                            cp='CP%'
                            color='#38eeff'
                            wp='WP%'
                            color2='red'
                            stats1='Cooldown'
                            row11='9s'
                            row12='8.5s'
                            row13='8s'
                            row14='7.5s'
                            row15='7s'
                            row16=' '
                            row17=' '
                            stats2='Energy Cost'
                            row21='0'
                            row22='0'
                            row23='0'
                            row24='0'
                            row25='0'
                            row26=' '
                            row27=' '
                            stats3='Damege'
                            row31='60'
                            row32='95'
                            row33='130'
                            row34='165'
                            row35='200'
                            row36='50%'
                            row37='100%'
                            stats4='Missing Health %'
                            row41='15%'
                            row42='15%'
                            row43='15%'
                            row44='15%'
                            row45='25%'
                            row46=' '
                            row47=' '
                            stats5='Focus Cost'
                            row51='60'
                            row52='60'
                            row53='60'
                            row54='60'
                            row55='60'
                            row56=' '
                            row57=' '
                            stats6='Stacks'
                            row61='1'
                            row62='2'
                            row63='3'
                            row64='4'
                            row65='5'
                            row66=' '
                            row67=' '
            />
            <Skillbox
                title="ON POINT"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Blackfeather-B.jpg")}
                text="Blackfeather pierces all enemies in a line, damaging them. 
• Overdrive: At max rank, On Point gains increased range. 
• If this hits at least one enemy hero, Blackfeather also gains a 1.2s barrier that scales with 5% of his bonus health and recovers 40 focus. 
• The amount of focus recovered is further increased with 2% of his max energy and 50% of his Energy Regen. 
• Deals less damage to minions."
                            lvl1='LVL 1'
                            lvl2='LVL 2'
                            lvl3='LVL 3'
                            lvl4='LVL 4'
                            lvl5='LVL 5'
                            cp='CP%'
                            color='#38eeff'
                            wp='WP%'
                            color2='red'
                            stats1='Cooldown'
                            row11='6s'
                            row12='5.5s'
                            row13='5s'
                            row14='4.5s'
                            row15='3.5s'
                            row16=' '
                            row17=' '
                            stats2='Energy Cost'
                            row21='0'
                            row22='0'
                            row23='0'
                            row24='0'
                            row25='0'
                            row26=' '
                            row27=' '
                            stats3='Damege'
                            row31='80'
                            row32='120'
                            row33='160'
                            row34='200'
                            row35='240'
                            row36='180%'
                            row37='120%'
                            stats4='Focus Cost'
                            row41='60'
                            row42='60'
                            row43='60'
                            row44='60'
                            row45='40'
                            row46=' '
                            row47=' '
                            stats5='Range'
                            row51='7'
                            row52='7'
                            row53='7'
                            row54='7'
                            row55='9'
                            row56=' '
                            row57=' '
                            stats6='Stacks'
                            row61='125'
                            row62='175'
                            row63='225'
                            row64='275'
                            row65='325'
                            row66=' '
                            row67=' '
            />
            <Skillbox
                title="ROSE OFFENSIVE"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Blackfeather-C.jpg")}
                text="Blackfeather dashes and slashes all enemies along his path. 
• During the dash, Blackfeather is immune to negative effects and has fortified health. 
• This ability has 2 charges. 
• This ability triggers basic-attack effects."
                            lvl1='LVL 1'
                            lvl2='LVL 2'
                            lvl3='LVL 3'
                            cp='CP%'
                            color='#38eeff'
                            wp='WP%'
                            color2='red'
                            stats1='Charge Time	'
                            row11='40s'
                            row12='30s'
                            row13='20s'
                            row16=' '
                            row17=' '
                            stats2='Energy Cost'
                            row21='0'
                            row22='0'
                            row23='0'
                            row26=' '
                            row27=' '
                            stats3='Damege'
                            row31='100'
                            row32='150'
                            row33='200'
                            row36='50%'
                            row37='100%'
                            stats4='Cooldown'
                            row41='0.2s'
                            row42='0.2s'
                            row43='0.2s'
                            row46=' '
                            row47=' '
                            stats5='Focus Cost'
                            row51='60'
                            row52='40'
                            row53='20'
                            row56=' '
                            row57=' '
                            stats6='Fortified Health'
                            row61='75'
                            row62='125'
                            row63='175'
                            row66=' '
                            row67=' '
            />
        </div>
    </div>
    <div className="Title">
                <h1>TALENTS (LVL 1 + % PER LVL)</h1>
        <div className="line">
        </div>
    </div>
    <div className="TalentboxGroupScroll">
        <div className="TalentboxGroup">
            <Talentbox
                title="Hummingbird Heart"
                subtitle="RARE"
                color="#6393F9"
                text="Heartthrob (Perk) lasts 4s longer on targets. Blackfeather passively gains weapon power and attack speed."
                text2="• Passive Attack Speed +20% (+2%)"
                text3="• Passive Weapon Power +5% (+1%)"
                image={require('./../images/Talents/Blackfeather_Rare.png')}
            />
            <Talentbox
                title="Point Guard"
                subtitle="EPIC"
                color="#7A02EA"
                text="Landing On Point (B) on an enemy hero grants a stronger barrier to nearby allies for 2s."
                text2="• Barrier 150% (+10%)"
                image={require('./../images/Talents/Blackfeather_Epic.png')}
            />
            <Talentbox
                title="Elusiveness"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Rose Offensive (Ult) has 2 additional charges."
                text2="• Damage 100%"
                text3="• Focus Cost 5%"
                text4="• Charge Time 50%"
                image={require('./../images/Talents/Blackfeather_Legendary.png')}
            />
        </div>
    </div>
    <div className="Title">
        <h1>SKINS</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkinboxGroupScroll">
        <div className="SkinboxGroup">
        <Skinbox
                color="#6393F9"
                title="Dynasties Blackfeather"
                text="Rare"
                image={require('./../images/Skins/Blackfeather_Dynasties_R.png')} />
            <Skinbox
                color="#FF9000"
                title="Champion Blackfeather"
                text="Legendary"
                image={require('./../images/Skins/Blackfeather_Champion_L.png')} />
            <Skinbox
                color="red"
                title="Love Bites Blackfeather"
                text="Special Edition"
                image={require('./../images/Skins/Blackfeather_Love_Bites_SE.png')} />
            <Skinbox
                color="red"
                title="Summer Party Blackfeather"
                text="Special Edition"
                image={require('./../images/Skins/Blackfeather_Summer_Party.png')} />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Blackfeather