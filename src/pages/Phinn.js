import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Phinn = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Phinn_Desktop.jpg")}
        bgtablet={require("./../images/BG/Phinn_Tablet.jpg")}
        bgmobile={require("./../images/BG/Phinn_Mobile.jpg")}
        heroname="PHINN"
        role='JUNGLE, PROTECTOR'
        description="Extremely tanky and can pull in enemies from across the screen."
                spotlight="hu9kTiwJejc">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="892	2781"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.39	7.24"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="220	440"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="95	154"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 113.2%"
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
                value="1.9"
                color="#e19efb"
            />
            <Statbox
                title="MOVE SPEED"
                value="3.1"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Phinnblurred.jpg")}
   model={require("./../images/models/Phinn.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="UNSTOPPABLE"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Phinn-p.jpg')}
                text="Phinn cannot be stopped or stunned. All movement-impairing effects are instead reduced to moderate slows, and stuns are converted to silences.
                • He even shrugs off attempts on his life, passively gaining 18% additional armor, shield, and max health.
                Water Denizen: Phinn gains the 5V5 river movement bonus in both directions."
                />
            <Skillbox
                title="QUIBBLE"
                subtitle="A ABILITY"
                text="Phinn slams his anchor down on the targeted location, heavily slowing enemies for 0.9s.
                • Overdrive: At max rank, the slow becomes a stun!
                • Deals 50% less damage to minions."
                        image={require('./../images/Ability/Phinn-A.jpg')}
                              />
            <Skillbox
                title="POLITE COMPANY"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Phinn-b.jpg')}
                text="Phinn stomps the earth, damaging all enemies in a wide area and nudging them toward him. The effect reverberates around allies, temporarily granting them fortified health.
                • Fortified health increases by 4% of Phinn's bonus health and 15% of Phinn's bonus armor/shield."/>
            <Skillbox
                title="FORCED ACCORD"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Phinn-C.jpg')}
                text="Phinn throws his anchor in a direction. After the anchor reaches its destination, Phinn yanks it back, damaging all enemies in its path and pulling them back to him."/>
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
                title="Friendly Cavil"
                subtitle="RARE"
                color="#6393F9"
                text="Polite Company (B) resets the cooldown of Quibble (A). The energy costs of both abilities are reduced by 50%."
                text2="• Damage 70% (+3%)"
                text3="• Energy Cost 50%"
                image={require('./../images/Talents/Phinn_Rare.png')}
            />
            <Talentbox
                title="Phaster"
                subtitle="EPIC"
                color="#7A02EA"
                text="Polite Company (B) grants bonus move speed to Phinn and his allies."
                text2="• Fortified Health 100% (+1%)"
                text3="• Bonus Move Speed 1.3 (+0.2)"
                image={require('./../images/Talents/Phinn_Epic.png')}
            />
            <Talentbox
                title="Raid Boss"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Phinn rapidly regenerates health."
                text2="• Damage 45% (+7.5%)"
                text3="• Health Regen / Sec 7% (+2%)"
                image={require('./../images/Talents/Phinn_Legendary.png')}
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
                title="Bonecruncher Phinn"
                text="Rare"
                image={require('./../images/Skins/Phinn_Bonecruncher.png')} />
            <Skinbox
                color="#7A02EA"
                title="Bonegnasher Phinn"
                text="Epic"
                image={require('./../images/Skins/Phinn_Bonegnasher.png')} />
            <Skinbox
                color="#FF9000"
                title="Churn Tyrant Phinn"
                text="Legendary"
                image={require('./../images/Skins/Phinn_Churn_Tyrant.png')} />
            <Skinbox
                color="red"
                title="Summer Party Phinn"
                text="Special Edition"
                image={require('./../images/Skins/Phinn_Summer_Party.png')} />
            </div>
    </div>
  </div >
  </Layout>
    )

export default Phinn