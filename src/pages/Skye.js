import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Skye = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Skye_Desktop.jpg")}
        bgtablet={require("./../images/BG/Skye_Tablet.jpg")}
                bgmobile={require("./../images/BG/Skye_Mobile.jpg")}
        heroname="SKYE"
        role='LANE, SNIPER'
        description="Versatile, elusive mech pilot who can flank enemies from any angle."
                spotlight="N2Ll7RmMnXs">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="708 - 2100"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value=" - "
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="380 - 732"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="72 - 111"
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
   bgmodel={require("./../images/BG/Skyeblurred.jpg")}
   model={require("./../images/models/Skye.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/09/P-Skye-Target-Lock-Large.mp4"
                                    title="TARGET LOCK"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Skye-P.jpg')}
                                    text="Skye's basic attacks apply Target Lock to the last target.
                
                • Basic attacks and Forward Barrage on that locked target grant her up to +2 move speed for 1.2s, but this boost is much weaker while moving backward.
                • Target Lock lasts 3s and is lost when the target is more than 8.5 meters away."
            />
            <Skillbox
            video="https://www.vainglorygame.com/wp-content/uploads/2015/09/A-Skye-Forward-Barrage-Large.mp4"
                                title="FORWARD BARRAGE"
                                subtitle="A ABILITY"
                                text="Skye fires a continuous stream of bullets while strafing in the selected direction for 3s. Building weapon power makes the barrage slow approaching enemies by up to 40%.
            
             • Reactivate this ability to stop firing.
             • Deals bonus damage to locked target.
             • Deals 50% less damage to structures and bosses."
                        image={require('./../images/Ability/Skye-A.jpg')}            
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/09/B-Skye-Suri-Strike-Large.mp4"
                                    title="SURI STRIKE"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Skye-B.jpg')}
                                    text="Skye dashes to a chosen location around her locked target while firing a volley of missiles along a line between her and her target.
                
                 • Multiple missles can hit the same target, but subsequent hits deal 20% damage.
                 • This ability can only be activated when Skye has a locked target.
                 • Activation this ability resets a portion of the cooldown on Forward Barrage.
                 • Passive: Each ability point in Suri Strike increases the duration of Target Lock.
                 • Deals 50% less damage to minions."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/09/C-Skye-Death-From-Above-Large.mp4"
                                    title="DEATH FROM ABOVE"
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Skye-C.jpg')}
                                    text="Skye fires a salvo of missiles at a chosen location around her locked target. After a 1.3s delay, the missiles rain down on that location, stunning enemies for 0.5s. Enemies still in the area afterward are slowed and take crystal damage.
                
                 • Aiming directly on your locked target rains down the missiles in a cluster.
                 • Aiming away from your locked target rains them down in a line across the target's path.
                 • This ability can only be activated when Skye has a locked target.
                 • Deals 50% less damage to structures and bosses.
                 • Passive: Each ability point in Death from Above increases the range of Target Lock."
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
                title="Enhanced Thrusters"
                subtitle="RARE"
                color="#6393F9"
                text="Sure Strike (B) grants Skye a move-speed bonus after completion. Skye passively gains crystal power."
                text2="• Bonus Move Speed 1.5 (+0.1)"
                text3="• Bonus Move Speed Duration 3s"
                text4="• Passive Crystal Power +5% (+1.5%)"
                image={require('./../images/Talents/Skaarf_Rare.png')}
            />
            <Talentbox
                title="Raining Death"
                subtitle="EPIC"
                color="#7A02EA"
                text="Death from Above (Ult) has 1 additional charge."
                text2="• Damage 115% (+15%)"
                text3="• Cooldown 70% (-2.5%)"
                image={require('./../images/Talents/Skaarf_Epic.png')}
            />
            <Talentbox
                title="Piercing Barrage"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Forward Barrage (A) pierces through enemies, damaging all in a line and has 2 bonus range."
                text2="• Damage 100% (+10%)"
                image={require('./../images/Talents/Skaarf_Legendary.png')}
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
                title="Air Combat Skye"
                text="Rare"
                image={require('./../images/Skins/Skye_Air_Combat.png')} />
                <Skinbox
                color="#7A02EA"
                title="Stealth Fighter Skye"
                text="Epic"
                image={require('./../images/Skins/Skye_Stealth_Fighter.png')} />
                <Skinbox
                color="#FF9000"
                title="Supersonic Skye"
                text="Legendary"
                image={require('./../images/Skins/Skye_Supersonic.png')} />
                <Skinbox
                color="#FF9000"
                title="Ride or Die Skye"
                text="Legendary"
                image={require('./../images/Skins/Skye_Ride_or_Die.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Skye