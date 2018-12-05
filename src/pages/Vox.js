import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Vox = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Vox_Desktop.jpg")}
        bgtablet={require("./../images/BG/Vox_Tablet.jpg")}
        bgmobile={require("./../images/BG/Vox_Mobile.jpg")}
        heroname="VOX"
        role='JUNGLE, WARRIOR'
        description="Durable berserker who excels in the thick of fights."
                spotlight="5Z2KUYPYXEw">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="667 - 2054"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.55 - 7.4"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="200 - 464"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.33 - 3.09"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="54 - 109"
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
                value="5.6"
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
   bgmodel={require("./../images/BG/Voxblurred.jpg")}
   model={require("./../images/models/Vox.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-P-Julias-Song.mp4"
                                    title="JULIA'S SONG"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Vox-P.jpg')}
                                    text="Vox's abilities mark enemies with Resonance. When basic attacking marked enemies, Resonance Bolts will bounce outwards to two nearby enemies dealing bonus crystal damage while refreshing and spreading the Resonance mark.
                
                 • Resonance Crystal damage: 20 (+100% of crystal power)
                 • Resonance bounces deal 50% damage to minions.
                 • Basic Attacks deal an additional 20-42 (level 1-12) (+50% of crystal power)"
                                
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-A-Sonic-Zoom.mp4"
                                    title="SONIC ZOOM"
                                    subtitle="A ABILITY"
                                    text="Vox dashes in the targeted direction, throwing two basic attacks to the nearest enemy marked by Resonance (prioritizing heroes)."
                        image={require('./../images/Ability/Vox-A.jpg')}
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-B-Pulse.mp4"
                                    title="PULSE"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Vox-B.jpg')}
                                    text="Vox emits a sonic pulse that echoes off nearby enemies and applies Resonance. The pulse applies a slow that is significantly stronger near its center.
                
                 • Each upgrade to Pulse increases the damage of Vox's bouncing Resonance bolts.
                 • Overdrive: Resonance bounce range increased by 2."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-C-Wait-for-It....mp4"
                                    title="WAIT FOR IT..."
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Vox-C.jpg')}
                                    text="Vox fires an ultrasonic wave that applies Resonance to enemies in its path. Shortly after, a wide shockwave explodes along the same path, dealing crystal damage and silencing enemies.
                
                 • Striking enemy heroes with the shockwave will also cause Resonance Bolts to bounce outward to other enemies."
                
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
                title="Deep Dash"
                subtitle="RARE"
                color="#6393F9"
                text="Sonic Zoom (A) has 3 increased dash range. Vox passively gains attack speed."
                text2="• Passive Attack Speed +25% (+1%)"
                text3="• Cooldown 125% (-2.5%)"
                image={require('./../images/Talents/Vox_Rare.png')}
            />
            <Talentbox
                title="Sound Barrier"
                subtitle="EPIC"
                color="#7A02EA"
                text="Vox’s basic attacks periodically grant him a health barrier."
                text2="• Max Health to Barrier 10% (+3%)"
                text3="• Barrier Duration 4s"
                image={require('./../images/Talents/Vox_Epic.png')}
            />
            <Talentbox
                title="Echo Chamber"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Julia’s Song (Perk) Resonance bolts have an additional bounce."
                text2="• Damage 60% (+10%)"
                image={require('./../images/Talents/Vox_Legendary.png')}
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
                title="Sky Captain Vox"
                text="Rare"
                image={require('./../images/Skins/Vox_SkyCaptain.png')} />
            <Skinbox
                color="#7A02EA"
                title="Cloud Raider Vox"
                text="Epic"
                image={require('./../images/Skins/Vox_CloudRaider.png')} />
            <Skinbox
                color="#FF9000"
                title="Evolution Vox"
                text="Legendary"
                image={require('./../images/Skins/Vox_Evolution.png')} />
            <Skinbox
                color="#7A02EA"
                title="Red Rona"
                text="Epic"
                image={require('./../images/Skins/Vox_SchoolDays.png')} />
                <Skinbox
                color="#FF9000"
                title="Vox On Ice"
                text="Legendary"
                image={require('./../images/Skins/Vox_OnIce.png')} />     
        </div>
    </div>
  </div>
  </Layout>
    )

export default Vox