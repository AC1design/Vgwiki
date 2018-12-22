import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Malene = () => (
    <Layout>
    <Heroes
        bgdesktop={require("./../images/BG/Malene_Desktop.jpg")}
        bgtablet={require("./../images/BG/Malene_Tablet.jpg")}
        bgmobile={require("./../images/BG/Malene_Mobile.jpg")}
        heroname="MALENE"
        role='LANE, MAGE'
        description="Form swapping spellcaster who has the tools for any situation."
        spotlight="9H2Xp_HWB8o">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="696 - 2148"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="4.75 - 8.05"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="300 - 685"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="3.2 - 5.4"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="-"
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
                value="5.8"
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
   bgmodel={require("./../images/BG/Maleneblurred.jpg")}
   model={require("./../images/models/Malene.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="MASKED BALL"
                subtitle="HEROIC PERK"
                    image={require('./../images/Ability/Malene-P.png')}
                text="Malene's ultimate is available at level 1 and allows her to switch between Light Form and Shadow Form. Additionally, Malene's basic attacks deal crystal damage.

                • Basic attack crystal damage: 70-126 (level 1-12) (+60% Crystal Power)(+100% Weapon Power).
                • For 6s after switching forms, Malene's next basic attack is empowered."
            />
            <Skillbox
                title="LIGHT RIBBONS"
                subtitle="A ABILITY (LIGHT FORM)"
                text="Malene sends ribbons of light in the target direction, damaging and immobilizing the first enemy hit."
                    image={require('./../images/Ability/Malene-A1.jpg')}
            />
            <Skillbox
                title="SHADOW TENDRILS"
                subtitle="A ABILITY (SHADOW FORM)"
                text="Shadow Form - Shadow Tendrils: Malene unleashes three shadow tendrils in the target direction, dealing crystal damage to all enemies along their path.
                • Each tendril deals its own instance of damage.
                • Deals 50% less damage to minions."
                    image={require('./../images/Ability/Malene-A2.jpg')}
            />
            <Skillbox
                title="ROYAL AMNESTY"
                subtitle="B ABILITY (LIGHT FORM)"
                    image={require('./../images/Ability/Malene-B1.jpg')}
                text="Malene instantly imbues herself with light, granting herself a barrier and a burst of movement speed for 3s."
            />
            <Skillbox
                title="WICKED ESCAPADE"
                subtitle="B ABILITY (SHADOW FORM)"
                    image={require('./../images/Ability/Malene-B2.jpg')}
                text="Malene instantly becomes a trail of shadows for 1.5s, becoming invulnerable and slowing enemies she passes through. When this effect ends, enemies near her original location receive a burst of damage."
            />
            <Skillbox
                title="ENCHANTED TRANSFORMATION"
                subtitle="ULTIMATE"
                    image={require('./../images/Ability/Malene-C.jpg')}
                text="Malene switches between Light Form and Shadow Form, swapping abilities and gaining an empowerment on her next basic attack based on which form she switches into.

                • Shadow Empowerment: Deal bonus damage.
                • Light Empowerment: Slows target."
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
                title="Spiky-Spiky"
                subtitle="RARE"
                color="#6393F9"
                text="Wicked Escapade (Shadow B) will also deal damage where Malene appears."
                text2="• Damage 103% (+3%)"
                text3="• Cooldown 90% (-1%)"
                image={require('./../images/Talents/Malene_Rare.png')}
            />
            <Talentbox
                title="Shadow Terror"
                subtitle="EPIC"
                color="#7A02EA"
                text="Shadow Tendrils (Shadow A) will also fear enemies."
                text2="• Damage 101% (+1%)"
                text3="• Duration 0.6s (+0.1s)"
                image={require('./../images/Talents/Malene_Epic.png')}
            />
            <Talentbox
                title="Royal Favors"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Royal Amnesty (Light B) will also apply to nearby allies and deal damage around shielded targets upon expiration."
                text2="• Barrier 120%"
                text3="• Damage 200"
                image={require('./../images/Talents/Malene_Legendary.png')}
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
                color="Red"
                title="Trick or Treat Malene"
                text="Special Edition"
                image={require('./../images/Skins/Malene_Trick_or_Treat.png')} />
        </div>
    </div>
  </Layout>
    )

export default Malene