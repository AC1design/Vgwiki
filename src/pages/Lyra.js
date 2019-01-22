import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'

const Lyra = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Lyra_Desktop.jpg")}
        bgtablet={require("./../images/BG/Lyra_Tablet.jpg")}
        bgmobile={require("./../images/BG/Lyra_Mobile.jpg")}
        heroname="LYRA"
        role='JUNGLE, PROTECTOR'
        description="Healer and zone mage who can create teleportation portals."
                spotlight="5URpZoYn9a8">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="774 - 2253"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.01 - 7.42"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="248 - 908"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="2.15 - 7.1"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="-"
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
                value="5.6"
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
   bgmodel={require("./../images/BG/Lyrablurred.jpg")}
   model={require("./../images/models/Lyra.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="PRINCIPLE ARCANUM"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Lyra-P.jpg')}
                text="Lyra’s attacks are arcane missiles that deal crystal damage. if she holds her ground after releasing an attack, she automatically follows up with a heavy attack that also slows the target.

                • Each channeled missile consumes 15-20 (level 1-12) energy points, but Lyra can continue using these even if she runs out of energy.
                • Light attack damage: 60-85 (level 1-12) (+60% Crystal Power)(+100% Weapon Power)
                • Heavy attack damage: 60-170 (level 1-12) (+80% Crystal Power)
                • Heavy attack slow: 35% (+0.02% of bonus max health)"
            />
            <Skillbox
                title="IMPERIAL SIGIL"
                subtitle="A ABILITY"
                        image={require('./../images/Ability/Lyra-A.jpg')}
                text="Lyra creates a sigil that heals nearby allied heroes and damages nearby enemy heroes. Reactivate this ability to detonate the sigil, dealing heavy damage to enemies while providing a move speed boost to allies inside and immediately consuming the remaining duration to heal at 30% effectiveness.

                • The healing per second is increase by 9% of Lyra's bonus health.
                • The sigil depletes faster the more heroes it is healing / damaging.
                • The sigil has vision, so it can see enemies.
                • The Detonation deals 50% less damage to minions."
            />
            <Skillbox
                title="BRIGHT BULWARK"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Lyra-B.jpg')}
                text="Lyra creates a walled zone around her, damaging and applying a slow to surrounding enemies.

                • Enemies inside the zone are slowed.
                • Enemies attempting to dash through the wall are stopped.
                • Enemies who cross the wall take the same damage and slow again."
            />
            <Skillbox
                title="ARCANE PASSAGE"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Lyra-C.jpg')}
                text="Lyra teleports to the target location, creating portals at both ends that allow anyone to teleport across.

                • Portals last for 8.5s.
                • After travelling through a portal, heroes must wait 4.5s before re-entering one.
                • Enemies inside of Lyra's Bright Bulwark cannot enter a portal.
                • Heroes standing directly on top of a portal as it forms must step off the portal then re-enter to use it."
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
                title="Twin Missles"
                subtitle="RARE"
                color="#6393F9"
                text=" Principle Arcanum (Perk) shoots an additional projectile but no longer slows."
                text2="• Damage 65% (+3%)"
                image={require('./../images/Talents/Lyra_Rare.png')}
            />
            <Talentbox
                title="Mobile Bulwark"
                subtitle="EPIC"
                color="#7A02EA"
                text="Bright Bulwark (B) moves with Lyra and lasts longer. Lyra passively gains crystal power."
                text2="• Bonus Duration 1.4s (+0.4s)"
                text3="• Passive Crystal Power +7.5% (+2.5%)"
                image={require('./../images/Talents/Lyra_Epic.png')}
            />
            <Talentbox
                title="Gythian Ward"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Bright Bulwark (B) grants a barrier for 2s and removes all negative effects on nearby allies."
                text2="• Max Health to Barrier 10%"
                image={require('./../images/Talents/Lyra_Legendary.png')}
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
                title="School Days Lyra"
                text="Rare"
                image={require('./../images/Skins/Lyra_School_Days_R.png')} />
            <Skinbox
                color="#FF9000"
                title="Dear Diary Lyra"
                text="Legendary"
                image={require('./../images/Skins/Lyra_Dear_Diary_L.png')} />
            <Skinbox
                color="red"
                title="Moon Empress.
                Lyra"
                text="Special Edition"
                image={require('./../images/Skins/Lyra_Empress.png')} />
            <Skinbox
                color="red"
                title="Moon Goddess Lyra"
                text="Special Edition"
                image={require('./../images/Skins/Lyra_Goddess.png')} />
            <Skinbox
                color="red"
                title="Moon Queen Lyra"
                text="Special Edition"
                image={require('./../images/Skins/Lyra_Queen.png')} />
            
        </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Lyra