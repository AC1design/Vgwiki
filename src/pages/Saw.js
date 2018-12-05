import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Saw = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/SAW_Desktop.jpg")}
        bgtablet={require("./../images/BG/SAW_Tablet.jpg")}
        bgmobile={require("./../images/BG/SAW_Mobile.jpg")}
        heroname="SAW"
        role='LANE, SNIPER'
        description="Heavy machine gunner who sacrifices move speed for damage."
                spotlight="2nJHJGgcO3k">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="683 - 2023"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.4 - 5.15"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="150 - 315"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1 - 2.21"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="50 - 105"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 111%"
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
                value="6.6"
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
   bgmodel={require("./../images/BG/Sawblurred.jpg")}
   model={require("./../images/models/Saw.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-P-Spin-Up.mp4"
                title="SPIN UP"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Saw-P.png')}
                text="Every basic attack gives SAW increased attack speed, but it also sifnificantly decreases his move speed.
                
                 • Each basic attack grants SAW +15% attack speed.
                 • Each basic attack decreases SAW's move speed by -0.12
                 • Max 12 stacks.
                 • After 3.5s without basic attacking, SAW rapidly spins down."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-B-Suppressing-Fire.mp4"
                title="ROADIE RUN"
                subtitle="A ABILITY"
                text="SAW sprints and switches to a melee combat knife. If SAW attacks someone, he will deal bonus damage based on the target's missing health & roll backwards.
                
                 • Activating this ability clears all stacks of Spin Up.
                 • Crystal will boost the speed, up to a maximum of +3.2."
                        image={require('./../images/Ability/Saw-A.jpg')}
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-C-Mad-Cannon.mp4"
                title="SUPPRESSING FIRE"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Saw-B.jpg')}
                text="SAW fires a hurricane of bullets in a set direction for 2 seconds, damaging and slowing enemies in its path.
                Finishing this ability grants all stacks of Spin Up and resets the cooldown of Roadie Run. Deal reduced damage to turrets if out of range."
            />
            <Skillbox
              video="https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-A-Roadie-Run.mp4"
              title="MAD CANNON"
              subtitle="ULTIMATE"
                        image={require('./../images/Ability/Saw-C.jpg')}
              text="SAW loads explosive shells into his gun which deal additional damage based on the target's missing health. The shells also deal splash damage based on the amount of crystal power SAW has.
             • This explosive ammo fires 36% slower and grants 2 stacks of Spin Up."
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
                title="Piercing Bullets"
                subtitle="RARE"
                color="#6393F9"
                text="SAW’s basic attack pierces its target to hit all enemies along its path."
                text2="• Bonus Range 0.5"
                text3="• Damage 90% (+2.5%)"
                        image={require('./../images/Talents/SAW_Rare.png')}
            />
            <Talentbox
                title="Speedy Spin Up"
                subtitle="EPIC"
                color="#7A02EA"
                text="Spin Up (Perk) no longer slows SAW."
                text2="• Speed Boost Per Stack 0.012 (+0.017)"
                        image={require('./../images/Talents/SAW_Epic.png')}
            />
            <Talentbox
                title="Road Rage"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="SAW gains Spin Up (Perk) stacks after attacking an enemy with Roadie Run (A). Basic attacks reduce the cooldown of Roadie Run (A) by 50%."
                text2="• Damage 100%"
                text3="• Stacks 6"
                        image={require('./../images/Talents/SAW_Legendary.png')}
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
                title="SAWborg 2.0"
                text="Rare"
                image={require('./../images/Skins/SAW_SAWborg_2.0.png')} />
            <Skinbox
                color="#7A02EA"
                title="SAWborg 3.0"
                text="Epic"
                image={require('./../images/Skins/SAW_SAWborg_3.0.png')} />
            <Skinbox
                color="#FF9000"
                title="SAWborg X"
                text="Legendary"
                image={require('./../images/Skins/SAW_SAWborg_X.png')} />
            <Skinbox
                color="#6393F9"
                title="Elite Force SAW"
                text="Rare"
                image={require('./../images/Skins/SAW_Elite_Force.png')} />
            <Skinbox
                color="red"
                title="Summer Party SAW"
                text="Special Edition"
                image={require('./../images/Skins/SAW_Summer_Party_SE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Saw