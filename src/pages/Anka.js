import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Anka = () => (
    <Layout>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Anka_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Anka_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Anka_Mobile.jpg")}
        heroname="ANKA"
        role='LANE, ASSASSIN'
        description="An elusive and bursty assassin who strikes with a flurry of blades."
            spotlight="EZ0Wq-FbU-o">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="750 - 2301"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="4.71 - 9.22 "
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="200 - 695"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="2.6 - 4.8"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="82 - 152"
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
                value="1.6"
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
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Ankablurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Anka.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={require('/Users/angelocantone/Documents/vgprowiki/src/images/SkillVideos/Anka-P.mp4')}
                title="GYTHIAN PROMISE"
                subtitle="HEROIC PERK"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Blade_sized_icons_Perk.jpg'
                text="After a short cooldown, Anka’s next basic attack on an enemy hero becomes Execute Strike, dealing bonus crystal damage equal to 13-25% (level 1-12) of the target’s missing health. Additionally, Anka fully refreshes Execute Strike and Shimmer Blade upon getting a hero kill or assist."
            />
            <Skillbox
                video={require('/Users/angelocantone/Documents/vgprowiki/src/images/SkillVideos/Anka-A.mp4')}
                title="SHIMMER BLADE"
                subtitle="A ABILITY"
                text="Anka throws a dagger in the target direction, dealing damage to the first enemy hit. When the dagger hits an enemy, Anka can reactivate the ability within 2.2s to blink next to the victim.
                Anka gains a burst of decaying movement speed upon blinking."
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Blade_sized_icons_A1.png'
            />
            <Skillbox
                video={require('/Users/angelocantone/Documents/vgprowiki/src/images/SkillVideos/Anka-B.mp4')}
                title="DANCE OF BLADES"
                subtitle="B ABILITY"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Blade_sized_icons_B.jpg'
                text="Anka throws five knives in a cone, dealing damage to all enemies the knives pass through.
                Each additional knife after the first deals damage equal to 50% of the initial damage."
            />
            <Skillbox
                video={require('/Users/angelocantone/Documents/vgprowiki/src/images/SkillVideos/Anka-C.mp4')}
                title="MIRAGE"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Blade_sized_icons_C.jpg'
                text="Anka dashes in the target direction and splits off three clones to deceive enemies, dealing damage to enemies they pass through. Her clones dash back to her after 2s, dealing damage to enemies they pass through.
                • Anka is invulnerable and unable to be targeted during her dash.
                • Additional pass through deal damage equal to 50% of the initial damage."
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
                title="Gale Blade"
                subtitle="RARE"
                color="#6393F9"
                text="Bonus movespeed on reactivating Shimmer Blade (A) is increased and lasts longer."
                text2="• Damage 100% (+5%)"
                text3="• Bonus Move Speed 1.5 (+0.1)"
                text4="• Bonus Move Speed Duration 3s"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Anka_Rare.png')}
            />
            <Talentbox
                title="Gythian Tempest"
                subtitle="EPIC"
                color="#7A02EA"
                text="Gythian Promise (Perk) refreshes all abilities on hero kill/assist. Anka passively gains crystal power."
                text2="• Passive Crystal Power +2%"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Anka_Epic.png')}
            />
            <Talentbox
                title="Crimson Blade"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage."
                text2="• Range 50"
                text3="• Cooldown 60%"
                text4="• Damage 110% (+20%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Anka_Legendary.png')}
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
                title="Frostborn Anka"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Anka_Frostborn.png')} />
        </div>
    </div>
  </Layout>
    )

export default Anka