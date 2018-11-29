import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Kestrel = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Kestrel_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Kestrel_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Kestrel_Mobile.jpg")}
        heroname="KESTREL"
        role='LANER, SNIPER'
        description="Stealthy archer with devastating skillshots and traps."
                spotlight="ClhyGmpQZhY">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="700 - 2073"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value=" - "
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="404 - 492"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value=" - "
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="70 - 136"
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
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Kestrelblurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Kestrel.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="ADRENALINE"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/Adrenaline.png"
                text="Whenever Kestrel lands a basic attack, she reduces the energy cost of her abilities by 10%. This stacks up to 5 times and wears off after 8s."
            />
            <Skillbox
                title="GLIMMERSHOT"
                subtitle="A ABILITY"
                text="Kestrel fires an arrow that hits the first target in its path. The arrow then explodes, splashing crystal damage in a line beyond the point of impact.

                • Ammo system: Kestrel can fire several times without reloading. To reload, simply stop using her bow for 2.4s.
                • Reload time is decreased based on attack speed.
                • Primary impact triggers basic-attack effects.
                • Deals 50% less damage to minions."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/Kestral_-A_02.jpg"
            />
            <Skillbox
                title="ACTIVE CAMO"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/Kestral_-B.jpg"
                text="Kestrel instantly stealths and gains bonus move speed. She leaves behind an invisible mist trap that explodes when she damages an eney hero inside it, damaging and stunning them for 0.8s.

                • Kestrel cannot activate this ability if she took damage from a hero in the last 2.5s (-1% weapon power).
                • This window is reduced by bonus weapon power.
                • The primary impact of Glimmershot reduces the cooldown of Active Camo by 1.5s.
                • Trap requires 1.2s to arm before it can detonate.
                • The trap has vision and can see enemies.
                • Turrets, Scout Traps and Flare Guns can still see Kestrel while she is invisible."
            />
            <Skillbox
                title="ONE SHOT, ONE KILL"
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/Kestral_C.jpg"
                text="Kestrel charges up and fires a single powerful arrow across the fold, impacting on the first enemy hero, large creature or structure in its path.

                • When this hits a target, it reveals it and grants Kestrel full Adrenaline stacks.
                • The base damage dealt by this ability is weapon damage.
                • Deals 50% less damage to structures."
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
                title="Glimmer Volley"
                subtitle="RARE"
                color="#6393F9"
                text="Glimmershot (A) launches two arrows without consuming an additional charge."
                text2="• Duration 30s"
                text3="• Damage 77.5% (+2.5%)"
                text4="• Range 8"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Kestrel_Rare.png')}
            />
            <Talentbox
                title="Active Reload"
                subtitle="EPIC"
                color="#7A02EA"
                text="Active Camo (B) refreshes all charges of Glimmershot (A). Glimmershot (A) has 2 additional charges."
                text2="• Cooldown 100% (-2%)"
                text3="• Damage 80% (+7%)"
                text4="• Energy Cost 50%"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Kestrel_Epic.png')}
            />
            <Talentbox
                title="Piercing Shot"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="One Shot One Kill (Ult) pierces through its target, damaging all enemies along its path."
                text2="• Damage 120%"
                text3="• Cooldown 60%"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Kestrel_Legendary.png')}
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
                title="Sylvan Kestrel"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Sylvan_R.png')} />
            <Skinbox
                color="#6393F9"
                title="Winter War Kestrel"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Winter_War_R.png')} />
             <Skinbox
                color="#6393F9"
                title="Kyudo Kestrel"
                text="Rare"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Kyudo_Rare.png')} />
            <Skinbox
                color="#7A02EA"
                title="Spider Queen Kestrel"
                text="Epic"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Spider_Queen.png')} />           
            <Skinbox
                color="red"
                title="Summer Party Kestrel"
                text="Special Edition"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Summer_Party_SE.png')} />
            <Skinbox
                color="#FADA5E"
                title="Contender Kestrel"
                text="Limited Edition"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Kestrel_Contender.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Kestrel