import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Taka = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Taka_Desktop.jpg")}
        bgtablet={require("./../images/BG/Taka_Tablet.jpg")}
        bgmobile={require("./../images/BG/Taka_Mobile.jpg")}
        heroname="TAKA"
        role='JUNGLE, ASSASSIN'
        description="Stealthy assassin who can heal while invisible."
                spotlight="Oo9Mu7cRRzA">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="702 - 2287"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.51 - 7.36"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="180 - 422"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.33 - 3.09"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="68 - 125"
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
                value="2"
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
   bgmodel={require("./../images/BG/Takablurred.jpg")}
   model={require("./../images/models/Taka.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/themes/vainglory/images/icon-play-round.png"
                                    title="HOUSE KAMUHA"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Taka-P.jpg')}
                                    text="Taka gains Mortal Strike every 4s.
                
                  • Mortal Strike: Taka's next basic attack deals 30-63 (level 1-12) (+35% weapon power) bonus damage and briefly gains bonus movement speed.
                
                  • When Taka uses an ability or lands a Mortal Strike, he gains a stack of Ki.
                
                  • Ki: Taka gains Mortal Strike faster and his ability cooldown are reduced by 10% per stack.
                
                  • 5 stacks max."
                />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-A-Kaiten.mp4"
                                    title="KAITEN"
                                    subtitle="A ABILITY"
                                    text="Taka flips over his target, cutting it with his switchblade. Taka is invulnerable to damage & debuffs while in mid-air."
                        image={require('./../images/Ability/Taka-A.jpg')}/>
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-B-Kaku.mp4"
                                    title="KAKU"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Taka-B.jpg')}
                                    text="Taka throws a smoke bomb at his feet and becomes invisible. While stealthed, Taka moves faster and heals himself.
                
                  • Invisibility ends early if he strikes a target or takes direct damage.
                  • Turrets, Scout Traps and Flare Guns can still see Taka while he is invisible."/>
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-C-X-Retsu.mp4"
                                    title="X-RETSU"
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Taka-C.jpg')}
                                    text="Taka bursts through his target for massive damage and gains Ki Stacks. The target suffers a mortal wound (reduced healing) and takes damage per second for the next 3s. The wound's duration is refreshed whenever Taka Mortal Strikes this target."/>
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
                title="Ranged Kaiten"
                subtitle="RARE"
                color="#6393F9"
                text="Kaiten (A) has 5 increased range."
                text2="• Damage 125% (+4%)"
                image={require('./../images/Talents/Taka_Rare.png')}
            />
            <Talentbox
                title="Protective Decoy"
                subtitle="EPIC"
                color="#7A02EA"
                text="Kaku (B) grants Taka invulnerability for 0.8s."
                text2="• Cooldown 70% (-2.5%)"
                text3="• Heal 110% (+4%)"
                image={require('./../images/Talents/Taka_Epic.png')}
            />
            <Talentbox
                title="Triple X-Retsu"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="X-Retsu (Ult) automatically chains to 3 targets."
                text2="• Damage 80%"
                image={require('./../images/Talents/Taka_Legendary.png')}
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
                title="Little Fox Taka"
                text="Rare"
                image={require('./../images/Skins/Taka_Little_Fox.png')} />
                <Skinbox
                color="#7A02EA"
                title="Shiro Kage Taka"
                text="Epic"
                image={require('./../images/Skins/Taka_Shiro_Kage.png')} />
                <Skinbox
                color="#FF9000"
                title="White Ghost Taka"
                text="Legendary"
                image={require('./../images/Skins/Taka_White_Ghost.png')} />
                <Skinbox
                color="#FF9000"
                title="School Days Taka"
                text="Legendary"
                image={require('./../images/Skins/Taka_School_Days.png')} />
                <Skinbox
                color="#7A02EA"
                title="Fury Taka"
                text="Epic"
                image={require('./../images/Skins/Taka_Fury.png')} />
                <Skinbox
                color="red"
                title="Night Shadow Taka"
                text="Special Edition"
                image={require('./../images/Skins/Taka_Night_Shadow_SE.png')} />
                <Skinbox
                color="#FADA5E"
                title="Night Shadow Taka"
                text="Limited Edition"
                image={require('./../images/Skins/Taka_Night_Shadow_LE.png')} />
            </div>
    </div>
  </div >
  </Layout>
    )

export default Taka