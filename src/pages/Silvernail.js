import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Silvernail = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
                bgdesktop={require("./../images/BG/Silvernail_Desktop.jpg")}
                bgtablet={require("./../images/BG/Silvernail_Tablet.jpg")}
                bgmobile={require("./../images/BG/Silvernail_Mobile.jpg")}
                heroname="SILVERNAIL"
                role='LANE, SNIPER'
                description="Grizzled hunter with a powerful crossbow and tripwires."
                spotlight="cC5-fdOn8C8">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="745 - 2175"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value=" - "
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="203 - 610"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="74 - 145"
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
                value="6.2"
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
   bgmodel={require("./../images/BG/Silvernailblurred.jpg")}
   model={require("./../images/models/Silvernail.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                itle="DOUBLE SHOT"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Silvernail-P.jpg')}
                text="Silvernail loads an extra bolt every 4s-3s (level 1-12) which can be expended to chain a follow-up basic attack, dealing 60% damage.
                • Attack speed reduces load time."
            />
            <Skillbox
                title="STAKE"
                subtitle="A ABILITY"
                        image={require('./../images/Ability/Silvernail-A.jpg')}
                text="Silvernail plants an inactive Stake into the ground. Tripwires form between nearby inactive Stakes, activating the Stakes.  
                  Tripwire: Enemies crossing through will be briefly slowed, silenced, and take damage.
                  • Silvernail can maintain up to 3 inactive Stakes at a time.
                  • This ability has 2 charges."
            />
            <Skillbox
            title="CAUSTIC BLESSING"
            subtitle="B ABILITY"
                        image={require('./../images/Ability/Silvernail-B.jpg')}
            text="Silvernail lobs a flask which damages, burns, and reveals enemies caught in the blast for 4s.
             • Refreshes Double Shot upon casting.
             • Deals 50% damage to minions."
            />
            <Skillbox
             title="REBUKE"
             subtitle="ULTIMATE"
                        image={require('./../images/Ability/Silvernail-C.jpg')}
             text="Passive: Double Shot damage increased.
             Activate: Silvernail fires a piercing bolt, dealing damage to and dragging enemies along with it.
             • Enemies who collide with a Tripwire, wall, or structure are stunned and take bonus damage."
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
                title="Bolt Action"
                subtitle="RARE"
                color="#6393F9"
                text="Double Shot (Perk) fires an extra bolt. Rebuke (Ult) has increased range."
                text2="• Cooldown 80% (-2%)"
                text3="• Damage 50% (+7.5%)"
                text4="• Bonus Range 1 (+0.2)"
                image={require('./../images/Talents/Silvernail_Rare.png')}
            />
            <Talentbox
                title="Caustic Bounty"
                subtitle="EPIC"
                color="#7A02EA"
                text="Caustic Blessing (B) throws two additional flasks."
                text2="• Cooldown 90%"
                text3="• Damage 60%"
                image={require('./../images/Talents/Silvernail_Epic.png')}
            />
            <Talentbox
                title="Tri-Wire"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Stake (A) forms a tripwire triangle around target location.."
                text2="• Damage 100%"
                text3="• Duration 40%"
                image={require('./../images/Talents/Silvernail_Legendary.png')}
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
                title="Tribal Silvernail"
                text="Rare"
                image={require('./../images/Skins/Silvernail_Tribal.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Silvernail