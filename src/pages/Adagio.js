import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model'
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Adagio = () => (
<Layout>
<div style={{ height: "100%" }}>
<meta name="theme-color" content="#1f1f21"/>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
                bgdesktop={require("./../images/BG/Adagio_Desktop.jpg")}
                bgtablet={require("./../images/BG/Adagio_Tablet.jpg")}
                bgmobile={require("./../images/BG/Adagio_Mobile.jpg")}
        heroname="ADAGIO"
        role='JUNGLER, PROTECTOR'
        description="Team healer and damage enhancer with a large area stun."
                spotlight="TQx1TVGANF4">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="685 - 2308"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="2.18 - 5.04"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="400 - 785"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="2.67 - 5.2"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="75 - 117"
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
                value="6.7"
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
   bgmodel={require("./../images/BG/Adagioblurred.jpg")}
   model={require("./../images/models/Adagio.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-P-Arcane-Renewal.mp4'}
                title="ARCANE RENEWAL"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Adagio-P.png')}
                text="Whenever enemies burning with Arcane Fire take damage from any source, Adagio regenerates 25% of that damage as energy."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-A-Gift-of-Fire.mp4'}
                title="GIFT OF FIRE"
                subtitle="A ABILITY"
                text="Heals a target ally, then splashes Arcane Fire onto nearby enemies. If Adagio heals himself, he'll also apply a heavy slow to nearby enemies.
                Arcane Fire (status effect): Burns the target every second and causes Adagio's other abilities to deal more damage. 
• Burst heals the target instantly, followed by a gradual heal over the next few seconds. 
• Burst Heal is increased by 9% of Adagio's bonus health. 
• When cast on self, slows nearby enemies by 70% for 0.7s. 
• Resets basic-attack cooldown on activation."
                        image={require('./../images/Ability/Adagio-A.jpg')}
                        stats1='Cooldown'
                        row11='10'
                        row12='9.5'
                        row13='9'
                        row14='8.5'
                        row15='8'
                        row16=' '
                        stats2='Energy Cost'
                        row21='120'
                        row22='135'
                        row23='150'
                        row24='165'
                        row25='180'
                        row26=' '
                        stats3='Fire Duration'
                        row31='5'
                        row32='5.5'
                        row33='6'
                        row34='6.5'
                        row35='7'
                        row36=' '
                        stats4='Fire Damage/s'
                        row41='10'
                        row42='20'
                        row43='30'
                        row44='40'
                        row45='60'
                        row46='25%'
                        stats5='Heal Duration'
                        row51='3'
                        row52='3'
                        row53='3'
                        row54='3'
                        row55='3'
                        row56=' '
                        stats6='Burst Heal'
                        row61='40'
                        row62='60'
                        row63='80'
                        row64='100'
                        row65='140'
                        row66='30%'
                        stats7='Heal/s'
                        row71='15'
                        row72='20'
                        row73='25'
                        row74='30'
                        row75='35'
                        row76='10% '
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CP%'
                        color='#38eeff'
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-B-Agent-of-Wrath.mp4'}
                title="AGENT OF WRATH"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Adagio-B.jpg')}
                text="Temporarily boosts an allied hero's next several basic attacks for 6s. 
• Deals bonus damage to enemies afflicted by Arcane Fire. 
• Bonus damage is increased if Adagio casts this spell on himself. 
• Resets basic-attack cooldown on activation."
                        stats1='Cooldown'
                        row11='10'
                        row12='10'
                        row13='10'
                        row14='10'
                        row15='10'
                        row16=' '
                        stats2='Energy Cost'
                        row21='105'
                        row22='130'
                        row23='155'
                        row24='180'
                        row25='205'
                        row26=' '
                        stats3='Number of Attacks'
                        row31='5'
                        row32='5'
                        row33='5'
                        row34='5'
                        row35='7'
                        row36=' '
                        stats4='Damage'
                        row41='30'
                        row42='50'
                        row43='70'
                        row44='90'
                        row45='130'
                        row46='40%'
                        stats5='Arcane Fire Bonus'
                        row51='5'
                        row52='15'
                        row53='25'
                        row54='35'
                        row55='55'
                        row56='40%'
                        stats6='Self-cast Bonus'
                        row61='5'
                        row62='10'
                        row63='15'
                        row64='20'
                        row65='30'
                        row66='20%'
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CP%'
                        color='#38eeff'
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-C-Verse-of-Judgement.mp4'}
                title="VERSE OF JUDGEMENT"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Adagio-C.jpg')}
                text="Adagio channels for 2s then deals heavy damage to all enemies in a wide ring around him. Enemies burning with Arcane Fire are also stunned.
                Adagio temporarily gains fortified health while channeling."
                        stats1='Cooldown'
                        row11='100'
                        row12='80'
                        row13='60'
                        row16=' '
                        stats2='Energy Cost'
                        row21='140'
                        row22='190'
                        row23='240'
                        row26=' '
                        stats3='Range'
                        row31='9'
                        row32='9'
                        row33='9'
                        row36=' '
                        stats4='Damage'
                        row41='800'
                        row42='1100'
                        row43='1400'
                        row46='100%'
                        stats5='Fortified Health'
                        row51='600'
                        row52='800'
                        row53='1000'
                        row56=' '
                        stats6='Stun Duration'
                        row61='9'
                        row62='9'
                        row63='9'
                        row66=' '
                        stats7='Channel Time'
                        row71='2'
                        row72='2'
                        row73='2'
                        row76=' '
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        cp='CP%'
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
                title="GIFT OF LIFE"
                subtitle="RARE"
                color="#6393F9"
                text="Gift of Fire (A) grants fortified health equal to a portion of its burst heal. Shorter cooldown."
                text2="• Heal to Fort Health 80% (+10%)%"
                text3="• Cooldown 90% (-1%)"
                image={require('./../images/Talents/Adagio_Rare.png')}
            />
            <Talentbox
                title="Avenging Wrath"
                subtitle="EPIC"
                color="#7A02EA"
                text="Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage."
                text2="• Dmg to Burning Targets 165% (+2.5%)"
                text3="• Charge Time 95% (-4%)"
                image={require('./../images/Talents/Adagio_Epic.png')}
            />
            <Talentbox
                title="Healing Verse"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Verse of Judgement (Ult) heals all of Adagio's allies within its radius. Shorter cooldown but lower damage."
                text2="• Damage 60% (+10%)"
                text3="• Cooldown 55% (-7.5%)"
                text4="• Max Health to Heal 65% (+15%)"
                image={require('./../images/Talents/Adagio_Legendary.png')}
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
                title="Spiderwing Adagio"
                text="Rare"
                image={require('./../images/Skins/Adagio_Dark_Parade_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Dark Parade Adagio"
                text="Epic"
                image={require('./../images/Skins/Adagio_Dark_Parade_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Crimson Song Adagio"
                text="Legendary"
                image={require('./../images/Skins/Adagio_Dark_Parade_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Seraphim Adagio"
                text="Epic"
                image={require('./../images/Skins/Adagio_Seraphim_E.png')} />
            <Skinbox
                color="#6393F9"
                title="Ra'dagio"
                text="Rare"
                image={require('./../images/Skins/Adagio_Ra_Rare.png')} />
        </div>
    </div>
            </Page>
  </div >
  </Layout>
    )

export default Adagio