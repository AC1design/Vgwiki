import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Kensei = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Kensei_Desktop.jpg")}
        bgtablet={require("./../images/BG/Kensei_Tablet.jpg")}
        bgmobile={require("./../images/BG/Kensei_Mobile.jpg")}
        heroname="KENSEI"
        role='JUNGLE, WARRIOR'
        description="Swift swordmaster who can easily manuever through the battlefield."
                spotlight="t6vVHJa90vA">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="761 - 2493"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.01 - 7.42"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="280 - 643"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.87 - 4.29"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="119 - 163"
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
                value="3.5"
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
   bgmodel={require("./../images/BG/Kenseiblurred.jpg")}
   model={require("./../images/models/Kensei.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
            video={require('./../images/SkillVideos/Kensei-P.mp4')}
                title="IMMOVABLE MIND"
                subtitle="HEROIC PERK"
                image={require('./../images/Ability/Kensei-P.jpg')}
                text="After striking enemy heroes or jungle monsters 3 times, Kensei's next basic attack deals 20% bonus damage and grants a burst of barrier.

                • Bonus Barrier: 30-140 (level 1-12)
                • Bonus Barrier (Heroes): Target max health * 0.04% of bonus weapon power
                Additionally, Kensei's basic attacks deal increased damage to heroes with higher health.
                
                • Attack Damage: 40% of weapon power + (target max health * 0.018% of bonus weapon power)"
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kensei-A.mp4')}
                title="LOTUS STRIKE"
                subtitle="A ABILITY"
                text="Kensei rushes forward, swinging his blade and dealing basic attack damage in an arc in front of him.
                • This ability can be reactivated two additional times within 5s."
                        image={require('./../images/Ability/Kensei -A.jpg')}
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kensei-B.mp4')}
                title="KENSHO"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Kensei-B.jpg')}
                text="Kensei strikes his target and leaps backward, entering Kensho Stance and generating fortified health for the duration.
                Kensho Stance: The next Lotus Strike or Path of the Ronin gain a powerful bonus effect when activated within 2.5s of canceling this stance.
                • Lotus Strike travels farther and slows enemies hit
                • Path of the Ronin stuns enemies hit
                • Stance is canceled automatically upon movement, attacking, or using any ability."
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kensei-C.mp4')}
                title="PATH OF THE RONIN"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Kensei-C.jpg')}
                text="Kensei readies himself before quickly rushing forward, dealing basic attack plus bonus damage to all enemies in his wake."
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
                title="Accelerated Mind"
                subtitle="RARE"
                color="#6393F9"
                text="Hitting an enemy hero or jungle monster grants max stats of Immovable Mind (Perk)"
                text2="• Attack Speed +20% (+5%)"
                text3="• Barrier 40% (+2%)"
                image={require('./../images/Talents/Kensei_Rare.png')}
            />
            <Talentbox
                title="Enlightened Kensho"
                subtitle="EPIC"
                color="#7A02EA"
                text="Kensho’s empowered attack grants Kensei temporary invulnerability."
                text2="• Passive Weapon Power 10% (+1%)"
                text3="• Cooldown 60% (-2.5%)"
                text5="• Duration 1.1s (+0.1s)"
                image={require('./../images/Talents/Kensei_Epic.png')}
            />
            <Talentbox
                title="Endless Path"
                subtitle="LEGENDARY"
                color="#FF9000"
                text=" Landing Path of the Ronin (Ult) resets its cooldown"
                text2="• Damage 120% (+25%)"
                text3="• Cooldown 50%"
                image={require('./../images/Talents/Kensei_Legendary.png')}
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
                title="Tizen Boss Kensei"
                text="Rare"
                image={require('./../images/Skins/Kensei_TaizenBoss.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Kensei