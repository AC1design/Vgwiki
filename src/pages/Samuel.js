import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Samuel = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Samuel_Desktop.jpg")}
        bgtablet={require("./../images/BG/Samuel_Tablet.jpg")}
        bgmobile={require("./../images/BG/Samuel_Mobile.jpg")}
        heroname="SAMUEL"
        role='LANE, MAGE'
        description="Dark zone-control mage who can put enemies to sleep."
                spotlight="S01AKcC0TR0">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="652 - 2040"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.01 - 7.42"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="290 - 620"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="2.15 - 7.1"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="78 - 148"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 129.7%"
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
                value="6.3"
                color="#e19efb"
            />
            <Statbox
                title="MOVE SPEED"
                value="3.3"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Samuelblurred.jpg")}
   model={require("./../images/models/Samuel.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="CORRUPTED GENIUS"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Samuel-P.jpg')}
                                    text="Every 6s, Samuels next basic attack fires a bolt of dark power that deals bonus crystal damage and draws health & energy back to Samuel.
                
                 • Crystal Damage: 50-60 (level 1-12)
                 • Healing: 20-200 (level 1-12)
                 • Recharge: 30-200 (level 1-12) energy
                 • The restorative powers are only 25% as effective against non-heroes."
            />
            <Skillbox
                title="MALICE & VERDICT"
                                    subtitle="A ABILITY"
                        image={require('./../images/Ability/Samuel-A.jpg')}
                                    text="Samuel fires two bolts from his wands at a target location, impacting the first enemy hit. Samuel can move between the shots.
                
                  If Samuel is standing inside the energy field from Drifting Dark, these bolts move faster, travel farther and deal additional area damage. In addition, the cooldown is significantly reduced.
                
                  • Empowered shots deal 50% less damage to minions."
            />
            <Skillbox
            title="DRIFTING DARK"
                                subtitle="B ABILITY"
                        image={require('./../images/Ability/Samuel-B.jpg')}
                                text="Samuel creates a large field of darkness that slowly drifts forward, damaging enemies who stand inside it. If Samuel also stands inside, Malice & Verdict is greatly empowered and he heals for a small amount for each affected target.
            
              • The field will disappear if Samuel moves more than 16 meters away from it.
              • Deals 50% less damage to minions."
            />
            <Skillbox
              title="OBLIVION"
              subtitle="ULTIMATE"
                        image={require('./../images/Ability/Samuel-C.jpg')}
              text="After a short delay, Samuel summons a phantasm at the target location, which puts nearby enemies to sleep. Enemies inflicted are unable to move or act.
             
             • Dealing direct damage to a sleeping enemy with an attack or ability will wake them up."
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
                title="Power Siphon"
                subtitle="RARE"
                color="#6393F9"
                text="Corrupted Genius (Perk) occurs more frequently."
                text2="• Heal 150% (+10%)"
                text3="• Charge Time 2s"
                image={require('./../images/Talents/Samuel_Rare.png')}
            />
            <Talentbox
                title="Unwaking Nightmare"
                subtitle="EPIC"
                color="#7A02EA"
                text="Enemies put to sleep by Oblivion (Ult) will not wake up when taking damage."
                text2="• Cooldown 70% (-2.5%)"
                text3="• Sleep Duration 2s (+0.1s)"
                image={require('./../images/Talents/Samuel_Epic.png')}
            />
            <Talentbox
                title="Viscous Darkness"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Drifting Dark (B) moves slower and slows enemies caught within."
                text2="• Heal 150%"
                text3="• Damage 150%"
                text4="• Duration 6s"
                text5="• Slow Strength 50%"
                image={require('./../images/Talents/Samuel_Legendary.png')}
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
                title="Apprentice Samuel"
                text="Rare"
                image={require('./../images/Skins/Samuel_Apprentice.png')} />
            <Skinbox
                color="#7A02EA"
                title="Evolution Samuel"
                text="Epic"
                image={require('./../images/Skins/Samuel_Evolution.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Samuel