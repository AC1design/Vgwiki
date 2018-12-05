import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Yates = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Yates_Desktop.jpg")}
        bgtablet={require("./../images/BG/Yates_Tablet.jpg")}
        bgmobile={require("./../images/BG/Yates_Mobile.jpg")}
        heroname="YATES"
        role='JUNGLE, PROTECTOR'
        description="Battelfield commander who grabs enemies and has a global presence."
                spotlight="whh2WkfSynk">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="857 - 2672"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="(+)"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="174 - 471"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="(+)"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="82 - 172"
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
                value="3.4"
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
   bgmodel={require("./../images/BG/Yatesblurred.jpg")}
   model={require("./../images/models/Yates.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
            video={require('./../images/SkillVideos/Yates-A.mp4')}
                title="DEVASTATION FLAIL"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Reim-B.jpg')}
                text="Yates can combo up to three basic attacks within a short time of each other for increasingly powerful effects.
                Second Hit: Bonus damage and gain a small movespeed boost.
                Third Hit: Bonus damage and gain a large movespeed boost."
            />
            <Skillbox
                video={require('./../images/SkillVideos/Yates-A.mp4')}
                title="WOLF’S MAW"
                subtitle="A ABILITY"
                text="Yates extends his flail forward, pulling in the first enemy hit."
                        image={require('./../images/Ability/Reim-B.jpg')}
            />
            <Skillbox
                video={require('./../images/SkillVideos/Yates-B.mp4')}
                title="OVERWHELM"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Reim-B.jpg')}
                text="Yates gathers energy for 1.5s before releasing a shockwave around himself, stunning affected enemies."
            />
            <Skillbox
                title="IRON MANDATE"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Reim-B.jpg')}
                text="Yates leaps to the chosen location, dealing damage and slowing enemies while granting allies a barrier.
                Overwhelm will not disperse until Yates lands.
                Note: This is a global ability which means it can be casted anywhere in the map"
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
                title="Extended Hooks"
                subtitle="RARE"
                color="#6393F9"
                text="Wolf’s May (A) has increased range."
                text2="• Cooldown 110% (-2%)"
                text3="• Damage 75% (+5%)"
                text4="• Bonus Range 2.5 (+0.4)"
                image={require('./../images/Talents/Yates_Rare.png')}
            />
            <Talentbox
                title="Whiplash"
                subtitle="EPIC"
                color="#7A02EA"
                text="Devastation Flail (Perk) third hit deals greatly increased damage."
                text2="• Damage 120%"
                text3="• Passive Attack Speed +0%"
                image={require('./../images/Talents/Yates_Epic.png')}
            />
            <Talentbox
                title="Rapid Response"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Iron Mandate (Ult) completes much more quickly."
                text2="• Cooldown 60%"
                text3="• Damage 120%"
                text4="• Barrier 140%"
                image={require('./../images/Talents/Yates_Legendary.png')}
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
                title="Crimson Wolf Yates"
                text="Rare"
                price="1200"
                image={require('./../images/Skins/Yates_CrimsonWolf.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Yates