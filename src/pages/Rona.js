import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Rona = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Rona_Desktop.jpg")}
        bgtablet={require("./../images/BG/Rona_Tablet.jpg")}
        bgmobile={require("./../images/BG/Rona_Mobile.jpg")}
        heroname="RONA"
        role='JUNGLE, WARRIOR'
        description="Durable berserker who excels in the thick of fights."
                spotlight="EYIhMwdQoug">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="778 - 2563"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value=" - "
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
                value="77 - 156"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
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
   bgmodel={require("./../images/BG/Ronablurred.jpg")}
   model={require("./../images/models/Rona.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/08/P-Rona-Berserkers-Fury-Large.mp4"
                                    title="BERSERKERS' FURY"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Rona-P.png')}
                                    text="Rona attacks faster than most heroes, but she deals 85% damage with each attack.
                
                  • Rona's abilities use Bloodrage instead of energy, a unique resource that is generated from basic attacks, abilities, and taking damage from enemies.
                
                  • Critical strikes and basic attacks against targets afflicted by Mortal Wounds will generate additional Bloodrage.
                  This caps at 100 and decays when Rona has been out of combat for 5s."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/08/A-Rona-Into-the-Fray-Large.mp4"
                                    title="INTO THE FRAY"
                                    subtitle="A ABILITY"
                                    text="Rona leaps into battle, gaining Bloodrage for each enemy hero she collides with. After a short delay, the ground ruptures for 3s, dealing damage and slowing enemies who pass over it by 40%.
                
                  • Rona is additionally granted fortified health for each enemy hero struck by the rupture.
                  • Deals 50% less damage to minions."
                        image={require('./../images/Ability/Rona-A.png')}
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/08/B-Rona-Foesplitter-Large.mp4"
                                    title="FOESPLITTER"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Rona-B.png')}
                                    text="A two-part axe attack that can catch up to - then brutalize - an unsuspecting target.
                
                  First activation: Rona lunges at her target, landing an empowered basic attack and granting her increased move speed and Bloodrage.
                  Second activation: Expend the bonus move speed and all of her Bloodrage to deal 1% bonus damage for each point consumed and apply Mortal Wounds to her target. She is them temporarily granted additional attack speed.
                  Each of Rona's basic attacks reduce Foesplitter's cooldown by 1s."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/08/C-Rona-Red-Mist-Large.mp4"
                                    title="RED MIST"
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Rona-C.png')}
                                    text="Rona drains her Bloodrage and spins in a whirlwind, dealing weapon damage to nearby enemies. While spinning, Rona moves slower and gains fortified health each second.
                
                  • Can be cancelled at any time by reactivating it or using another ability.
                  • Requires at least 25 Bloodrage to activate.
                  • Deals 50% less damage to minions."
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
                title="MOAR Rage"
                subtitle="RARE"
                color="#6393F9"
                text="Increases maximum Bloodrage. Rona passively gains weapon power."
                text2="• Bonus Alt Energy 60 (+10)"
                text3="• Passive Weapon Power +5% (+1.5%)"
                image={require('./../images/Talents/Rona_Rare.png')}
            />
            <Talentbox
                title="Heroic Brawler"
                subtitle="EPIC"
                color="#7A02EA"
                text="Basic attacks reduce the cooldown of Into the Fray (A) by 10%. Rona passively gains attack speed."
                text2="• Passive Attack Speed +25% (+5%)"
                text3="• Damage 50% (+7.5%)"
                image={require('./../images/Talents/Rona_Epic.png')}
            />
            <Talentbox
                title="Fast Whirlwind"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Red Mist (Ult) grants Rona 1.2s bonus move speed."
                text2="• Damage 100%"
                text3="• Cooldown 125%"
                image={require('./../images/Talents/Rona_Legendary.png')}
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
                title="Fury Rona"
                text="Rare"
                image={require('./../images/Skins/Rona_Fury.png')} />
            <Skinbox
                color="#7A02EA"
                title="Peacekeeper Rona"
                text="Epic"
                image={require('./../images/Skins/Rona_Peacekeeper.png')} />
            <Skinbox
                color="#FF9000"
                title="Churnguard Rona"
                text="Legendary"
                image={require('./../images/Skins/Rona_Churnguard.png')} />
            <Skinbox
                color="#FF9000"
                title="Red Rona"
                text="Legendary"
                image={require('./../images/Skins/Rona_Red.png')} />
            <Skinbox
                color="red"
                title="Killer Bunny Rona"
                text="Special Edition"
                image={require('./../images/Skins/Rona_Killer_Bunny_SE.png')} />
            <Skinbox
                color="#FADA5E"
                title="Killer Bunny Rona"
                text="Limited Edition"
                image={require('./../images/Skins/Rona_Killer_Bunny_LE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Rona