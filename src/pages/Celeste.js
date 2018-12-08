import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Celeste = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Celeste_Desktop.jpg")}
        bgtablet={require("./../images/BG/Celeste_Tablet.jpg")}
        bgmobile={require("./../images/BG/Celeste_Mobile.jpg")}
        heroname="CELESTE"
        role='LANER, MAGE'
        description="Back-line mage with heavy area damage and a stun."
        spotlight="rC-vkqUkERY">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="649 - 2028"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="2.23 - 4.76"
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
                value="10"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 125%"
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
                value="5.3"
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
   bgmodel={require("./../images/BG/Celesteblurred.jpg")}
   model={require("./../images/models/Celeste.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-P-Julias-Light.mp4'}
                title="JULIA'S LIGHT"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Celeste-P.jpg")}
                text="Celeste's basic attacks have a spell component, dealing 65-115 (level 1-12) crystal damage with a 50% crystal ratio. Celeste's basic attacks also reveal enemy heroes for 1.5 seconds - even after the target leaves vision range."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-A-Heliogenesis.mp4'}
                title="HELIOGENESIS"
                subtitle="A ABILITY"
                text="Celeste forms a small star at a target location, dealing crystal damage to nearby enemies. The star will briefly linger on the field. If Celeste uses this ability on an existing star, the star will go supernova, dealing more crystal damage in a larger area. Deals reduced damage to minions."
                        image={require("./../images/Ability/Celeste-A.jpg")}
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-B-Core-Collapse.mp4'}
                title="CORE COLLAPSE"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Celeste-B.jpg")}
                text="After a brief delay, the target location collapses and nearby enemies are stunned and take crystal damage."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-C-Solar-Storm.mp4'}
                title="SOLAR STORM"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Celeste-C.jpg")}
                text="Celeste launches a storm of stars that travel across the world. Stars collide with the first enemy they hit, dealing crystal damage in an area. The number of stars increases each time Solar Storm is upgraded. Deals 50% damage to non-heroes and does not damage structures."
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
                title="YOUNG STAR"
                subtitle="RARE"
                color="#6393F9"
                text="Heliogensis (A) stars linger on the field 4s longer and continuously damage nearby enemies. Lower impact damage."
                text2="• Impact Damage 30% (+1%)%"
                text3="• Damage/Sec 70% (+2.5%)"
                image={require('./../images/Talents/Celeste_Rare.png')}
            />
            <Talentbox
                title="CORE LEAF CLOVER"
                subtitle="EPIC"
                color="#7A02EA"
                text="Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage."
                text2="• Damage 25% (+2.5%)"
                text3="• Cooldown 125% (-4%)"
                image={require('./../images/Talents/Celeste_Epic.png')}
            />
            <Talentbox
                title="GALAXY COLLAPSE"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Heliogenesis (A) supernovas cause other stars to supernova. Lower damage."
                text2="• Impact Damage 70% (+5%)"
                text3="• Supernova Damage 100% (+10%)"
                image={require('./../images/Talents/Celeste_Legendary.png')}
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
                title="Rebellion Celeste"
                text="Rare"
                image={require('./../images/Skins/Celeste_Star_Queen_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Rising Star Celeste"
                text="Epic"
                image={require('./../images/Skins/Celeste_Star_Queen_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Star Queen Celeste"
                text="Legendary"
                image={require('./../images/Skins/Celeste_Star_Queen_III_L.png')} />
            <Skinbox
                color="#6393F9"
                title="Butterfly Celeste"
                text="Rare"
                image={require('./../images/Skins/Celeste_Butterfly_R.png')} />
            <Skinbox
                color="red"
                title="Baewitched Celeste"
                text="Special Edition"
                image={require('./../images/Skins/Celeste_Baewitched_SE.png')} />
            <Skinbox
                color="red"
                title="Moon Princess Celeste"
                text="Special Edition"
                image={require('./../images/Skins/Celeste_Moon_Princess_SE.png')} />
            <Skinbox
                color="#FADA5E"
                title="Baewitched Celeste"
                text="Limited Edition"
                image={require('./../images/Skins/Celeste_Baewitched_LE.png')} />
                    <Skinbox
                        color="red"
                        title="Snow Queen Celeste"
                        text="Special Edition?"
                        image={require('./../images/Skins/Celeste_Snow_Queen.jpg')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Celeste