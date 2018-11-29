import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Grumpjaw = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Grumpjaw_Desktop.jpg")}
        bgtablet={require("./../images/BG/Grumpjaw_Tablet.jpg")}
        bgmobile={require("./../images/BG/Grumpjaw_Mobile.jpg")}
        heroname="GRUMPJAW"
        role='JUNGLE, WARRIOR'
        description="A hungry beast who can swallow a hero whole."
                spotlight="kwm2U7-P-uc">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="783 - 2592"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.39 - 3.39"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="234 - 465"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.47 - 2.9"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="74 - 158"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 113.2%"
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
                value="2.6"
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
   bgmodel={require("./../images/BG/Grumpjawblurred.jpg")}
   model={require("./../images/models/Grumpjaw.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="LIVING ARMOR"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/Perk.jpg"
                text="Each stack of Living Armor reduces incoming damage by 7%.
                • Grumpjaw gains a stack every 3s and every time he basic attacks.
                • While under attack, he loses a stack every 1s.
                • Max 5 stacks."
            />
            <Skillbox
                title="GRUMPY"
                subtitle="A ABILITY"
                text="Grumpjaw charges forward and slashes the area in front of him, damaging and slowing enemies he hits. He also hits things at his ending location.
                • Deals bonus damage for each stack of Living Armor Grumpjaw has."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/A.jpg"
            />
            <Skillbox
                title="HANGRY"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/B.jpg"
                text="Grumpjaw leaps toward his target and attacks it. Afterward, he gains bonus weapon damage and attack speed for several seconds."
            />
            <Skillbox
                title="STUFFED"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/02/C.jpg"
                text="Grumpjaw lunges forward, devouring the first enemy hero in his path. While inside Grumpjaw's belly, enemies cannot move, act or see. After 3s, Grumpjaw will spit the enemy out in front of him.
                • Reactivate this ability to spit the enemy out early."
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
                title="Rampage"
                subtitle="RARE"
                color="#6393F9"
                text="Grumpy (A) deals a portion of its damage to all enemies along its path."
                text2="• Swipe to Trample Dmg 90% (+2.5%)"
                image={require('./../images/Talents/Grumpjaw_Rare.png')}
            />
            <Talentbox
                title="Reconstitution"
                subtitle="EPIC"
                color="#7A02EA"
                text="Hangry (B) grants Grumpjaw life steal."
                text2="• Cooldown 95% (-2.5%)"
                text3="• Bonus Lifesteal +25% (+4%)"
                image={require('./../images/Talents/Grumpjaw_Epic.png')}
            />
            <Talentbox
                title="Big Appetite"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Stuffed (Ult) keeps enemies inside for much longer and eats all heros in Grumpjaw’s path."
                text2="• Cooldown 50%"
                text3="• Bonus Duration 1s"
                image={require('./../images/Talents/Grumpjaw_Legendary.png')}
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
                title="Lapdog Grumpjaw"
                text="Rare"
                image={require('./../images/Skins/Grumpjaw_Lapdog_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Carnivore Grumpjaw"
                text="Epic"
                image={require('./../images/Skins/Grumpjaw_Carnivore.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Grumpjaw