import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'


const Inara = () => (
    <Layout>
        <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Inara_Desktop.jpg")}
        bgtablet={require("./../images/BG/Inara_Tablet.jpg")}
        bgmobile={require("./../images/BG/Inara_Mobile.jpg")}
        heroname="INARA"
        role='JUNGLE, ASSASSIN'
        description="An elusive and bursty assassin who strikes with a flurry of blades."
            spotlight="rvo9GzYoJkk">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="805 - 2312"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="(+)"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="201 - 388"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="(+)"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="78 - 150"
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
                value="20 - 55"
                color="#f6ee71"
                />
                <Statbox
                title="ATTACK RANGE"
                value="2.4"
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
   bgmodel={require("./../images/BG/Inarablurred.jpg")}
   model={require("./../images/models/Inara.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={require('./../images/SkillVideos/Inara-H.mp4')}
                title="SACRED GROVE"
                subtitle="HEROIC PERK"
                    image={require('./../images/Ability/Inara-P.png')}
                text="Inara summons wisps around nearby treants, gaining vision and allowing her to leap to them. Killing a treant grants Inara a movement speed boost for 30s."
                    header1="Ability A"
                    value="20"
            />
            <Skillbox
                video={require('./../images/SkillVideos/Inara-A.mp4')}
                title="DANCE OF LEAVES"
                subtitle="A ABILITY"
                text="Inara spins with her blades, dealing damage to and slowing nearby enemies. Deals 50% less damage to minions."
                    image={require('./../images/Ability/Inara-A.jpg')}
            />
            <Skillbox
                video={require('./../images/SkillVideos/Inara-B.mp4')}
                title="DANCE OF BLADES"
                subtitle="B ABILITY"
                    image={require('./../images/Ability/Inara-B.jpg')}
                text="Inara leaps backwards and kicks away enemies, dealing damage to and summoning a wisp on affected enemies. She may leap to marked enemies she has kicked for the next 3s. Enemies knocked into a wall are stunned. Deals 50% less damage to minions."
            />
            <Skillbox
                video={require('./../images/SkillVideos/Inara-C1.mp4')}
                title="MIRAGE"
                subtitle="ULTIMATE"
                    image={require('./../images/Ability/Inara-C1.jpg')}
                text="Inara rallies nearby allies, granting them movement speed."
            />
            <Skillbox
                video={require('./../images/SkillVideos/Inara-C.mp4')}
                title="MIRAGE"
                subtitle="ULTIMATE (REACTIVATE)"
                    image={require('./../images/Ability/Inara-C2.jpg')}
                text=" Reactivate Mirage (Ult) to dash in target direction, dealing damage to enemies."
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
                title="DANCE OF MENDING"
                subtitle="RARE"
                color="#6393F9"
                text="Dance of Leaves (A) also heals Inara and her allies."
                text2="• Heal 120 (+15)"
                text3="• Damage 76% (+3%)"
                text4="• Bonus Move Speed Duration 3s"
                image={require('./../images/Talents/Inara_Rare.png')}
            />
            <Talentbox
                title="BANISHING MIGHT"
                subtitle="EPIC"
                color="#7A02EA"
                text="Banishing Kick (B) knocks targets further."
                text2="• Bonus Range 2 (+0.5)"
                text3="• Cooldown 90% (-3%)"
                image={require('./../images/Talents/Inara_Epic.png')}
            />
            <Talentbox
                title="Sacred Warrior"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage."
                text2="• Duratio 0.8s"
                image={require('./../images/Talents/Inara_Legendary.png')}
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
                title="Nightblade Inara"
                text="Rare"
                image={require('./../images/Skins/Inara_Nightblade.png')} />
        </div>
    </div>
    </Page>
  </Layout>
    )
    

export default Inara