import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'


const Reza = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Reza_Desktop.jpg")}
        bgtablet={require("./../images/BG/Reza_Tablet.jpg")}
        bgmobile={require("./../images/BG/Reza_Mobile.jpg")}
        heroname="REZA"
        role='JUNGLE, MAGE'
        description="A fast, devastating fire mage with a demon netherform."
                spotlight="MsCucm_7QXU">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="718 - 2306"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.82 - 7.23"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="380 - 732"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="2.53 - 4.84"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="84 - 154"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 125%"
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
                value="3"
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
   bgmodel={require("./../images/BG/Rezablurred.jpg")}
   model={require("./../images/models/Reza.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="FIRESTARTER"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Reza-P.jpg')}
                text="Scorcher and Netherform Detonator apply Firestarter to enemy targets.
                • Reza's basic attacks consume Firestarter, dealing crystal damage.
                • Crystal Damage: 20-175 (level 1-12) (+110% crystal power)"
                />
            <Skillbox
                title="SCORCHER"
                subtitle="A ABILITY"
                text="Reza smashes the ground, creating a fiery shockwave in front of him. This deals damage to anything it passes through and collides with the first enemy hero or jungle monster hit.
                
                • Scorcher applies Firestarter on impact.
                • Deals 50% less damage to minions."
                        image={require('./../images/Ability/Reza-A.jpg')}
                />
            <Skillbox
                title="TROUBLEMAKER"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Reza-B.jpg')}
                text="Reza dashes to the target location, dealing crystal damage to enemies he passes through.
                
                 • Reza's next basic attack deals bonus crystal damage.
                 • This ability has 2 charges."
                />
            <Skillbox
                title="NETHERFORM DETONATOR"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Reza-C.jpg')}
                text="Reza vanishes removing from himself any negative movement-impairing effects, then reappears at the target location in empowered demon form.
                
                 • Upon reappearing, he unleashes a blazing explosion, damaging enemies and consuming Firestarter within the target radius.
                 • Reza then applies Firestarter to all enemies nearby.
                 • Each basic attack now applies Firestarter on enemies without Firestarter on them."
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
                title="Burning Barrier"
                subtitle="RARE"
                color="#6393F9"
                text="Troublemaker (B) grants Reza a barrier for a short duration."
                text2="• Barrier 7.5% (+1%)"
                image={require('./../images/Talents/Reza_Rare.png')}
            />
            <Talentbox
                title="Firemaker"
                subtitle="EPIC"
                color="#7A02EA"
                text="Troublemaker (B) applies Firestarter (Perk) to enemy heroes he passes through."
                text2="• Damage 100%"
                image={require('./../images/Talents/Reza_Epic.png')}
            />
            <Talentbox
                title="Nether Rage"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Netherform Detonator (Ult) grants Reza bonus attack speed and lasts longer."
                text2="• Passive Attack Speed +15%"
                text3="• Bonus Duration 2s"
                image={require('./../images/Talents/Reza_Legendary.png')}
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
                color="#FF9000"
                title="Netherknight Reza"
                text="Legendary"
                image={require('./../images/Skins/Reza_Netherknight.png')} />
            <Skinbox
                color="red"
                title="Red Lantern Reza"
                text="Special Edition"
                image={require('./../images/Skins/Reza_Red_Lantern.png')} />
            </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Reza