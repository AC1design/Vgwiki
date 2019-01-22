import React from 'react'
import Link from 'gatsby-link'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'


const Reim = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Reim_Desktop.jpg")}
        bgtablet={require("./../images/BG/Reim_Tablet.jpg")}
        bgmobile={require("./../images/BG/Reim_Mobile.jpg")}
        heroname="REIM"
        role='JUNGLE, MAGE'
        description="Resilient ice mage who dominates close-quarter battles."
                spotlight="Ur-cD6ibo00">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="746 - 2499"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="(+)"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="220 - 462"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="(+)"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="80 - 153"
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
                value="1.9"
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
   bgmodel={require("./../images/BG/Reimblurred.jpg")}
   model={require("./../images/models/Reim.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="FROSTGUARD"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Reim-P.jpg')}
                text="When Reim damages opponents with his basic attack or Winter Spire, he is granted fortified health up to a cap of 25% of Reim's maximum health.
                • All damage dealt by Reim will chill opponents. This effect is reduced against non-heroes.
                • Reim's basic attacks deal 15-54 (level 1-12) (+80% crystal power) crystal damage over 2s and grant 20% of the damage dealt with this effect as fortified health.
                • Basic attacks against targets that are already chilled apply a 60% slow that decays over 0.6s."
                />
            <Skillbox
                title="WINTER SPIRE"
                subtitle="A ABILITY"
                text="Reim summons a spire of ice at a nearby location, dealing crystal damage to surrounding enemies. After a shower delay, the spire shatters, dealing heavy crystal damage.
                
                • Deals 25% increased damage to chilled targets.
                • 20% of the damage dealt with this ability is gained as fortified health.
                • Fortified health gained is reduced against non-heroes.
                • Deals 50% less damage to minions."
                        image={require('./../images/Ability/Reim-A.jpg')}
                              />
            <Skillbox
                title="CHILL WINDS"
                                  subtitle="B ABILITY"
                        image={require('./../images/Ability/Reim-B.jpg')}
                                  text="Reim deals a burst of crystal damage to all surrounding enemies, rooting enemies who are chilled. A rooted enemy cannot move or dash, but the enemy can still attack.
                
                                  • Deals 50% less damage to minions."/>
            <Skillbox
                title="VALKYRIE"
                                  subtitle="ULTIMATE"
                        image={require('./../images/Ability/Reim-C.jpg')}
                                  text="Reim summons an ancient Valkyrie, devastating enemies in the area and applying a heavy decaying slow.
                
                                  • Enemies near center are also stunned and take greater damage."/>
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
                title="Creeping Cold"
                subtitle="RARE"
                color="#6393F9"
                text="Winter Spire (A) deals damage to all enemies it passes through."
                text2="• Impact to Travel Dmg 35% (+2.5%)"
                image={require('./../images/Talents/Reim_Rare.png')}
            />
            <Talentbox
                title="Long Winter"
                subtitle="EPIC"
                color="#7A02EA"
                text="Fortified Health generated by Reim lasts 30s longer. Reim passively gains crystal power."
                text2="• Passive Crystal Power 15% (+2.5%)"
                image={require('./../images/Talents/Reim_Epic.png')}
            />
            <Talentbox
                title="Revenant"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Chill Winds (B) prevents Reim from being slowed and grants him a barrier for 2s."
                text2="• Max Health to Barrier 20%"
                text3="• Barrier Duration 2s"
                image={require('./../images/Talents/Reim_Legendary.png')}
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
                title="Ice Wind Reim"
                text="Rare"
                image={require('./../images/Skins/Reim_Ice_Wind.png')} />
            <Skinbox
                color="#7A02EA"
                title="Valkyrie Reim"
                text="Epic"
                image={require('./../images/Skins/Reim_Valkyrie.png')} />
            <Skinbox
                color="#FF9000"
                title="North Hammer Reim"
                text="Legendary"
                image={require('./../images/Skins/Reim_North_Hammer.png')} />
            <Skinbox
                color="#6393F9"
                title="Deathless Reim"
                text="Rare"
                image={require('./../images/Skins/Reim_Deathless.png')} />
            <Skinbox
                color="red"
                title="Santa Reim"
                text="Special Edition"
                image={require('./../images/Skins/Reim_Santa.png')} />
            </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Reim