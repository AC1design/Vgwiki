import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Churnwalker = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Churnwalker_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Churnwalker_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Churnwalker_Mobile.jpg")}
        heroname="CHURNWALKER"
        role='JUNGLE, WARRIOR'
        description="A disruptor who throws multiple skillshot hooks, chaining victims to him."
                spotlight="kFb2bUxln4E">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="863 - 2749"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="4.05 - 6.8"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="380 - 732"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="2.38 - 4.69"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="80 - 165"
                color="#f48596"
            />
            <Statbox
                title="ATTACK SPEED"
                value="100% - 122%"
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
                value="1.7"
                color="#e19efb"
            />
            <Statbox
                title="MOVE SPEED"
                value="3.2"
                color="#e19efb"
            />
        </div>
    </div>
    <div className="Title">
        <h1>3D MODEL</h1>
        <div className="line" />
    </div>
   <Models
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Churnwalkerblurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Churnwalker.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="FUTILITY OF LIFE"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/churnwalker_talents_perk.jpg"
                text="• Whenever chained victims take damage from any source, Churnwalker regenerates 20% of that damage as health.
                • Whenever any chained victim takes damage, 30% of that damage is conferred on all other chained victims."
            />
            <Skillbox
                title="HOOK & CHAIN"
                subtitle="A ABILITY"
                text="Churnwalker throws a skillshot hook that damages, briefly slows and chains victims to him.

                • Chained heroes take damage over time.
                • If a chained victim can get far enough away, the chain will break.
                • Landing a hook will reset this ability's cooldown. (Chained victims cannot be hit by a hook.)
                • Overdrive: Increases the max range of the hook and the chain's damage over time."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/ChurnWalker_ability_a.jpg"
            />
            <Skillbox
                title="TORMENT"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/ChurnWalker_ability_b.jpg"
                text="Torment yanks all chained victims toward Churnwalker a fixed distance, damaging them.
                • Overdrive: Yanks victims closer to Churnwalker."
            />
            <Skillbox
                title="TRESPASS"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/ChurnWalker_ability_c-e1507585501815.jpg"
                text="Churnwalker channels churn power for a short time, then travels to the target location, stunning all chained victims and breaking all chains.
                • Churnwalker requires a chained target to cast this ability."
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
                title="Churn Tank"
                subtitle="RARE"
                color="#6393F9"
                text="Futility of Life (Perk) has significantly increased healing but decreased damage share."
                text2="• Heal 210% (+10%)"
                text3="• Damage 50% (+1%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Churnwalker_Rare.png')}
            />
            <Talentbox
                title="Cloud of Torment"
                subtitle="EPIC"
                color="#7A02EA"
                text="Activating Torment (B) releases a powerful Churn Cloud that damages enemies over time, making Churnwalker a dangerous threat at close range. Cooldown increased."
                text2="• Duration 3s (+ 0.25s)"
                text3="• Damage / Sec 50 (+40)"
                text4="• Radius 4"
                text5="• Cooldown 3s (-0.2s)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Churnwalker_Epic.png')}
            />
            <Talentbox
                title="Grappling Hook"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Churnwalker’s Hook & Chain (A) gains a grappling hook. This ability has dramatically increased range and can grapple to targets, pulling Churnwalker to the hooked location."
                text2="• Bleed Damage 60%"
                text3="• Cooldown 190%"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Churnwalker_Legendary.png')}
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
                color="#FF9000"
                title="Clownwalker"
                text="Legendary"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Churnwalker_Clownwalker.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Churnwalker