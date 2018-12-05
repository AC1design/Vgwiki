import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Ringo = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Ringo_Desktop.jpg")}
        bgtablet={require("./../images/BG/Ringo_Tablet.jpg")}
        bgmobile={require("./../images/BG/Ringo_Mobile.jpg")}
        heroname="RINGO"
        role='LANE, SNIPER'
        description="Fast-moving, fast-shooting gunslinger with an epic fireball."
                spotlight="QKA4GSSrRRU">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="703 - 2107"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.15 - 4.68"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="163 - 416"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.2 - 2.85"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="71 - 130"
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
                value="3.2"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Ringoblurred.jpg")}
   model={require("./../images/models/Ringo.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-P-Double-Down.mp4"
                title="DOUBLE DOWN"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Ringo-P.png')}
                text="Ringo's next basic attack after killing anything will be a critical strike."
                />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-A-Achilles-Shot.mp4"
                title="ACHILLES SHOT"
                subtitle="A ABILITY"
                text="Ringo fires a trick shot at his target's heel (or whatever lower extremity exists), slowing the target and dealing damage."
                        image={require('./../images/Ability/Ringo-A.png')}
                />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-B-Twirling-Silver.mp4"
                title="TWIRLING SILVER"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Ringo-B.png')}
                text="Ringo slings bullets at his target in a mad flurry, dramatically increasing his attack speed and move speed for a duration.
                
                • Activating this ability resets Ringo's basic-attack cooldown."/>
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-C-Hellfire-Brew.mp4"
                title="HELLFIRE BREW"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Ringo-C.png')}
                text="Ringo takes a long swig from his gourd, then spits out a scorching fireball at his target. The explosion deals splash damage on impact and sets the target on fire, burning it & nearby enemies for 7s.
                
                • The fire pierces all shield on impact."/>
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
                title="Long Shot"
                subtitle="RARE"
                color="#6393F9"
                text="Achilles Shot (A) has 4 bonus range."
                text2="• Damage 115% (+3%)"
                text3="• Cooldown 135% (-2%)"
                image={require('./../images/Talents/Ringo_Rare.png')}
            />
            <Talentbox
                title="Bullet Split"
                subtitle="EPIC"
                color="#7A02EA"
                text="Twirling Silver (B) causes Ringo’s basic attacks to fire a secondary shot at a nearby target."
                text2="• Damage 87.5% (+2.5%)"
                text3="• Cooldown 90% (-3%)"
                image={require('./../images/Talents/Ringo_Epic.png')}
            />
            <Talentbox
                title="Spiked Brew"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Hellfire Brew (Ult) bounces to a nearby enemy hero upon impact."
                text2="• Damage 70%"
                text3="• Cooldown 70%"
                image={require('./../images/Talents/Ringo_Legendary.png')}
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
                title="Shogun Nomad Ringo"
                text="Rare"
                image={require('./../images/Skins/Ringo_Shogun_Nomad.png')} />
            <Skinbox
                color="#7A02EA"
                title="Shogun Wrath Ringo"
                text="Epic"
                image={require('./../images/Skins/Ringo_Shogun_Wrath.png')} />
            <Skinbox
                color="#FF9000"
                title="Shogun Master Ringo"
                text="Legendary"
                image={require('./../images/Skins/Ringo_Shogun_Master.png')} />
            <Skinbox
                color="#6393F9"
                title="Vaquero Ringo"
                text="Rare"
                image={require('./../images/Skins/Ringo_Vaquero.png')} />
            <Skinbox
                color="red"
                title="Bakuto Ringo"
                text="Special Edition"
                image={require('./../images/Skins/Ringo_Bakuto.png')} />
            </div>
    </div>
  </div >
  </Layout>
    )

export default Ringo