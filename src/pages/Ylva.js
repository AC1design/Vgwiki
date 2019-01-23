import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model'
import Layout from '../components/layout'
import Page from 'react-page-loading'

const Ylva = () => (
<Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
                bgdesktop={require("./../images/BG/Ylva_Desktop.jpg")}
                bgtablet={require("./../images/BG/Ylva_Tablet.jpg")}
                bgmobile={require("./../images/BG/Ylva_Mobile.jpg")}
        heroname="YLVA"
        role='JUNGLER, ASSASSIN'
        description="Team healer and damage enhancer with a large area stun."
                    spotlight="K6kHZW3Vq2g">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="703 - 2107"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="(+)"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="203 - 610"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="(+)"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="70 - 125"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 136.3%"
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
                value="5.5"
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
   bgmodel={require("./../images/BG/Ylvablurred.jpg")}
   model={require("./../images/models/Ylva.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                        video={require('./../images/SkillVideos/Ylva-P.mp4')}
                        title="Hunter’s Sense"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Ylva-P.png')}
                        text="Ylva can detect the location and movement direction of enemy heroes through walls and brush, as long as they are moving and within her vision range."
                        lvl2=' '
            />
            <Skillbox
                        video={require('./../images/SkillVideos/Ylva-A.mp4')}
                        title="Charge Shot"
                subtitle="A ABILITY"
                text="Ylva charges her weapon, causing her next basic attack to deal bonus damage based on the time spent charging. After it reaches full charge the attack will also stun. While active, Ylva is slowed. Reactivate to cancel. 
• Overdrive: At max rank, the time it takes to reach full charge is reduced."
                        image={require('./../images/Ability/Ylva-A.png')}
                        stats1='Cooldown'
                        row11='8s'
                        row12='7.5s'
                        row13='7s'
                        row14='6.5s'
                        row15='6s'
                        row16=' '
                        row17=' '
                        stats2='Energy Cost'
                        row21='25'
                        row22='30'
                        row23='35'
                        row24='40'
                        row25='45'
                        row26=' '
                        row27=' '
                        stats3='Damage'
                        row31='0'
                        row32='0'
                        row33='0'
                        row34='0'
                        row35='0'
                        row36=' '
                        row37='100%'
                        stats4='Bonus Damage'
                        row41='80'
                        row42='120'
                        row43='160'
                        row44='200'
                        row45='240'
                        row46='100%'
                        row47=' '
                        stats5='Bonus Range'
                        row51='0'
                        row52='0'
                        row53='0'
                        row54='0'
                        row55='0'
                        row56=' '
                        row57=' '
                        stats6='Stun Duration'
                        row61='1s'
                        row62='1s'
                        row63='1s'
                        row64='1s'
                        row65='1s'
                        row66=' '
                        row67=' '
                        stats7='Charge Time'
                        row71='1.6s'
                        row72='1.6s'
                        row73='1.6s'
                        row74='1.6s'
                        row75='1.2s'
                        row76=' '
                        row77=' '
                        stats7='Duration'
                        row71='6s'
                        row72='6s'
                        row73='6s'
                        row74='6s'
                        row75='6s'
                        row76=' '
                        row77=' '
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CR%'
                        wp='WP%'
                        color='#38eeff'
                        color2='red'
            />
            <Skillbox
                        video={require('./../images/SkillVideos/Ylva-B.mp4')}
                        title="Crimson Fang"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Ylva-B.png')}
                text="Ylva lunges at her target to deliver a powerful strike that deals more damage to immobilized targets. She then gains additional move and attack speed for a short duration. 
• Overdrive: At max rank, lunge range is increased."
                        stats1='Cooldown'
                        row11='10s'
                        row12='9.5s'
                        row13='9s'
                        row14='8.5s'
                        row15='8s'
                        row16=' '
                        row17=' '
                        stats2='Energy Cost'
                        row21='25'
                        row22='30'
                        row23='35'
                        row24='40'
                        row25='45'
                        row26=' '
                        row27=' '
                        stats3='Damage'
                        row31='140'
                        row32='190'
                        row33='240'
                        row34='290'
                        row35='390'
                        row36='175%'
                        row37='140%'
                        stats4='Range'
                        row41='5.5'
                        row42='5.5'
                        row43='5.5'
                        row44='5.5'
                        row45='7.5'
                        row46=' '
                        row47=' '
                        stats5='Bonus Move Speed Duration'
                        row51='3s'
                        row52='3s'
                        row53='3s'
                        row54='3s'
                        row55='3s'
                        row56=' '
                        row57=' '
                        stats6='Bonus Attack Speed'
                        row61='40%'
                        row62='40%'
                        row63='40%'
                        row64='40%'
                        row65='40%'
                        row66=' '
                        row67=' '
                        stats7='Bonus Move Speed'
                        row71='1'
                        row72='1'
                        row73='1'
                        row74='1'
                        row75='1'
                        row76=' '
                        row77=' '
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CR%'
                        wp='WP%'
                        color='#38eeff'
                        color2='red'
            />
            <Skillbox
                        video={require('./../images/SkillVideos/Ylva-C.mp4')}
                title="VERSE OF JUDGEMENT"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Ylva-C.png')}
                text="Ylva places a mine that arms and stealths. When an enemy hero touches it, it will explode after a short delay, causing all enemies within range to take damage and become rooted. Only 1 trap can exist at once. 
• Traps expire after a minute. Basic attacks reduce their remaining duration."
                        stats1='Cooldown'
                        row11='25s'
                        row12='20s'
                        row13='15s'
                        row16=' '
                        stats2='Energy Cost'
                        row21='50'
                        row22='60'
                        row23='70'
                        row26=' '
                        stats3='Damage'
                        row31='300'
                        row32='450'
                        row33='600'
                        row36='150%'
                        stats4='Trap Limit'
                        row41='1'
                        row42='1'
                        row43='1'
                        row46=' '
                        stats5='Root Duration'
                        row51='1.6s'
                        row52='1.8s'
                        row53='2s'
                        row56=' '
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
                        title="SWIFT SHOT"
                subtitle="RARE"
                color="#6393F9"
                        text="Charge Shot (A) reaches full charge faster."
                        text2="• Charge Time 80%"
                text3="• Cooldown 100%"
                text4="• Damage 100%"
                image={require('./../images/Talents/Ylva_Rare.png')}
            />
            <Talentbox
                title="MULTY MINE"
                subtitle="EPIC"
                color="#7A02EA"
                        text="Ylva may place up to 3 Blinding Mines (Ult)."
                text2="• Trap Limit 3"
                text3="• Cooldown 80%"
                        text4="• Damage 75%"
                        text5="• Bonus Range 6"
                image={require('./../images/Talents/Ylva_Epic.png')}
            />
            <Talentbox
                title="SHATTERED FANG"
                subtitle="LEGENDARY"
                color="#FF9000"
                        text="Ylva places a Blinding Mine (Ult) at her feet after using Crimson Fang (B). "
                text2="• Cooldown 90%"
                text3="• Damage 100%"
                image={require('./../images/Talents/Ylva_Legendary.png')}
            />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Ylva