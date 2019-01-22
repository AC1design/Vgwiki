import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Flicker = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Flicker_Desktop.jpg")}
        bgtablet={require("./../images/BG/Flicker_Tablet.jpg")}
        bgmobile={require("./../images/BG/Flicker_Mobile.jpg")}
        heroname="FLICKER"
        role='JUNGLE, PROTECTOR'
        description="Trickster who can make the entire team invisible."
                spotlight="xj7Lj295kXM">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="797 - 2648"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.85 - 3.85"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="295 - 757"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.94 - 4.69"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="77 - 155"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 136.3%"
                color="#f48596"
            />
            <Statbox
                title="ARMOR"
                value="35 - 100"
                color="#f6ee71"
            />
            <Statbox
                title="SHIELD"
                value="25 - 75"
                color="#f6ee71"
            />
            <Statbox
                title="ATTACK RANGE"
                value="1.5"
                color="#e19efb"
            />
            <Statbox
                title="MOVE SPEED"
                value="3.7"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Flickerblurred.jpg")}
   model={require("./../images/models/Flicker.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="WILLOW WHISPER"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Flicker-P.jpg")}
                text="Flicker gains stealth and a move speed bonus when in brush for 2s. Flicker can then leave the brush and remain stealthed for 3s.

                • Flicker has true sight while stealthed
                • Taking damage, attacking or using abilities removes stealth."
            />
            <Skillbox
                title="BINDING LIGHT"
                subtitle="A ABILITY"
                text="Flicker commands his fairies to swarm a target location for 2s, dealing damage to enemies within it. When the effect expires, fairy light roots any enemy heroes still within the area."
                        image={require("./../images/Ability/Flicker-A.jpg")}
            />
            <Skillbox
                title="FAIRY DUST"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Flicker-B.jpg")}
                text="Flicker swirls fairy dust around him for 3s, slowing and dealing damage to anyone inside the dusted area. After 3s, the dust ignites, dealing a burst of damage."
            />
            <Skillbox
                title="MOONCLOAK"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Flicker-C.jpg")}
                text="After 1s, Flicker and his allies temporarily gain stealth and a move speed-bonus.

                • The stealth will break when a hero uses an ability, attacks or takes damage.
                • All heroes affected by this ability will have true sight while stealthed.
                • After a short time, that hero will stealth again so long as Mooncloak's duration has not expired."
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
                title="Swarming Light"
                subtitle="RARE"
                color="#6393F9"
                text="Binding Light (A) has 1 additional charge."
                text2="• Damage 90% (+2.5%)"
                text3="• Cooldown 90% (-2%)"
                image={require('./../images/Talents/Flicker_Rare.png')}
            />
            <Talentbox
                title="Binding Dust"
                subtitle="EPIC"
                color="#7A02EA"
                text="Fairy Dust (B) roots enemies caught within its detonation and grants Flicker move speed while active."
                text2="• Damage 80% (+5%)"
                text3="• Bonus Move Speed 1.5 (+0.15)"
                text4="• Root Duration 1.2s"
                image={require('./../images/Talents/Flicker_Epic.png')}
            />
            <Talentbox
                title="Fairy Healing"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Flicker’s stealth also greatly increases health regeneration. Flicker passively gains crystal power."
                text2="• Max Health to Heal 7.5%"
                text3="• Passive Crystal Power +15%"
                image={require('./../images/Talents/Flicker_Legendary.png')}
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
                color="#7A02EA"
                title="Red Lantern Flicker"
                text="Epic"
                image={require('./../images/Skins/Flicker_Red_Lantern_E.png')} />
                <Skinbox
                color="#7A02EA"
                title="Dr Franken Flicker"
                text="Epic"
                image={require('./../images/Skins/Flicker_DrFrankenFlicker_Epic.png')} />
                <Skinbox
                color="Red"
                title="Black Cat Flicker"
                text="Special Edition"
                image={require('./../images/Skins/Flicker_Blackcat.png')} />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Flicker