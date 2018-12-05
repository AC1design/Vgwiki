import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Fortress = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Fortress_Desktop.jpg")}
        bgtablet={require("./../images/BG/Fortress_Tablet.jpg")}
        bgmobile={require("./../images/BG/Fortress_Mobile.jpg")}
        heroname="FORTRESS"
        role='JUNGLE, PROTECTOR'
        description="Agressive pack leader who swarms the enemy with great speed."
                spotlight="DGEg_EsKwwY">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="761 - 2581"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.3 - 9.91"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="300 - 465"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.56 - 3.21"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="73 - 156"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 144%"
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
                value="3.6"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Fortressblurred.jpg")}
   model={require("./../images/models/Fortress.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/08/P-Fortress-Packmates-Large.mp4'}
                title="PACKMATES"
                subtitle="HEROIC PERK"
                        image={require("./../images/Ability/Fortress-P.jpg")}
                text="When Fortress is near an allied hero, he will move faster after 1s. He will maintain this move-speed bonus so long as he's alongside any allied hero. "
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/08/A-Fortress-Truth-of-the-Tooth-Large.mp4'}
                title="TRUTH OF THE TOOTH"
                subtitle="A ABILITY"
                text="Fortress marks the target enemy as prey and his next basic attack becomes a short-range lunge.

                • Fortress and his allies move faster toward prey and have lifesteal when attacking them."
                        image={require("./../images/Ability/Fortress-A.jpg")}
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/08/B-Fortress-Truth-of-the-Tooth-Large.mp4'}
                title="LAW OF THE CLAW"
                subtitle="B ABILITY"
                        image={require("./../images/Ability/Fortress-B.jpg")}
                text="Fortress claws his target, causing it to bleed for several seconds.

                • Attacks from Fortress and his allies increase bleeding by one stack.
                • Upon reaching 7 stacks, the target is dealt a burst of damage based on its max health and receives mortal wound (reduced healing).
                • Overdrive: At max rank, the target is also slowed by 40% upon reaching 6 stacks.
                • Bleeding damage per second: 10 (+15% of crystal power)"
            />
            <Skillbox
                video={'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/themes/vainglory/images/icon-play-round.png'}
                title="ATTACK OF THE PACK"
                subtitle="ULTIMATE"
                        image={require("./../images/Ability/Fortress-C.jpg")}
                text="Fortress summons a pack of wolves. Each pack wolf seeks out a different enemy hero.

                • It takes three separate attacks to kill a pack wolf.
                • Wolves apply bleeding with their basic attacks.
                • Wolves take normal damage from abilities and are granted 20% of Fortress' bonus defensive stats.
                • Fortress gains fortified health and attack speed when the wolves are summoned."
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
                title="Longtooth"
                subtitle="RARE"
                color="#6393F9"
                text="Truth of the Tooth (A) has 1.6 bonus range. Fortress passively gains attack speed and weapon power."
                text2="• Bonus Range 1.6 (+0.1)"
                text3="• Passive Weapon Power +0.5% (+0.5%)"
                text4="• Passive Attack Speed +0.5% (+0.5%)"
                image={require('./../images/Talents/Fortress_Rare.png')}
            />
            <Talentbox
                title="Critical Wounds"
                subtitle="EPIC"
                color="#7A02EA"
                text="Fortress gains +15% critical chance for each active wolf summoned by Attack of the Pack (Ult). Fortress passively gains critical strike damage."
                text2="• Passive Crit Dmg +25% (+2.5%)"
                text3="• Cooldown 125% (-5%)"
                image={require('./../images/Talents/Fortress_Epic.png')}
            />
            <Talentbox
                title="Flank Attack"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Truth of the Tooth (A) and Law of the Claw (B) spawn a wolf to attack Fortress’ target, up to a maximum of 3 wolves."
                text2="• Bleed Damage 60%"
                text3="• Cooldown 190%"
                image={require('./../images/Talents/Fortress_Legendary.png')}
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
                title="Firehound Fortress"
                text="Rare"
                image={require('./../images/Skins/Fortress_Netherworld_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Netherworld Fortress"
                text="Epic"
                image={require('./../images/Skins/Fortress_Netherworld_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Cerberus Fortress"
                text="Legendary"
                image={require('./../images/Skins/Fortress_Netherworld_III_L.png')} />
            <Skinbox
                color="#6393F9"
                title="Dire Fortress"
                text="Rare"
                image={require('./../images/Skins/Fortress_Dire_Rare.png')} />
            <Skinbox
                color="#FADA5E"
                title="Gift Wrapped Fortress"
                text="Limited Edition"
                image={require('./../images/Skins/Fortress_Gift-wrapped_LE.png')} />
            <Skinbox
                color="red"
                title="Gift Wrapped Fortress"
                text="Special Edition"
                image={require('./../images/Skins/Fortress_Gift-wrapped_SE.png')} />
            <Skinbox
                color="red"
                title="Summer Party Fortress"
                text="Special Edition"
                image={require('./../images/Skins/Fortress_Summer_Party.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Fortress