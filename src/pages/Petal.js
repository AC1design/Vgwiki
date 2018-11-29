import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Petal = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Petal_Desktop.jpg")}
        bgtablet={require("./../images/BG/Petal_Tablet.jpg")}
        bgmobile={require("./../images/BG/Petal_Mobile.jpg")}
        heroname="PETAL"
        role='JUNGLE, SNIPER'
        description="Commands 3 pets who tear apart enemies and block incoming skillshots."
                spotlight="6RBEJWEcBLs">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="636 - 1983"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="2.4 - 5.15"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="410 - 718"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1 - 2.21"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="64 - 134"
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
                value="6.2"
                color="#e19efb"
            />
            <Statbox
                title="MOVE SPEED"
                value="3.3"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("./../images/BG/Petalblurred.jpg")}
   model={require("./../images/models/Petal.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Petal-P-Bramblethorn-Munions.mp4'}
                title="MUNIONS"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/09/Petal_perk.png"
                text="A few moments after Petal plants a Bramblebloom Seed, it will automatically sprout into a Munion pet, which will fight alongside Petal up to a maximum of 3 Munions."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Petal-A-Bramblethorn-Seed.mp4'}
                title="BRAMBLEBOOM SEEDS"
                subtitle="A ABILITY"
                text="Petal plants a Bramblebloom Seed directly in front of her.

                • If an enemy hero steps on a seed, the seed will explode and knock the enemy back.
                • Petal's seeds have a small vision radius."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/09/Spawn.png"
            />
            <Skillbox
                title="TRAMPOLINE!"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/09/seed_bounce.png"
                text="Petal leaps in the target direction, leaving a Bramblebloom Seed behind at her original location. Using this ability will increase Petal's basic-attack range and amplify her weapon and crystal power for 5s."
            />
            <Skillbox
                video={'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/04/Petal_Ultimate.gif'}
                title="BLAST TREMOR"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/09/thorn_storm.png"
                text="Petal sends the nearest munion dashing towards the targeted location, exploding after 1.2 seconds. The explosion slows and deals splash damage to nearby enemies while healing nearby allies.

                • Detonated pets become Bramblebloom Seeds.
                • This ability has 3 charges."
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
                title="Bouncer"
                subtitle="RARE"
                color="#6393F9"
                text="Trampoline (B) has a 1s cooldown but will cost more energy if used while empowerment is still active."
                text2="• Energy Cost 185% (-5%)"
                image={require('./../images/Talents/Petal_Rare.png')}
            />
            <Talentbox
                title="Kaboom Seeds"
                subtitle="EPIC"
                color="#7A02EA"
                text="Brambleboom Seeds (A) explode for massive damage but no longer knock back enemies."
                text2="• Damage 180% (+10%)"
                image={require('./../images/Talents/Petal_Epic.png')}
            />
            <Talentbox
                title="Explosive Force"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Spontaneous Combustion (Ult) knocks back enemies caught within its explosion."
                text2="• Damage 90% (+7.5%)"
                image={require('./../images/Talents/Petal_Legendary.png')}
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
                title="Bee Petal"
                text="Rare"
                image={require('./../images/Skins/Petal_Bee_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Beetle Petal"
                text="Epic"
                image={require('./../images/Skins/Petal_Beetle_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Space Bug Petal"
                text="Legendary"
                image={require('./../images/Skins/Petal_Spacebug_L.png')} />
            <Skinbox
                color="#FF9000"
                title="Tea Party Petal"
                text="Legendary"
                image={require('./../images/Skins/Petal_Teaparty.png')} />
            <Skinbox
                color="red"
                title="Pumpkin Spice Petal"
                text="Special Edition"
                image={require('./../images/Skins/Petal_Pumpkin_Spice_SE.png')} />
            <Skinbox
                color="#FADA5E"
                title="Pumpkin Spice Petal"
                text="Limited Edition"
                image={require('./../images/Skins/Petal_Pumpkin_Spice_LE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Petal