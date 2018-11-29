import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Lance = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Lance_Desktop.jpg")}
        bgtablet={require("./../images/BG/Lance_Tablet.jpg")}
        bgmobile={require("./../images/BG/Lance_Mobile.jpg")}
        heroname="LANCE"
        role='JUNGLE, WARRIOR'
        description="The king of duels with massive lifesteal and self-healing."
                spotlight="HTZIGNW5F7A">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="842 - 2609"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.79 - 10.94"
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
                value="85 - 178"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
                color="#f48596"
            />
            <Statbox
                title="ARMOR"
                value="35 - 100"
                color="#f6ee71"
            />
            <Statbox
                title="SHIELD"
                value="25 - 75"
                color="#f6ee71"
            />
            <Statbox
                title="ATTACK RANGE"
                value="4.5"
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
   bgmodel={require("./../images/BG/Lanceblurred.jpg")}
   model={require("./../images/models/Lance.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="PARTISAN'S TECHNIQUE"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/lance_partisans-technique_perk.png"
                text="Lance's basic attacks damage every target along their path. However, his attacks are slow to land and attack speed is less effective on him.
                Instead of energy, Lance uses stamina to activate his abilities. Purchasing items with energy and energy regeneration increases his stamina and stamina regeneration.
                • Max Stamina: 100 + 30% Max Energy
                • Stamina Regen: 20 + 50% Energy Regen"
            />
            <Skillbox
                title="IMPALE"
                subtitle="A ABILITY"
                text="Lance lunges forward and strikes through his opponents, dealing weapon damage and rooting them in place (max 1.6s).
                • Overdrive: At max rank, ths ability also resets the cooldown of Combat Roll if Lance hits an enemy.
                • If this attack hits at least one enemy, Lance will immediately recover from the ability.
                • If this attack misses, Lance takes 0.7 seconds to recover.
                • Deals 50% less damage to minions."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/lance_impale_A.png"
            />
            <Skillbox
                title="GYTHIAN WALL"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/lance_gythian-wall_B.png"
                text="Lance smashes enemies back with his shield, dealing weapon damage and also stunning them if they collide with a wall or structure (max 1.4s). Afterward, he holds his shield steadfast, greatly reducing incoming damage from the target direction by up to 90%.

                • Overdrive: At max rank, Lance ignores all negative effects (from any direction) while this ability is active.
                • Damage reduction is 50% effective against turrets.
                • Passive: Lance strafes around the enemy he has most recently attacked. While strafing, he reduces damage from the target's direction by up to 50%."
            />
            <Skillbox
                title="COMBAT ROLL "
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/lance_combat-roll_C.png"
                text="Lance rolls in the target direction. His next basic attack within 2s will strike quickly, dealing bonus crystal damage."
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
                title="Reinforced Walls"
                subtitle="RARE"
                color="#6393F9"
                text="Gythian Wall (B) grants Lance and nearby allies a barrier."
                text2="• Max Health to Barrier 15% (+2.5%)"
                text3="• Barrier Duration 2s"
                text4="• Cooldown 125%"
                image={require('./../images/Talents/Lance_Rare.png')}
            />
            <Talentbox
                title="Rollout"
                subtitle="EPIC"
                color="#7A02EA"
                text="Combat Roll (Ult) has 2 longer range and damages enemies along its path."
                text2="• Basic Attack to Roll Dmg 120% (+4%)"
                text3="• Cooldown 80% (-2.5%)"
                image={require('./../images/Talents/Lance_Epic.png')}
            />
            <Talentbox
                title="Striker"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Basic attacks reduce the cooldown of Impale (A) and Combat Roll (Ult)."
                text2="• Impale Damage 110%"
                text3="• Impale Reduction 30%"
                text4="• Combat Roll Reduction 20%"
                image={require('./../images/Talents/Lance_Legendary.png')}
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
                    title="Gladiator Lance"
                    text="Epic"
                    image={require('./../images/Skins/Lance_Gladiator_E.png')} />
            <Skinbox
                    color="#7A02EA"
                    title="Netherknight Lance"
                    text="Epic"
                    image={require('./../images/Skins/Lance_Netherknight_E.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Pinnacle Lance"
                    text="Legendary"
                    image={require('./../images/Skins/Lance_Netherknight_Legendary.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Corsair Cold Krul"
                    text="Legendary"
                    image={require('./../images/Skins/Krul_Samurai.png')} />
            <Skinbox
                    color="#7A02EA"
                    title="Golden Netherknight Lance"
                    text="Epic"
                    image={require('./../images/Skins/Lance_Golden_LE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Lance