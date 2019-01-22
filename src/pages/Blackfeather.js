import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Blackfeather = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Blackfeather_Desktop.jpg")}
        bgtablet={require("./../images/BG/Blackfeather_Tablet.jpg")}
        bgmobile={require("./../images/BG/Blackfeather_Mobile.jpg")}
        heroname="BLACKFEATHER"
        role='LANE, ASSASSIN'
        description="Evasive fighter who excels at chasing and cleaning up fragile enemies."
                spotlight="d7-fyE9P7QI">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="657 - 2387"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="-"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="81 - 160"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
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
                value="1.8"
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
   bgmodel={require("./../images/BG/Blackfeatherblurred.jpg")}
   model={require("./../images/models/Blackfeather.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="HEARTTHROB"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Blackfeather-P.png")}
                text="Blackfeather's attacks and abilities apply Heartthrob stacks to enemies. Any time stacks are added or refreshed, Blackfeather deals bonus crystal damage for each stack already on the target.

                • Bonus damage: 5-10 (level 1-12) (+15% of crystal power).
                • Mas 2 stacks on minions and monsters, 5 stacks on heroes and objectives.
                • Stacks appear as broken hearts around enemies.
                • Instead of energy, Blackfeather uses Focus for his abilities. This is capped at 100 and naturally regenerates 10 per second. Blackfeather also recovers and additional 10 focus for each basic attack he lands.
                "
            />
            <Skillbox
                title="FEINT OF HEART"
                subtitle="A ABILITY"
                text="Blackfeather lunges to his target with a thrust of his sword, then gains 2.2 bonus movement speed for 3s.

                • If the target has full Heartthrob stacks, it deals bonus weapon damage based on target's missing health
                • Overdrive: At max rank, the cooldown for Feint of Heart is reset if the target is killed within 0.5s.
                • Execute damage is capped against non-heroes.
                • This ability triggers basic-attack effects."
                        image={require("./../images/Ability/Blackfeather-A.jpg")}
            />
            <Skillbox
                title="ON POINT"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Blackfeather-B.jpg")}
                text="Blackfeather pierces all enemies in a line, damaging them.

                • Overdrive: At max rank, On Point gains increased range.
                • If this hits at least one enemy hero, Blackfeather also gains a 1.2s barrier that scales with 5% of his bonus health and recovers 35 focus.
                • The amount of focus recovered is further increased with 2% of his max energy and 50% of his Energy Regen.
                • Deals 50% less damage to minions."
            />
            <Skillbox
                title="ROSE OFFENSIVE"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Blackfeather-C.jpg")}
                text="Blackfeather dashes and slashes all enemies along his path.

                • During the dash, Blackfeather is immune to negative effects and has fortified health.
                • This ability has 2 charges.
                • This ability triggers basic-attack effects."
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
                title="Hummingbird Heart"
                subtitle="RARE"
                color="#6393F9"
                text="Heartthrob (Perk) lasts 4s longer on targets. Blackfeather passively gains weapon power and attack speed."
                text2="• Passive Attack Speed +20% (+2%)"
                text3="• Passive Weapon Power +5% (+1%)"
                image={require('./../images/Talents/Blackfeather_Rare.png')}
            />
            <Talentbox
                title="Point Guard"
                subtitle="EPIC"
                color="#7A02EA"
                text="Landing On Point (B) on an enemy hero grants a stronger barrier to nearby allies for 2s."
                text2="• Barrier 150% (+10%)"
                image={require('./../images/Talents/Blackfeather_Epic.png')}
            />
            <Talentbox
                title="Elusiveness"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Rose Offensive (Ult) has 2 additional charges."
                text2="• Damage 100%"
                text3="• Focus Cost 5%"
                text4="• Charge Time 50%"
                image={require('./../images/Talents/Blackfeather_Legendary.png')}
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
                title="Dynasties Blackfeather"
                text="Rare"
                image={require('./../images/Skins/Blackfeather_Dynasties_R.png')} />
            <Skinbox
                color="#FF9000"
                title="Champion Blackfeather"
                text="Legendary"
                image={require('./../images/Skins/Blackfeather_Champion_L.png')} />
            <Skinbox
                color="red"
                title="Love Bites Blackfeather"
                text="Special Edition"
                image={require('./../images/Skins/Blackfeather_Love_Bites_SE.png')} />
            <Skinbox
                color="red"
                title="Summer Party Blackfeather"
                text="Special Edition"
                image={require('./../images/Skins/Blackfeather_Summer_Party.png')} />
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Blackfeather