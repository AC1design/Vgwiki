import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'

const Lorelai = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Lorelai_Desktop.jpg")}
        bgtablet={require("./../images/BG/Lorelai_Tablet.jpg")}
        bgmobile={require("./../images/BG/Lorelai_Mobile.jpg")}
        heroname="LORELAI"
        role='JUNGLE, PROTECTOR'
        description="Backline support, excelling at zone control and team utility."
                spotlight="VT0JBLt-QKE">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="691 - 2252"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.14 - 5.56"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="360 - 690"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="3.47 - 6"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="10 - 10"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="92.5% - 120%"
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
                value="6.2"
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
   bgmodel={require("./../images/BG/Lorelaiblurred.jpg")}
   model={require("./../images/models/Lorelai.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="THAT'S SWELL"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Lorelai-P.jpg')}
                text="Lorelai's abilities leave pools of water on the ground. While on a pool, Lorelai becomes empowered. Using an ability while empowered consumes the pool she’s on and affects the ability used. Additionally, Lorelai's basic attacks are torrents of water that deals crystal damage.
                • Pools persist for 8s.
                • Basic attack crystal damage: 55-110 (level 1-12) (+70% crystal power).
                • Empowered bonus crystal power 15-180 (level 1-12).
                • Empowered Fish Food: Reduced delay before impact.
                • Empowered Splashdown: Reduced delay before impact.
                • Empowered Waterwall: Stronger barrier.
                Water Denizen: Lorelai gains the 5V5 river movement bonus in both directions."
            />
            <Skillbox
                title="FISH FOOD"
                subtitle="A ABILITY"
                text="Lorelai calls upon her aquatic friends at the target location.

                • After 0.6s, her pet clam snaps the area, dealing damage to enemy units inside and stunning them.
                • A pool filled with small piranhas persists afterwards, dealing damage over time to enemy units inside.
                • The stun duration scales with 0.03% of Lorelai's bonus health.
                • Deals 50% damage to minions, structures, summons, and Mythic Creatures."
                        image={require('./../images/Ability/Lorelai-A.jpg')}
            />
            <Skillbox
                title="SPLASHDOWN"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Lorelai-B.jpg')}
                text="Lorelai throws a sphere of water at target location.

                • After 0.8s, the water forms a pool.
                • Speed up allied units inside.
                • Slows down enemy units inside.
                • Slow strength scales with 0.017% of Lorelai's bonus health."
            />
            <Skillbox
                title="WATERWALL"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Lorelai-C.jpg')}
                text="Lorelai forms a protective veil of water around the target allied hero.

                • Cleanses the target of any movement-impairing effects.
                • Temporarily grants the target a large barrier.
                • After 4s, the water barrier drops on the ground, leaving behind a Splashdown pool (if learned).
                • Barrier strength scales with 15% of Lorelai's bonus health."
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
                title="Splash Doubledown"
                subtitle="RARE"
                color="#6393F9"
                text="Splashdown (B) has 1 additional charge."
                text2="• Charge Time 88% (-2%)"
                text3="• Energy Cost 25%"
                image={require('./../images/Talents/Lorelai_Rare.png')}
            />
            <Talentbox
                title="Clam Up"
                subtitle="EPIC"
                color="#7A02EA"
                text="Fish Food (A) stuns for a longer duration."
                text2="• Bonus Stun Duration 0.45s (+0.2%)"
                image={require('./../images/Talents/Lorelai_Epic.png')}
            />
            <Talentbox
                title="Wonder Wall"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Waterwall (Ult) grants invulnerability instead of barrier."
                text2="• Duration 2.5s (+1s)"
                text3="• Cooldown 60%"
                image={require('./../images/Talents/Lorelai_Legendary.png')}
            />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Lorelai