import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Grace = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Grace_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Grace_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Grace_Mobile.jpg")}
        heroname="GRACE"
        role='JUNGLE, PROTECTOR'
        description="A powerful paladin with a massive heal."
                spotlight="fjSbPL3KaqU">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="740 - 2483"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.72 - 8.34"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="268 - 653"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.92 - 4.23"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="73 - 152"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 136.3%"
                color="#f48596"
            />
            <Statbox
                title="ARMOR"
                value="35 - 100"
                color="#f6ee71"
            />
            <Statbox
                title="SHIELD"
                value="25 - 75"
                color="#f6ee71"
            />
            <Statbox
                title="ATTACK RANGE"
                value="2.7"
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
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Graceblurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Grace.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="RETRIBUTION"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/07/Grace_Perk.png"
                text="Grace chains her normal basic attack into a ground slam, dealing bonus weapon damage and slowing enemies in a wide area. If any enemies are hit by the ground slam, her ability cooldowns are reduced by 1.2s.

                All effects in Grace's heroic perk and abilities are capped at 200 crystal power excluding damage and healing.
                
                • Bonus damage: 10-98 (level 1-12) (+5% weapon power)
                • Slow Strength: 75%
                • Slow duration: 0.6s (+0.3 crystal power)
                • Deals 50% less damage to minions."
            />
            <Skillbox
                title="BENEDICTION"
                subtitle="A ABILITY"
                text="Grace dashes to her target, striking them with an empowered Retribution attack. Nearby allies instantly gain a directional holy shield that continually faces the target, while Grace gains a full holy shield that protects her from all sides.

                Holy Shield (status effect): Reduce incoming damage by 40% (+5% of crystal power).
                
                • Passive: Upon learning this ability, Grace permanently reduces all damage she receives by 8% (+5% of crystal power).
                • Overdrive: This ability is refreshed upon casting Divine Intervention."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/07/Grace_A.png"
            />
            <Skillbox
                title="HOLY NOVA"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/07/Grace_B.png"
                text="After a short delay, Grace knocks enemies into the air, disabling them for 1s.

                • Overdrive: Grace gains immunity to negative effects when casting this ability.
                • If this attack hits at least one enemy, Grace will immediately recover from the ability.
                • Deals 50% damage to minions."
            />
            <Skillbox
                title="DIVINE INTERVENTION"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/07/Grace_C.png"
                text="Grace instantly surrounds herself and her target with a full holy shield and begins channeling for 1.8s after which Grace’s target receives a massive heal."
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
                title="Seal of Retribution"
                subtitle="RARE"
                color="#6393F9"
                text="Retribution (Perk) deal bonus crystal damage. Grace passively gains crystal power."
                text2="• Damage +100% (+4%)"
                text3="• Passive Crystal Power +15% (+2.5%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Grace_Rare.png')}
            />
            <Talentbox
                title="Double Benediction"
                subtitle="EPIC"
                color="#7A02EA"
                text="Benediction (A) has 1 additional charge."
                text2="• Damage Reduction 50% (+3%)"
                text3="• Cooldown 80% (-3.5%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Grace_Epic.png')}
            />
            <Talentbox
                title="United Front"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Divine Intervention (Ult) also heals Grace."
                text2="• Heal 75% (+15%)"
                text3="• Cooldown 80% (-7.5%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Grace_Legendary.png')}
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
                color="#7A02EA"
                title="Valkyrie Grace"
                text="Epic"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Grace_Valkyrie.png')} />
            <Skinbox
                color="#FF9000"
                title="Tea Party Grace"
                text="Legendary"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Grace_Tea_Party.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Grace