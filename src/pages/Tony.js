import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Tony = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Tony_Desktop.jpg")}
        bgtablet={require("./../images/BG/Tony_Tablet.jpg")}
        bgmobile={require("./../images/BG/Tony_Mobile.jpg")}
        heroname="TONY"
        role='JUNGLE, WARRIOR'
        description="Dwarven brawler who taunts and pummels enemies."
                spotlight="HG-_NNyu4I8">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
        <Statbox
                title="HEALTH"
                value="762 - 2544"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.01 - 7.42"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="280 - 643"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.87 - 4.29"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="79 - 1.64"
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
   bgmodel={require("./../images/BG/Tonyblurred.jpg")}
   model={require("./../images/models/Tony.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
            title="COME AT ME"
                                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Tony-P.png')}
                                text="When Tony receives damage, he gains 60-302 (level 1-12) (+20% of his bonus health) health barrier for 2s. This cannot occur again within 12s-6.5s (level 1-12)."
            />
            <Skillbox
                title="JAWBREAKER"
                                    subtitle="A ABILITY"
                                    text="Tony’s next three basic attacks are empowered. These attacks launch Tony toward his target, dealing bonus damage. The third attack is a two-handed strike that will stun his target.
                
                 • Tony also gains a decaying move speed bonus when activating this ability."
                        image={require('./../images/Ability/Tony-A.png')}
            />
            <Skillbox
                title="TRASH TALK"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Tony-B.png')}
                                    text="Tony hurls insults in the target direction. All enemies hit receive damage and heroes are forced to attack Tony for 0.8s.
                
                 • This also resets the cooldown of Come At Me, allowing it to trigger again.
                 • Tony gains a 25% damage reduction while taunting.
                 • The duration is further increased with weapon power up to a cap of 1.8s with 300 weapon power."
            />
            <Skillbox
                title="BADA BOOM"
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Tony-C.png')}
                                    text="Tony winds up, then dashes to target location, releasing a massive uppercut. This colossal punch deals damage and knocks away all enemies caught in the area."
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
                title="Mighty Brawler"
                subtitle="RARE"
                color="#6393F9"
                text="Tony gains bonus attack speed and increased health barrier from Come At Me (Perk)."
                text2="• Attack Speed 10% (+2.5%)"
                text3="• Barrier 20% (+5%)"
                image={require('./../images/Talents/Tony_Rare.png')}
            />
            <Talentbox
                title="Haymakers"
                subtitle="EPIC"
                color="#7A02EA"
                text="Tony’s Jawbreaker (A) now deals damage in an area around the target."
                text2="• Bonus Damage 30% (+2.5%)"
                image={require('./../images/Talents/Tony_Epic.png')}
            />
            <Talentbox
                title="Doesn’t Even Hurt"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Tony takes no damage from taunted targets."
                text2="• Barrier Duration 1s"
                image={require('./../images/Talents/Tony_Legendary.png')}
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
                title="Steam Knight Tony"
                text="Rare"
                image={require('./../images/Skins/Tony_SteamKnight.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Tony