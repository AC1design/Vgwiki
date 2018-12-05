import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Kinetic = () => (
    <div style={{ height: "100%" }}>
    <Layout>
    <Heroes
        bgdesktop={require("./../images/BG/Kinetic_Desktop.jpg")}
        bgtablet={require("./../images/BG/Kinetic_Tablet.jpg")}
        bgmobile={require("./../images/BG/Kinetic_Mobile.jpg")}
        heroname="KESTREL"
        role='LANER, SNIPER'
        description="Nimble duelist weilding a powerful pulse cannon"
                spotlight="I9A1w1OIIq4">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="721 - 2019"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.81 - 6.78"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="169 - 389"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="3.51 - 6.04"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="64 - 97"
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
                value="6.1"
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
   bgmodel={require("./../images/BG/Kineticblurred.jpg")}
   model={require("./../images/models/Kinetic.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
        <Skillbox
            video={require('./../images/SkillVideos/Kinetic-P.mp4')}
                title="TRACER SHOTS"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Kinetic-P.jpg')}
                text="Landing Plasma Driver grants Kinetic a stack of Tracer Shots up to 4 stacks.
                Tracer Shots: Kinetic fires a tracer at her target.
                • Tracer Damage: 4-15 (Level 1-12) (+10% weapon power)"
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kinetic-A.mp4')}
                title="PLASMA DRIVER"
                subtitle="A ABILITY"
                text="Kinetic unleashes a burst of energy, damaging the first enemy struck."
                        image={require('./../images/Ability/Kinetic-A.jpg')}
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kinetic-B.mp4')}
                title="OVERWHELM"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Kinetic-B.jpg')}
                text="Kinetic dashes and temporarily becomes Charged for 5s.
                Charged: Kinetic's next Plasma Driver deals more damage, has increased range, and slows her target.
                
                • Overdrive: Kinetic's next Plasma Driver briefly stuns her target.
                • Refreshes Plasma Driver's cooldown"
            />
            <Skillbox
                video={require('./../images/SkillVideos/Kinetic-C.mp4')}
                title="IRON MANDATE"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Kinetic-C.jpg')}
                text="Kinetic charges up a powerful blast and fires it at her target.
                • Consumes all stacks of Tracer Shots to deal 25% bonus damage per stack
                • Can be blocked by enemy heroes, structures, and jungle bosses."
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
                title="Pain Tracers"
                subtitle="RARE"
                color="#6393F9"
                text="Tracer Shots (Perk) deals increased damage. Kinetic passively gains attack speed."
                text2="• Attack Speed 30% (+2%)"
                text3="• Damage 104% (+4%)"
                image={require('./../images/Talents/Kinetic_Rare.png')}
            />
            <Talentbox
                title="Plasma Overdrive"
                subtitle="EPIC"
                color="#7A02EA"
                text="Plasma Driver (A) fires two additional bursts."
                text2="•  Damage 60% (+5%)"
                text3="• Range -2"
                image={require('./../images/Talents/Kinetic_Epic.png')}
            />
            <Talentbox
                title="Max Kinetic"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Damaging enemies with Plasma Driver (A) reduces Inertial Dash’s (B) cooldown."
                text2="• Damage 30%"
                text3="• Cooldown 150%"
                image={require('./../images/Talents/Kinetic_Legendary.png')}
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
                title="Enforcer Kinetic"
                text="Rare"
                image={require('./../images/Skins/Kinetic_Enforcer.png')} />
        </div>
    </div>
  </Layout>

  </div >
    )

export default Kinetic