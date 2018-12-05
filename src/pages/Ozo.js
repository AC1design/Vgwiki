import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Ozo = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Ozo_Desktop.jpg")}
        bgtablet={require("./../images/BG/Ozo_Tablet.jpg")}
        bgmobile={require("./../images/BG/Ozo_Mobile.jpg")}
        heroname="OZO"
        role='JUNGLE, ASSASSIN'
        description="Acrobatic monkey with immense self-healing."
                spotlight="Dp7MIjNuZXc">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="769 - 2536"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value=" - "
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="350 - 650"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="70 - 157"
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
                value="1.7"
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
   bgmodel={require("./../images/BG/Ozoblurred.jpg")}
   model={require("./../images/models/Ozo.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="CARNIE LUCK"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Ozo-P.jpg')}
                text="Ozo receives 10-25% additional healing, barrier and fortified health from all sources.

                • This does not affect health regeneration."
            />
            <Skillbox
                title="THREE-RING CIRCUS"
                subtitle="A ABILITY"
                text="Ozo can use this ability three times in a 5s window:
                • First hit: Smashes the target and other enemies in front of him.
                • Second hit: Dashes through his target and deals damage.
                • Final hit: Spins and damages all nearby enemies.
                • Each hit deals weapon damage, can crit, and triggers basic-attack effects on the primary targer.
                • Ozo heals for each enemy damaged by any of these hits (30% against non-heroes)."
                        image={require('./../images/Ability/Ozo-A.jpg')}
            />
            <Skillbox
                title="ACROBOUNCE"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Ozo-B.jpg')}
                text="Ozo jumps onto a target, damaging and slowing it if it is an enemy. While airborne, quickly tap another target to bounce to it. Three hops maximum.

                • Each time Ozo starts a jump, he is granted fortified health.
                • The final landing deals increased damage plus a bonus per prior bounce.
                • If Ozo hops at least twice, he'll get a burst of move speed up to a maximum of 4.5s.
                • Deals 50% less damage to minions."
            />
            <Skillbox
                title="BANGARANG"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Ozo-C.jpg')}
                text="Ozo charges up, then rolls toward a targeted enemy hero. Upon arrival, Ozo damages, stuns for 0.8s, and flips the target over him.

                • While tumbling, Ozo will damage and knock aside other enemies along his path.
                • Max travel duration of 1s."
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
                title="Second Wind"
                subtitle="RARE"
                color="#6393F9"
                text="Acrobounce (B) is reset upon the third bounce."
                text2="• Damage 65% (+2%)"
                text3="• Fortified Health 155% (+7.5%)"
                image={require('./../images/Talents/Ozo_Rare.png')}
            />
            <Talentbox
                title="Ring Leader"
                subtitle="EPIC"
                color="#7A02EA"
                text="Three-Ring Circus (A) heals nearby allies."
                text2="• Heal 110% (+7.5%)"
                image={require('./../images/Talents/Ozo_Epic.png')}
            />
            <Talentbox
                title="Bangaranarang!"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Bangarang (ult) has 1 additional charge."
                text2="• Damage 90% (+15%)"
                text3="• Cooldown 70% (-7.5%)"
                image={require('./../images/Talents/Ozo_Legendary.png')}
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
                    title="Wuxia Ozo"
                    text="Rare"
                    image={require('./../images/Skins/Ozo_Wuxia_R.png')} />
            <Skinbox
                    color="#7A02EA"
                    title="Winged Ozo"
                    text="Epic"
                    image={require('./../images/Skins/Winged_Ozo.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Ozo