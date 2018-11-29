import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Varya = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Varya_Desktop.jpg")}
        bgtablet={require("./../images/BG/Varya_Tablet.jpg")}
        bgmobile={require("./../images/BG/Varya_Mobile.jpg")}
        heroname="VARYA"
        role='LANE, MAGE'
        description="Shocking valkyrie who chains massive damage across enemy teams."
                spotlight="dMBPEcWHgek">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
        <Statbox
                title="HEALTH"
                value="642 - 2127"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.81 - 6.22"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="950 - 1500"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="36 - 64.6"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="10 - 10"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 115%"
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
   bgmodel={require("./../images/BG/Kestrelblurred.jpg")}
   model={require("./../images/models/Varya.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
            title="CHAIN LIGHTNING"
            subtitle="HEROIC PERK"
            image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/Perk_varya_chain_lightning.jpg'
            text="Varya's attacks deal 70-147 (level 1-12) (+40% Crystal Power) crystal damage. If Varya holds her ground after attacking, she will consume 170 energy to striker her target again and Chain Lightning up to 3 additional targets.
            • Chain Lightning: Deals 30-69 (level 1-12) (+35% Crystal Power) damage to each target."/>
            <Skillbox
            title="STORMFORGED SPEAR"
                            subtitle="A ABILITY"
                            text="Varya throws a spear at lightning speed, striking the first enemy in its path. This deals a burst of damage to the target and chains additional damage to nearby targets.
        
         • When cast during or after Arc Recursion, the spear is thrown more quickly.
         • Number or additional targets hit is equal to her Chain Lighting attack.
         • The initial spear does not impact on lane minions."
                            image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/A_icon_varya_lightning_bolt.jpg'
            />
            <Skillbox
                title="ARC RECURSION"
                                    subtitle="B ABILITY"
                                    image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/B_icon_varya_Charge_dash.jpg'
                                    text="After gathering power for 0.9s, Varya’s next two move commands will instantly dash in the chosen direction, striking the 3 nearest enemies at the end of each dash. For each enemy struck, Varya recovers 5% of her energy and gains a barrier equal to 3% of her health (bonuses doubled on heroes).
                
                 • Overdrive: Varya moves further with each dash.
                 • Varya can dash at any time, but will only dash once if she has not fully charged.
                 • Varya can activate Stormforged Spear at any time during this ability. Any remaining dashes will trigger after the spear is thrown.
                 • Deals 50% less damage to minions."
            />
            <Skillbox
                title="ANVIL'S HAMMER"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/C_icon_varya_Lightning_storm.jpg'
                text="After channeling for 2.4s, Varya unleashes the fury of the storm, calling a series of lightning strikes on every enemy hero, regardless of distance. Passively, each rank of the ultimate permanently increases her attack speed and the number enemies her Chain Lightning and Stormforged Spear will hit.
                
                 • Lightning strikes target the ground beneath enemy heroes, giving them an opportunity to move out of the way.
                 • Lightning strikes deal 50% reduced damage to enemies already hit lightning in the same wave.
                 • Varya can break out of channeling early by activating Stormforged Spear or Arc Recursion. This does not cancel the spell.
                 • Deals 50% less damage to minions."/>
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
                title="Long Strike"
                subtitle="RARE"
                color="#6393F9"
                text="Tony gains bonus attack speed and increased health barrier from Come At Me (Perk)."
                text2="• Bonus Range 0.8 (+0.3)"
                text3="• Damage 101% (+1%)"
                text4="• Stun Duration 0.12s (+0.02s)"
                image={require('./../images/Talents/Varya_Rare.png')}
            />
            <Talentbox
                title="Static Barrier"
                subtitle="EPIC"
                color="#7A02EA"
                text="Tony’s Jawbreaker (A) now deals damage in an area around the target."
                text2="• Barrier 130% (+15%)"
                image={require('./../images/Talents/Varya_Epic.png')}
            />
            <Talentbox
                title="Thunderstorm"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Tony takes no damage from taunted targets."
                text2="• Damage 130% (+20%)"
                image={require('./../images/Talents/Varya_Legendary.png')}
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
                title="Winter War Varya"
                text="Rare"
                image={require('./../images/Skins/Varya_WinterWar.png')} />
        </div>
    </div>
  </div>
  </Layout>
    )

export default Varya