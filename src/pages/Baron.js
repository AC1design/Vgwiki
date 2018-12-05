import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Baron = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Baron_Desktop.jpg")}
        bgtablet={require("./../images/BG/Baron_Tablet.jpg")}
        bgmobile={require("./../images/BG/Baron_Mobile.jpg")}
        heroname="BARON"
        role='LANE, SNIPER'
        description="Rocket soldier who can nuke anywhere on the map."
                spotlight="qTHw50-xTbc">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="679 - 2054"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="3.29 - 7.91"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="270 - 765"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="6.67 - 18"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="71 - 130"
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
                value="5.4"
                color="#e19efb"
                />
                <Statbox
                title="MOVE SPEED"
                value="3"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Baronblurred.jpg")}
   model={require("./../images/models/Baron.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="ROCKET LAUNCHER"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Baron-P.jpg')}
                text="Baron’s basic attacks deal 130% weapon damage to the target and surrounding enemies.
                • Explosions deal 65% damage to surrounding enemies.
                • Explosions deal 50% less damage to minions."
            />
            <Skillbox
                title="PORCUPINE MORTAR"
                subtitle="A ABILITY"
                text="Baron launches artillery toward the target location, heavily damaging enemies on impact. This ability has 2 charges.

                • Enemies are also slowed by 10% (+10% weapon power), decaying over 2.2s.
                • This slow is further increased with weapon power up to a cap of 30% with 200 weapon power.
                • The range of this ability increases with crystal power up to a cap of 11 meters with 200 crystal power.
                • Baron can fire this while using Jump Jets.
                • Deals 50% less damage to minions."
                        image={require('./../images/Ability/Baron-A.jpg')}
            />
            <Skillbox
                title="JUMP JETS"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Baron-B.jpg')}
                text="After a brief delay, Baron jets to the location then gains bonus move speed for 2.1s. His next basic attack is a double shot.
                Overdrive: At max rank, Baron ignores all debuffs while leaping.
                • Baron takes longer to power up the farther away he is from his destination. However, this delay is reduced by weapon and crystal power up to a maximum of 200 total.
                • Basic attacks reduce this ability's cooldown by 15%."
            />
            <Skillbox
                title="ION CANNON"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Baron-C.jpg')}
                text="Baron targets a location anywhere on the map for an orbital strike., obliterating the area after a 3s delay.

                • Deals 50% less damage to minions.
                • This deals full damage to enemies near the center, falling off to 65% damage at the edges.
                • Although Baron and his allies see the designated location immediately, enemies only become aware of it 0.9s before impact.
                • Passive: Each rank of this ability permanently increases Baron's basic-attac range.
                • Deals 50% less damage to minions.
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
                title="Turbo Jets"
                subtitle="RARE"
                color="#6393F9"
                text="Jump Jets (B) has no startup delay and fires three rockets on Baron’s next basic attack."
                text2="• Cooldown 110% (-2%)"
                text3="• Triple Shot Damage 70% (+2%)"
                image={require('./../images/Talents/Baron_Rare.png')}
            />
            <Talentbox
                title="Endless Mortars"
                subtitle="EPIC"
                color="#7A02EA"
                text="Porcupine Mortar (A) has 6 additional charges and travels faster."
                text2="• Damage 50% (+7.5%)"
                text3="• Energy Cost 20%"
                image={require('./../images/Talents/Baron_Epic.png')}
            />
            <Talentbox
                title="Trion Cannon"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Ion Cannon (Ult) has 2 additional charges. Baron passively gains attack range."
                text2="• Charge Time 60%"
                text3="• Damage 80%"
                text4="• Passive Bonus Attack Range 0.5"
                image={require('./../images/Talents/Baron_Legendary.png')}
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
                title="Elite Force Baron"
                text="Rare"
                image={require('./../images/Skins/Baron_Elite_Force_R.png')} />
                <Skinbox
                color="#FF9000"
                title="Fly or Die Baron"
                text="Legendary"
                image={require('./../images/Skins/Baron_Fly_or_Die_Legendary.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Baron