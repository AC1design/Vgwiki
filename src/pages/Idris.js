import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Idris = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Idris_Desktop.jpg")}
        bgtablet={require("./../images/BG/Idris_Tablet.jpg")}
        bgmobile={require("./../images/BG/Idris_Mobile.jpg")}
        heroname="IDRIS"
        role='JUNGLE, ASSASSIN'
        description="Nimble assassin who unlocks melee or ranged fighting styles."
                spotlight="aUL7JieeYUk">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="697 - 2257"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.5 - 4.5"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="77 - 161"
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
   bgmodel={require("./../images/BG/Idrisblurred.jpg")}
   model={require("./../images/models/Idris.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="DIVERGENT PATHS"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Idris-P.jpg")}
                text="Idris unlocks unique combat styles upon attaining 120 weapon or crystal power:
                • Melee (Weapon): Idris’s Shroudstep becomes an instantaneous blink. His basic attacks also restore 10 stamina and reduce the cooldowns of his Shroudstep and Shimmer Strike abilities by 1s.
                • Ranged (Crystal): Idris gains a 3.8-meter ranged attack with a 75% crystal ratio (with bonus crystal damage of 19-85) but only 50% weapon ratio.
                Instead of energy, Idris uses stamina to activate his abilities. Purchasing items with energy and energy recharge instead increases his stamina and stamina regeneration.
                • Max Stamina: 100 + 10% Max Energy
                • Stamina Regen: 7.5 + 50% Energy Regen"
            />
            <Skillbox
                title="SHROUDSTEP"
                subtitle="A ABILITY"
                text="Idris dashes in the target direction, dealing amplified damage to the next target he attacks within 4s.
                • If Idris has not taken damage within the last 4.5s, Shroudstep grants a 3.5s barrier.
                • The availability of the barrier is displayed beneath his stamina meter."
                        image={require("./../images/Ability/Idris-A.jpg")}
            />
            <Skillbox
                title="CHAKRAM"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Idris-B.jpg")}
                text="Idris throws a chakram that returns to him, damaging enemies each time it passes over them.
                • Hitting enemy heroes, miners, or Mythic Creatures recovers 15 stamina.
                • Idris can use his Shroudstep and Shimmer Strike abilities to temporarily keep his chakrams in the air longer.
                • Deals 50% less damage to minions."
            />
            <Skillbox
                title="SHIMMER STRIKE"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Idris-C.jpg")}
                text="Idris disappears into the target hero becomes invulnerable, untargetable and cleanses movement-impairing effects from himself. While attached, tap to make Idris leap out in desired direction, striking all surrounding enemies with weapon damage as he jumps off.
                • If no direction is chosen, Idris will jump toward his original position.
                • Can latch onto enemies for 1.2s or allies for 2.8s.
                "
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
                title="Path of the Seeker"
                subtitle="RARE"
                color="#6393F9"
                text="All Divergent Paths (Perk) bonuses are unlocked. Idris passively gains weapon and crystal power."
                text2="• Passive Weapon Power 40% (+1.5%)"
                text3="• Passive Crystal Power 40% (+1.5%)"
                image={require('./../images/Talents/Idris_Rare.png')}
            />
            <Talentbox
                title="Cha-Cha-Chakram"
                subtitle="EPIC"
                color="#7A02EA"
                text="Chakram (B) throws thress projectiles in a cone."
                text2="• Damage 60% (+5%)"
                text3="• Cooldown 110% (-2.5%)"
                image={require('./../images/Talents/Idris_Epic.png')}
            />
            <Talentbox
                title="Shimmer Heal"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Shimmer Strike (Ult) heals Idris and target ally for a percentage of their maximum health."
                text2="• Max Health Heal 40%"
                text3="• Cooldown 60%"
                image={require('./../images/Talents/Idris_Legendary.png')}
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
                title="Elite Force Idris"
                text="Rare"
                image={require('./../images/Skins/Idris_Elite_Force_R.png')} />
                <Skinbox
                color="#7A02EA"
                title="Horus Idris"
                text="Epic"
                image={require('./../images/Skins/Idris_Horus_Epic.png')} />
            <Skinbox
                color="red"
                title="Idris Origins"
                text="Special Edition"
                image={require('./../images/Skins/Idris_Origins.png')} />
                    <Skinbox
                        color="red"
                        title="Headless Idris"
                        text="Special Edition"
                        image={require('./../images/Skins/Idris_Headless.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Idris