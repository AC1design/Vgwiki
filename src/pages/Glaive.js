import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Glaive = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Glaive_Desktop.jpg")}
        bgtablet={require("./../images/BG/Glaive_Tablet.jpg")}
        bgmobile={require("./../images/BG/Glaive_Mobile.jpg")}
        heroname="GLAIVE"
        role='JUNGLE, WARRIOR'
        description="Brutal axe warrior who can knock enemies out of position."
        spotlight="htECezLaZRI">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="834 - 2503"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.47 - 6.21"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="275 - 440"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.47 - 2.9"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="70 - 156"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
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
                value="2.8"
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
   bgmodel={require("./../images/BG/Glaiveblurred.jpg")}
   model={require("./../images/models/Glaive.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-A-Afterburn.mp4'}
                title="HUNT THE WEAK"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Glaive-P.png")}
                text="Glaive's critical strikes cleave in a cone in front of him.
                • Cleave deals half damage to minions."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-P-Hunt-the-Weak.mp4'}
                title="AFTERBURN"
                subtitle="A ABILITY"
                text="Glaive rockets in the target direction, damaging all enemies along the way. His next basic attack is replaced by a frightening blast that knocks his target back 5.5 meters and briefly stuns them."
                        image={require("./../images/Ability/Glaive-A.jpg")}
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-B-Twisted-Stroke.mp4'}
                title="TWISTED STROKE"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Glaive-B.jpg")}
                text="Instantly executes a critical strike.
                • This ability deals weapon damage, but it can deal bonus crystal damage if you have any crystal power.
                • Triggers basic-attack effects.
                • Passive: Increases critical-strike chance and AOE-cleave damage of basic attacks."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-C-Bloodsong.mp4'}
                title="BLOODSONG"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Glaive-C.jpg")}
                text="Swing Glaive's axe in a 5.4-meter circle, dealing massive area damage that increases with the number of Bloodsong stacks used. This removes all stacks.
                • Passive: Glaive generates Bloodsong stacks from basic attacking or from receiving basic attacks (max 20 stacks).
                • Each stack grants Glaive bonus lifesteal."
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
                title="Violent Afterburn"
                subtitle="RARE"
                color="#6393F9"
                text="Using Afterburn (A) to punt a target will deal a portion of Afterburn’s damage and stun all enemies along its path."
                text2="• Damage 70% (+2%)"
                text3="• Cooldown 95% (-1.5%)"
                image={require('./../images/Talents/Glaive_Rare.png')}
            />
            <Talentbox
                title="Stunning Bloodsong"
                subtitle="EPIC"
                color="#7A02EA"
                text="Bloodsong (Ult) stuns enemies caught by Glaive’s axe."
                text2="• Cooldown 80% (-5%)"
                text3="• Stun Duration 0.75s"
                text4="• Damage 40% (+5%)"
                image={require('./../images/Talents/Glaive_Epic.png')}
            />
            <Talentbox
                title="Twisted Pursuit"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Twisted Stroke (B) has 5 increased range and causes Glaive to dash to his target."
                text2="• Bleed Damage 60%"
                text3="• Cooldown 190%"
                image={require('./../images/Talents/Glaive_Legendary.png')}
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
                title="Prehistoric Glaive"
                text="Rare"
                image={require('./../images/Skins/Glaive_Prehistoric_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Trophy Hunter Glaive"
                text="Epic"
                image={require('./../images/Skins/Glaive_Prehistoric_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Ice Age Glaive"
                text="Legendary"
                image={require('./../images/Skins/Glaive_Prehistoric_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Sorrowblade Glaive"
                text="Epic"
                image={require('./../images/Skins/Glaive_Sorrowblade_E.png')} />
            <Skinbox
                color="#7A02EA"
                title="King Glaive"
                text="Epic"
                image={require('./../images/Skins/Glaive_King_Epic.png')} />
                <Skinbox
                color="#FF9000"
                title="Rainbow Glaive"
                text="Legendary"
                image={require('./../images/Skins/Glaive_Rainbow.png')} />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Glaive