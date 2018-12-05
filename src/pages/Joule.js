import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Joule = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Joule_Desktop.jpg")}
        bgtablet={require("./../images/BG/Joule_Tablet.jpg")}
        bgmobile={require("./../images/BG/Joule_Mobile.jpg")}
        heroname="JOULE"
        role='JUNGLE, WARRIOR'
        description="Heavily armored mech rider with a powerful energy beam."
                spotlight="OYcWpLN_408">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="742 - 2487"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.27 - 9.44"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="390 - 555"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="3.5 - 7.02"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="66 - 148"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 113.2%"
                color="#f48596"
            />
            <Statbox
                title="ARMOR"
                value="20 - 25 - 75"
                color="#f6ee71"
            />
            <Statbox
                title="SHIELD"
                value="20 - 55"
                color="#f6ee71"
            />
            <Statbox
                title="ATTACK RANGE"
                value="2.4"
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
   bgmodel={require("./../images/BG/Jouleblurred.jpg")}
   model={require("./../images/models/Joule.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-Perk-Heavy-Plating.mp4'}
                title="HEAVY PLATING"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Joule-P.png')}
                text="Joule has bonus aromr & shield against damage that hits her on the front and sides, but not her back.
                • Bonus defense: 15-90 (level 1-12)"
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-A-Rocket-Leap.mp4'}
                title="ROCKET LEAP"
                subtitle="A ABILITY"
                text="Joule leaps to a target location. Enemies caught underneath Joule take full damage and are stunned, while enemies near the impact are knocked away and take 33% damage."
                        image={require('./../images/Ability/Joule-A.jpg')}
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-B-Thunder-Strike.mp4'}
                title="THUNDER STRIKE"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Joule-B.jpg')}
                text="Joule's mech fires an energy bolt directly in front of her. If this strikes an enemy, the next Thunder Strike will have bonus armor & shield pierce.
                • Overdrive: At max rank, weapon damage can critically strike.
                • Cooldown speed improves with attack speed.
                • Deals 50% less damage to minions."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-C-Big-Red-Button.mp4'}
                title="BLAST TREMOR"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Joule-C.jpg')}
                text="Joule fires a massive beam of energy for 1.5s.
                • The force of this beam pushes Joule backwards during channeling.
                • Deals 50% less damage to structures."
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
                title="Rocket Leapfrog"
                subtitle="RARE"
                color="#6393F9"
                text="Rocket Leap (A) is reset whenever landing on enemies but no longer stuns or knocks back. Joule passively gains armor and shield."
                text2="• Passive Armor +20% (+2.5%)"
                text3="• Passive Shield +20% (+2.5%)"
                text4="• Cooldown 90% (-2%)"
                text5="• Energy Cost 50%"
                image={require('./../images/Talents/Joule_Rare.png')}
            />
            <Talentbox
                title="Backup Button"
                subtitle="EPIC"
                color="#7A02EA"
                text="Big Red Button (Ult) has 1 additional charge."
                text2="• Cooldown 80% (-2.5%)"
                text3="• Damage 75% (+5%)"
                image={require('./../images/Talents/Joule_Epic.png')}
            />
            <Talentbox
                title="Thundering Steps"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Thunder Strike (B) grants Joule bonus move speed when it strikes enemies. Joule passively gains weapon power."
                text2="• Bonus Move Speed 1.5"
                text3="• Bonus Move Speed Duration 2s"
                text4="• Passive Weapon Power +7.5%"
                image={require('./../images/Talents/Joule_Legendary.png')}
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
                title="Killa-Joule 9000"
                text="Rare"
                image={require('./../images/Skins/Joule_Killa-Joule_9000_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Mega-Joule 9000"
                text="Epic"
                image={require('./../images/Skins/Joule_Killa-Joule_9000_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="School Days Joule"
                text="Legendary"
                image={require('./../images/Skins/Joule_Killa-Joule_9000_III_L.png')} />
            <Skinbox
                color="red"
                title="Snow Monster Joule"
                text="Special Edition"
                image={require('./../images/Skins/Joule_Snow_Monster_SE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Joule