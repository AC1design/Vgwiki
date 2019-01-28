import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Catherine = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Catherine_Desktop.jpg")}
        bgtablet={require("./../images/BG/Catherine_Tablet.jpg")}
        bgmobile={require("./../images/BG/Catherine_Mobile.jpg")}
        heroname="CATHERINE"
        role='JUNGLE, PROTECTOR'
        description="Disruptive tank with lots of stuns and a powerful silence."
                spotlight="i2cphmHljZM">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="808 - 2673"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="4.06 - 7.91"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="200 - 464"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="1.33 - 3.09"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="74 - 141"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 136.3%"
                color="#f48596"
                />
                <Statbox
                title="ARMOR"
                value="30 - 85"
                color="#f6ee71"
                />
                <Statbox
                title="SHIELD"
                value="20 - 60"
                color="#f6ee71"
                />
                <Statbox
                title="ATTACK RANGE"
                value="1.8"
                color="#e19efb"
                />
                <Statbox
                title="MOVE SPEED"
                value="3.6"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Catherineblurred.jpg")}
   model={require("./../images/models/Catherine.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-P-Captain-of-the-Guard.mp4'}
                title="CAPTAIN OF THE GUARD"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Catherine-P.png")}
                text="Catherine gains 1 armor and shield every time she stuns or silences or silences an enemy hero with her abilities."
                lvl2=" "
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-A-Merciless-Pursuit.mp4'}
                title="MERCILESS PURSUITS"
                subtitle="A ABILITY"
                text="Catherine gains a burst of move speed. Her next basic attack is replaced by a powerful stun attack. 
• Resets basic-attack cooldown on activation."
                        image={require("./../images/Ability/Catherine-A.jpg")}
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
                            row11='16s'
                            row12='15s'
                            row13='14s'
                            row14='13s'
                            row15='12s'
                            row16=' '
                            row17=' '
                            stats2='Energy Cost'
                            row21='30'
                            row22='40'
                            row23='50'
                            row24='60'
                            row25='70'
                            row26=' '
                            row27=' '
                            stats3='Damege'
                            row31='35'
                            row32='60'
                            row33='85'
                            row34='110'
                            row35='135'
                            row36='100%'
                            row37='100%'
                            stats4='Bonus Speed Duration'
                            row41='1.5'
                            row42='1.5'
                            row43='1.5'
                            row44='1.5'
                            row45='2'
                            row46=' '
                            row47=' '
                            stats5='Stun Duration'
                            row51='0.7s'
                            row52='0.7s'
                            row53='0.7s'
                            row54='0.7s'
                            row55='0.9s'
                            row56=' '
                            row57=' '
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-C-Blast-Tremor.mp4'}
                title="STORMGUARD"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Catherine-B.jpg")}
                text="Activates a protective bubble that reflects damage back to nearby enemies - especially when it comes in large bursts. 
• Reflects any damage above 7.5% of base maximum health. 
• Reflect damage is spread out to up 3 nearby enemies. 
• Each reflection reduces the shield duration by 0.4s. 
• Also damages enemies around Catherine while Stormguard is on."
                            lvl1='LVL 1'
                            lvl2='LVL 2'
                            lvl3='LVL 3'
                            lvl4='LVL 4'
                            lvl5='LVL 5'
                            cp='CP%'
                            color='#38eeff'
                            stats1='Cooldown'
                            row11='9s'
                            row12='7.5s'
                            row13='7s'
                            row14='6.5s'
                            row15='6s'
                            row16=' '
                            row17=' '
                            stats2='Energy Cost'
                            row21='40'
                            row22='50'
                            row23='60'
                            row24='70'
                            row25='80'
                            row26=' '
                            stats3='Damege/sec'
                            row31='45'
                            row32='65'
                            row33='85'
                            row34='105'
                            row35='125'
                            row36='50%'
                            stats4='Duration'
                            row41='4s'
                            row42='4s'
                            row43='4s'
                            row44='4s'
                            row45='4s'
                            row46=' '
                            stats5='Bonus Reflect Damage'
                            row51='0%'
                            row52='5%'
                            row53='10%'
                            row54='15%'
                            row55='25%'
                            row56=' '
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-B-Stormguard.mp4'}
                title="BLAST TREMOR"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Catherine-C.jpg")}
                text="Catherine slams the ground, damaging and silencing enemies in a large cone in front of her."
                            lvl1='LVL 1'
                            lvl2='LVL 2'
                            lvl3='LVL 3'
                            cp='CP%'
                            color='#38eeff'
                            stats1='Cooldown'
                            row11='90s'
                            row12='80s'
                            row13='70s'
                            row16=' '
                            stats2='Energy Cost'
                            row21='120'
                            row22='140'
                            row23='160'
                            row26=' '
                            stats3='Damage'
                            row31='400'
                            row32='550'
                            row33='700'
                            row36='150%'
                            stats4='Range'
                            row41='11'
                            row42='11'
                            row43='11'
                            row46=' '
                            stats5='Silence Duration'
                            row51='1.5s'
                            row52='2s'
                            row53='2.5s'
                            row56=' '/>
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
                title="Advancing Guard"
                subtitle="RARE"
                color="#6393F9"
                text="Captain of the Guard (Perk) also grants temporary bonys crystal and weapon power for 30s."
                text2="• Duration 30s"
                text3="• Weapon Power/Stack +1% (+1%)"
                text4="• Crystal Power/Stack +1% (+1%)"
                image={require('./../images/Talents/Catherine_Rare.png')}
            />
            <Talentbox
                title="Quick Pursuit"
                subtitle="EPIC"
                color="#7A02EA"
                text="While Stormguard (B) is active, Catherine’s basic attacks will reduce the cooldown of Merciless Pursuit (A) and Blast Tremor (Ult)."
                text2="• Merciless Pursuit Reduction 10% (+1.5%)"
                text3="• Blast Tremor Reduction 5% (+1%)"
                image={require('./../images/Talents/Catherine_Epic.png')}
            />
            <Talentbox
                title="Shockwave"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Blast Tremor (Ult) knock back enemies but no longer silences."
                text2="• Cooldown 70% (-7.5%)"
                text3="• Damage 115% (+15%)"
                image={require('./../images/Talents/Catherine_Legendary.png')}
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
                title="Queen's Knight Catherine"
                text="Rare"
                image={require('./../images/Skins/Catherine_Paragon_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Paragon Catherine"
                text="Epic"
                image={require('./../images/Skins/Catherine_Paragon_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Serpent Mask Catherine"
                text="Legendary"
                image={require('./../images/Skins/Catherine_Paragon_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Gladiator Catherine"
                text="Epic"
                image={require('./../images/Skins/Catherine_Gladiator_E.png')} />
            <Skinbox
                color="#FADA5E"
                title="Winter War Catherine"
                text="Limited Edition"
                image={require('./../images/Skins/Catherine_Winter_War_LE.png')} />
            <Skinbox
                color="red"
                title="Winter War Catherine"
                text="Special Edition"
                image={require('./../images/Skins/Catherine_Winter_War_SE.png')} />
            <Skinbox
                color="red"
                title="Championship Catherine"
                text="Special Edition"
                image={require('./../images/Skins/Catherine_Championship.png')} />
            <Skinbox
                color="red"
                title="Summer Party Catherine"
                text="Special Edition"
                image={require('./../images/Skins/Catherine_Summer_Red.png')} />
            <Skinbox
                color="red"
                title="Surf's Up Catherine"
                text="Special Edition"
                image={require('./../images/Skins/Catherine_Summer_Blue.png')} />
            <Skinbox
                color="red"
                title="Beeach Patrol Catherine"
                text="Special Edition"
                image={require('./../images/Skins/Catherine_Summer_Black_Orange.png')} />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Catherine