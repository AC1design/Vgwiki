import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Gwen = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Gwen_Desktop.jpg")}
        bgtablet={require("./../images/BG/Gwen_Tablet.jpg")}
        bgmobile={require("./../images/BG/Gwen_Mobile.jpg")}
        heroname="GWEN"
        role='LANE, PROTECTOR'
        description="Gunslinger with powerful burst damage and ability to shake off disables."
                spotlight="lwv7-7lgE9o">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="661 - 2072"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.63 - 5.16"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="175 - 395"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.2 - 2.85"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="68 - 132"
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
                value="3.1"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Gwenblurred.jpg")}
   model={require("./../images/models/Gwen.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="BOOMSTICK"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/10/0_perk_boomstick.png"
                text="After not attacking for 1.4s, Gwen's next basic attack is a Boomstick shot that deals bonus damage.
                • Bonus damage: 20-110 (+40% of bonus weapon power)
                • Additional attack speed increase the frequency of Boomstick shots.
                 "
            />
            <Skillbox
                title="BUCKSHOT BONANZA"
                subtitle="A ABILITY"
                text="Gwen blasts enemies in the target direction, dealing weapon damage to all targets in a cone. Enemies hit by this ability are slowed and revealed for 2s.

                • Deals 50% less damage to minions.
                • Maximum slow amount: 65%"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/10/1_A_buckshot-bonanza.png"
            />
            <Skillbox
                title="SKEDADDLE"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/10/2_B_skedaddle.png"
                text="Gwen gains a burst of move speed while instantly removing from herself any negative movement-impairing effects.

                • Blocks further effects for 0.5s.
                • Passive: Gwen gains 0.8 bonus move speed for the entire match. This effect is temporarily disabled for 4s upon taking damage from an enemy hero."
            />
            <Skillbox
                title="ACES HIGH"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/10/3_C_aces-high.png"
                text="Gwen flings a card in the target direction, stunning and dealing weapon damage the first hero it hits.

                • The card damages everything it passes through.
                • Deals 50% less damage to minions."
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
                title="Speed Loader"
                subtitle="RARE"
                color="#6393F9"
                text="Buckshot Bonanza (A) is reset whenever Gwen uses Skedaddle (B)."
                text2="• Damage 90% (+2.5%)"
                text3="• Energy Cost 50%"
                image={require('./../images/Talents/Gwen_Rare.png')}
            />
            <Talentbox
                title="Skedaddling"
                subtitle="EPIC"
                color="#7A02EA"
                text="Skedaddle’s (B) duration is increased. Gwen passively gains weapon power."
                text2="• Bonus Duration 1s (+0.2s)"
                text3="• Cooldown 60% (-2.5%)"
                text4="• assive Weapon Power 10% (+1%)"
                image={require('./../images/Talents/Gwen_Epic.png')}
            />
            <Talentbox
                title="Three of a Kind"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Aces High (Ult) fires three cards in a cone."
                text2="• Damage 60%"
                text3="• Cooldown 60%"
                image={require('./../images/Talents/Gwen_Legendary.png')}
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
                title="Gangster Gwen"
                text="Rare"
                image={require('./../images/Skins/Gwen_Gangster_R.png')} />
            <Skinbox
                color="red"
                title="Red Lanter Gwen"
                text="Special Edition"
                image={require('./../images/Skins/Gwen_Red_Lantern.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Gwen