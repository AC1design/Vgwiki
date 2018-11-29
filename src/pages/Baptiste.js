import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Layout from '../components/layout'
import Models from '../components/Model'


const Baptiste = () => (
    <Layout>
    <Heroes
        bgdesktop={require("./../images/BG/Baptiste_Desktop.jpg")}
        bgtablet={require("./../images/BG/Baptiste_Tablet.jpg")}
        bgmobile={require("./../images/BG/Baptiste_Mobile.jpg")}
        heroname="BAPTISTE"
        role='JUNGLE, MAGE'
        description="Mid-range mage who inflicts fear on foes."
            spotlight="0MG8X_w4EFI">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="739 - 2323"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="2.38 - 5.35"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="273- 636"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="2.17 - 4.26"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="78 - 167"
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
                value="2.8"
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
   bgmodel={require("./../images/BG/Baptisteblurred.jpg")}
   model={require("./../images/models/Baptiste.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="REAP"
                subtitle="HEROIC PERK"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/Baptiste_perk.png'
                text="Baptiste steals soul fragments through combat and is healed for each soul fragment acquired.
                • Upon reaching 4 soul fragments, Baptiste is empowered for 4 seconds and deals increased damage but generates no additional soul fragments.
                • Basic attacks generate one soul fragment
                • Abilities generate one soul fragment for each enemy hero hit.
                • Heal per Soul Fragment: 20-86 (level 1-12) (+ 25% of crystal power)
                • Empowered effects: +35% basic-attack damage and +100% ability damage."
            />
            <Skillbox
                title="BAD MOJO"
                subtitle="A ABILITY"
                text="Baptiste pulls a vial of liquid from his vest and throws it. The vial explodes upon reaching its target or when colliding with an enemy.
                • Enemies near the explosion take damage and the first enemy hit is slowed.
                • Deals 50% less damage to minions."
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/Baptiste_A.png'
            />
            <Skillbox
                title="ORDAINED"
                subtitle="B ABILITY"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/Baptiste_B.png'
                text="Baptiste ordains a target enemy, damaging them and creating an ethereal prison around them. If the ordained target leaves the area, they are stunned and take additional damage."
            />
            <Skillbox
                title="FEARSOME SHADE"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/Baptiste_C.png'
                text="Baptiste summons waves of shade that terrorize enemies caught in their path. Enemies struck by the shade run from the source in fear and take damage each second.
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
                title="Bad Bad Mojo"
                subtitle="RARE"
                color="#6393F9"
                text="Bad Mojo (A) has 2 bonus range."
                text2="• Cooldown 80% (-1.5%)"
                text3="• Dmaage 90% (+2.5%)"
                image={require('./../images/Talents/Baptiste_Rare.png')}
            />
            <Talentbox
                title="The Reaper"
                subtitle="EPIC"
                color="#7A02EA"
                text="Reap (Perk) continues to collect souls when empowered."
                text2="• Passive Attack Speed +30% (+3%)"
                text3="• Heal 45% (+4%)"
                image={require('./../images/Talents/Baptiste_Epic.png')}
            />
            <Talentbox
                title="Army of Souls"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Fearsome Shade (Ult) summons two sets of spectres that travel side by side."
                text2="• Cooldown 70%"
                text3="• Range 15%"
                text4="• Damage 120%"
                image={require('./../images/Talents/Baptiste_Legendary.png')}
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
                color="#7A02EA"
                title="Scarecrow Baptiste"
                text="Epic"
                image={require('./../images/Skins/Baptist_Scarecrow.png')} />
                <Skinbox
                color="#7A02EA"
                title="Anubis Baptiste"
                text="Epic"
                image={require('./../images/Skins/Baptiste_Anubis_Epic.png')} />
        </div>
    </div>
  </Layout>
    )

export default Baptiste