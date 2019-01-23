import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';
import Page from 'react-page-loading'

const Koshka = () => (
    <Layout>
<div style={{ height: "100%" }}>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Koshka_Desktop.jpg")}
        bgtablet={require("./../images/BG/Koshka_Tablet.jpg")}
        bgmobile={require("./../images/BG/Koshka_Mobile.jpg")}
        heroname="KOSHKA"
        role='JUNGLE, ASSASSIN'
        description="Hit-and-run assassin who can pin down enemies with a long stun."
                spotlight="r73Ezze8OLE">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="711 - 2367"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.54 - 6.95"
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
                value="79 - 164"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 108.8%"
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
   bgmodel={require("./../images/BG/Koshkablurred.jpg")}
   model={require("./../images/models/Koshka.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-P-Bloodrush.mp4'}
                title="BLOODRUSH"
                subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Koshka-P.png')}
                text="Koshka gains 2 move speed for 4s whenever she deals damage with her abilities."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-A-Pouncy-Fun.mp4'}
                title="POUNCY FUN"
                subtitle="A ABILITY"
                text="Koshka pounces to the target enemy and deals damage.

                • This hability resets her basic-attack cooldown upon activation."
                        image={require('./../images/Ability/Koshka-A.jpg')}
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-B-Twirly-Death.mp4'}
                title="TWIRLY DEATH"
                subtitle="B ABILITY"
                        image={require('./../images/Ability/Koshka-B.jpg')}
                text="Koshka twirls, damaging all enemies around her.
                • Her next 2 basic attacks within 10s deal bonus crystal damage and have reduced cooldown.
                • Koshka gains barrier per enemy hero hit for 1s.
                • This hability resets her basic-attack cooldown upon activation."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-C-Yummy-Catnip-Frenzy.mp4'}
                title="YUMMY CATNIP FRENZY"
                subtitle="ULTIMATE"
                        image={require('./../images/Ability/Koshka-C.jpg')}
                text="Koshka leaps at her target, then launches into a flurry of slashes, stunning the target for the entire 2.2s duration.
                • Koshka will stop slashing if the stun is blocked (by Reflex Block, for example)"
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
                title="Frenzied"
                subtitle="RARE"
                color="#6393F9"
                text="Basic attacks reduce the cooldown of Koshka’s abilities."
                text2="• Ability Damage 75% (+2.5%)"
                text3="• Pouncy Fun Reduction 10% (+1%)"
                text4="• Twirly Death Reduction 15% (+1%)"
                text5="• Yummy Catnip Frenzy Reduction 5% (+0.5%)"
                image={require('./../images/Talents/Koshka_Rare.png')}
            />
            <Talentbox
                title="Twirly Life"
                subtitle="EPIC"
                color="#7A02EA"
                text="Twirly Death (B) grants Koshka additional health barrier."
                text2="• Max Health to Barrier 13% (+3%)"
                text3="• Damage 65% (+3%)"
                text4="• Barrier Duration 2s"
                image={require('./../images/Talents/Koshka_Epic.png')}
            />
            <Talentbox
                title="Slashy Play Time!"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Yummy Catnip Frenzy (Ult) activates quicker and stuns nearby enemies."
                text2="• Damage 35%"
                text3="• Cooldown 55%%"
                image={require('./../images/Talents/Koshka_Legendary.png')}
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
                title="Kandy Claw Koshka"
                text="Rare"
                image={require('./../images/Skins/Koshka_Kandi_Twirl_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Kandy Rave Koshka"
                text="Epic"
                image={require('./../images/Skins/Koshka_Kandi_Twirl_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Kandy Twirl Koshka"
                text="Legendary"
                image={require('./../images/Skins/Koshka_Kandi_Twirl_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Shool Days Koshka"
                text="Epic"
                image={require('./../images/Skins/Koshka_School_Days.png')} />
            <Skinbox
                color="red"
                title="Red Lantern Koshka"
                text="Special Edition"
                image={require('./../images/Skins/Koshka_Red_Lantern_SE.png')} />
            <Skinbox
                color="#FADA5E"
                title="Red Lantern Koshka"
                text="Limited Edition"
                image={require('./../images/Skins/Koshka_Red_Lantern_LE.png')} />
                        <Skinbox
                            color="red"
                            title="Red Lantern Lotus Koshka"
                            text="Special Edition"
                            image={require('./../images/Skins/Koshka_Red_Lantern_Lotus.png')} />
           </div>
    </div>
    </Page>
  </div >
  </Layout>
    )

export default Koshka