import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'


const Magnus = () => (
    <Layout>
        <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
        <Heroes
            bgdesktop={require("./../images/BG/Magnus_Desktop.jpg")}
            bgtablet={require("./../images/BG/Magnus_Tablet.jpg")}
            bgmobile={require("./../images/BG/Magnus_Mobile.jpg")}
            heroname="MAGNUS"
            role='LANE, MAGE'
            description="A powerful arcanist decimating enemies from afar"
            spotlight="g9W8C8hPA2w">
        </Heroes>
        <div className="Title">
            <h1>STATS (LEVEL 1-12)</h1>
            <div className="line" />
        </div>
        <div className="StatboxGroupScroll">
            <div className="StatboxGroup">
                <Statbox
                    title="HEALTH"
                    value="648 - 2065"
                    color="#4eec8b"
                />
                <Statbox
                    title="HEALTH REGEN"
                    value="(+)"
                    color="#4eec8b"
                />
                <Statbox
                    title="ENERGY"
                    value="380 - 732"
                    color="#5bbcff"
                />
                <Statbox
                    title="ENERGY REGEN"
                    value="(+)"
                    color="#5bbcff"
                />
                <Statbox
                    title="WEAPON DAMAGE"
                    value="80 - 158"
                    color="#f48596"
                />
                <Statbox
                    title="ATTACK SPEED"
                    value="100% - 125%"
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
                    value="6"
                    color="#e19efb"
                />
                <Statbox
                    title="MOVE SPEED"
                    value="3.4"
                    color="#e19efb"
                />
            </div>
        </div>
        <div className="Title">
            <h1>3D MODEL</h1>
            <div className="line" />
        </div>
        <Models
            bgmodel={require("./../images/BG/Magnusblurred.jpg")}
            model={require("./../images/models/Magnus.png")}>
        </Models>
        <div className="Title">
            <h1>SKILLS (CLICK FOR MORE)</h1>
            <div className="line">
            </div>
        </div>
        <div className="SkillboxGroupScroll">
            <div className="SkillboxGroup">
                <Skillbox
                    video=""
                    title="ARCANE RITE"
                    subtitle="HEROIC PERK"
                    image={require('./../images/Ability/Magnus-P.jpg')}
                    text="Whenever an enemy is hit by any of Magnus’ abilities, they are afflicted with an Arcane Mark for 4 seconds. Magnus’ abilities have bonus effects when hitting enemies afflicted with Arcane Mark. 
Additionally, Magnus can basic attack an afflicted target, consuming the Arcane Mark and exploding it for 50-180 (level 1-12) (+100% crystal power) bonus crystal power."  
                />
                <Skillbox
                    video=""
                    title="MYSTIC MISSLE"
                    subtitle="A ABILITY"
                    text="Magnus fires a magic missile in the target direction, dealing crystal damage to the first target hit.
• Hitting enemies with Arcane Mark scatters the missile to all other nearby targets."
                    image={require('./../images/Ability/Magnus-A.jpg')}
                    stats1='Cooldown'
                    row11='6s'
                    row12='6s'
                    row13='6s'
                    row14='6s'
                    row15='4s'
                    row16=' '
                    stats2='Energy Cost'
                    row21='30'
                    row22='35'
                    row23='40'
                    row24='45'
                    row25='50'
                    row26=' '
                    stats3='Damage'
                    row31='80'
                    row32='140'
                    row33='200'
                    row34='260'
                    row35='320'
                    row36='100%'
                    stats4='Damage (Split Missiles)'
                    row41='60'
                    row42='105'
                    row43='150'
                    row44='195'
                    row45='240'
                    row46='75%'
                    stats5='Range'
                    row51='10'
                    row52='10'
                    row53='10'
                    row54='10'
                    row55='12'
                    row56=' '
                    lvl1='LVL 1'
                    lvl2='LVL 2'
                    lvl3='LVL 3'
                    lvl4='LVL 4'
                    lvl5='LVL 5'
                    cp='CR%'
                    color='#38eeff'
                />
                <Skillbox
                    video=""
                    title="CHRONO DRIVER"
                    subtitle="B ABILITY"
                    image={require('./../images/Ability/Magnus-B.jpg')}
                    text="Magnus sends a disc of time magic in the target direction that returns to him, dealing crystal damage to all targets it passes through.
• Hitting enemies with Arcane Mark briefly stuns them."
stats1='Cooldown'
                    row11='14s'
                    row12='13s'
                    row13='12s'
                    row14='11s'
                    row15='10s'
                    row16=' '
                    stats2='Energy Cost'
                    row21='60'
                    row22='70'
                    row23='80'
                    row24='90'
                    row25='100'
                    row26=' '
                    stats3='Damage'
                    row31='40'
                    row32='70'
                    row33='100'
                    row34='130'
                    row35='160'
                    row36='40%'
                    stats4='Stun Duration'
                    row41='0.4s'
                    row42='0.5s'
                    row43='0.6s'
                    row44='0.7s'
                    row45='0.9s'
                    row46=' '
                    lvl1='LVL 1'
                    lvl2='LVL 2'
                    lvl3='LVL 3'
                    lvl4='LVL 4'
                    lvl5='LVL 5'
                    cp='CR%'
                    color='#38eeff'
                />
                <Skillbox
                    video=""
                    title="SERAPHIC FLARE"
                    subtitle="ULTIMATE"
                    image={require('./../images/Ability/Magnus-C.jpg')}
                    text="Magnus gathers arcane energy in the target direction for 1 second, dealing massive damage to all targets in the area afterwards.
• Deals 50% bonus damage to targets with Arcane Mark.
• If an enemy hero dies within 0.3 seconds of getting hit by this ability, then they will explode in Arcane Magic, launching Mystic Missile to all nearby targets."
                    stats1='Cooldown'
                    row11='80s'
                    row12='70s'
                    row13='60s'
                    row14=' '
                    stats2='Energy Cost'
                    row21='100'
                    row22='125'
                    row23='150'
                    row24=' '
                    stats3='Damage'
                    row31='250'
                    row32='375'
                    row33='500'
                    row36='120%'
                    lvl1='LVL 1'
                    lvl2='LVL 2'
                    lvl3='LVL 3'
                    cp='CR%'
                    color='#38eeff'
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
                    title="MYSTIC SEER"
                    subtitle="RARE"
                    color="#6393F9"
                    text="Arcane Mark lasts longer and reveals marked targets."
                    text2="• Bonus Duration 0.4s (+0.4)"
                    image={require('./../images/Talents/Magnus_Rare.png')}
                />
                <Talentbox
                    title="ARCANE ALCHEMIST"
                    subtitle="EPIC"
                    color="#7A02EA"
                    text="Banishing Kick (B) knocks targets further."
                    text2="• Passive Attack Speed 7.5% (+7.5%)"
                    image={require('./../images/Talents/Magnus_Epic.png')}
                />
                <Talentbox
                    title="INFINITE ARCANA"
                    subtitle="LEGENDARY"
                    color="#FF9000"
                    text="Hitting an enemy hero with an ability reduces all ability cooldowns"
                    text2="• Cooldown -6% (-6%)"
                    image={require('./../images/Talents/Magnus_Legendary.png')}
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
                    title="Masquerade Magnus"
                    text="Rare"
                    image={require('./../images/Skins/Magnus_Masquerade.jpg')} />
            </div>
        </div>
        </Page>
    </Layout>
)


export default Magnus