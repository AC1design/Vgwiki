import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model'
import Layout from '../components/layout'


const Adagio = () => (
<Layout>
<div style={{ height: "100%" }}>
<meta name="theme-color" content="#1f1f21"/>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Adagio_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Adagio_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Adagio_Mobile.jpg")}
        heroname="ADAGIO"
        role='JUNGLER, PROTECTOR'
        description="Team healer and damage enhancer with a large area stun."
                spotlight="TQx1TVGANF4">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="685 - 2308"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="2.18 - 5.04"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="400 - 785"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="2.67 - 5.2"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="75 - 117"
                color="#f48596"
                />
                <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
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
                value="6.7"
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
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Adagioblurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Adagio.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-P-Arcane-Renewal.mp4'}
                title="ARCANE RENEWAL"
                subtitle="HEROIC PERK"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Adagio-P-arcane-renewal.png'
                text="Whenever enemies burning with Arcane Fire take damage from any source, Adagio regenerates 25% of that damage as energy."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-A-Gift-of-Fire.mp4'}
                title="GIFT OF FIRE"
                subtitle="A ABILITY"
                text="Heals a target ally, then splashes Arcane Fire onto nearby enemies. If Adagio heals himself, he'll also apply a heavy slow to nearby enemies.
                Arcane Fire (status effect): Burns the target every second and causes Adagio's other abilities to deal more damage.
                
                • Burst heals the target instantly, followed by a gradual heal over the next few seconds.
                • Burst Heal is increased by 9% of Adagio's bonus health.
                • When cast on self, slows nearby enemies by 70% for 0.7s.
                • Resets basic-attack cooldown on activation."
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Adagio-A-gift-of-fire.png'
                boxShadow="10px 20px 30px white"
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-B-Agent-of-Wrath.mp4'}
                title="AGENT OF WRATH"
                subtitle="B ABILITY"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Adagio-B-agent-of-wrath.png'
                text="Temporarily boosts an allied hero's next several basic attacks for 6s.
                • Deals bonus damage to enemies afflicted by Arcane Fire.
                • Bonus damage is increased if Adagio casts this spell on himself.
                • Resets basic-attack cooldown on activation."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-C-Verse-of-Judgement.mp4'}
                title="VERSE OF JUDGEMENT"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Adagio-C-verse-of-judgement.png'
                text="Adagio channels for 2s then deals heavy damage to all enemies in a wide ring around him. Enemies burning with Arcane Fire are also stunned.
                Adagio temporarily gains fortified health while channeling."
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
                title="GIFT OF LIFE"
                subtitle="RARE"
                color="#6393F9"
                text="Gift of Fire (A) grants fortified health equal to a portion of its burst heal. Shorter cooldown."
                text2="• Heal to Fort Health 80% (+10%)%"
                text3="• Cooldown 90% (-1%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Adagio_Rare.png')}
            />
            <Talentbox
                title="Avenging Wrath"
                subtitle="EPIC"
                color="#7A02EA"
                text="Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage."
                text2="• Dmg to Burning Targets 165% (+2.5%)"
                text3="• Charge Time 95% (-4%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Adagio_Epic.png')}
            />
            <Talentbox
                title="Healing Verse"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Verse of Judgement (Ult) heals all of Adagio's allies within its radius. Shorter cooldown but lower damage."
                text2="• Damage 60% (+10%)"
                text3="• Cooldown 55% (-7.5%)"
                text4="• Max Health to Heal 65% (+15%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Adagio_Legendary.png')}
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
                title="Spiderwing Adagio"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Adagio_Dark_Parade_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Dark Parade Adagio"
                text="Epic"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Adagio_Dark_Parade_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Crimson Song Adagio"
                text="Legendary"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Adagio_Dark_Parade_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Seraphim Adagio"
                text="Epic"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Adagio_Seraphim_E.png')} />
            <Skinbox
                color="#6393F9"
                title="Ra'dagio"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Adagio_Ra_Rare.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Adagio