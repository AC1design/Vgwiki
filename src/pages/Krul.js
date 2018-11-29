import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';

const Krul = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Krul_Desktop.jpg")}
        bgtablet={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Krul_Tablet.jpg")}
        bgmobile={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Krul_Mobile.jpg")}
        heroname="KRUL"
        role='JUNGLE, WARRIOR'
        description="The king of duels with massive lifesteal and self-healing."
                spotlight="ZR8J8b44FOk">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="748 - 2394"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.51	7.8"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="220 - 506"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.33 - 3.2"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="70 - 147"
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
                value="1.5"
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
   bgmodel={require("/Users/angelocantone/Documents/vgprowiki/src/images/BG/Krulblurred.jpg")}
   model={require("/Users/angelocantone/Documents/vgprowiki/src/images/models/Krul.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-P-Shadows-Empower-Me.mp4'}
                title="SHADOWS EMPOWER ME"
                subtitle="HEROIC PERK"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Krul-P-shadows-empower-me.png"
                text="Krul is empowered by the shadows after standing still in brush for 1s. While empowered, Krul briefly gains 2.2 move speed and his basic attacks will slow the target by 40% for 2.5s. Empowered state lasts 1.8 seconds."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-A-Dead-Mans-Rush.mp4'}
                title="DEAD MAN'S RUSH"
                subtitle="A ABILITY"
                text="Krul dashes to the target and deals damage.

                Activating Dead Man's Rush grants Krul a temporary health barrier.
                
                • This ability triggers basic-attack effects."
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Krul-A-dead-mans-rush.png"
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-B-Spectral-Smite.mp4'}
                title="SPECTRAL SMITE"
                subtitle="B ABILITY"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Krul-B-spectral-smite.png"
                text="Krul detonates the Weakness stacks built up on a single target, regaining health based on the number of stacks consumed.
                Passive: Basic attacks and abilities apply Weakness on the enemy (up to 8 stacks). Each stack reduces the target's damage by 6.2% and increases Krul's lifesteal against the victim."
            />
            <Skillbox
                video={'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-C-From-Hells-Heart.mp4'}
                title="FROM HELL'S HEART "
                subtitle="ULTIMATE"
                image="https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Krul-C-from-hells-heart.png"
                text="Krul pulls Hellrazor from his chest and hurls it in the targeted direction. The sword will boomerang back to Krul. If the sword hits an enemy hero, it deals damage and stuns, then slows the target.

                Damage and stun duration scales with the distance the sword traveled before hitting the target:
                
                • 50% at point blank range
                • 100% at max range
                • 150% at 'boomerang' range"
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
                title="Dead Man’s Barrier"
                subtitle="RARE"
                color="#6393F9"
                text="Dead Man’s Rush (A) has 0.5 increased range and stronger barrier."
                text2="• Barrier 115% (+8.8%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Krul_Rare.png')}
            />
            <Talentbox
                title="Healing Smite"
                subtitle="EPIC"
                color="#7A02EA"
                text="Spectral Smite (B) heals nearby allies. Krul passively gains crystal power."
                text2="• Heal 130% (+7.5%)"
                text3="• Crystal Power +10% (+2.5%)"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Krul_Epic.png')}
            />
            <Talentbox
                title="Cursed Blade"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="From Hell’s Heart (Ult) applies max Spectral Smite (B) Weakness stacks to the victim."
                text2="• Damage 40%"
                text3="• Cooldown 70%"
                image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Talents/Krul_Legendary.png')}
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
                    title="Trasher Krul"
                    text="Rare"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Death_Metal_I_R.png')} />
            <Skinbox
                    color="#7A02EA"
                    title="Death Metal Krul"
                    text="Epic"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Death_Metal_II_E.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Ice Cold Krul"
                    text="Legendary"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Death_Metal_III_L.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Corsair Cold Krul"
                    text="Legendary"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Samurai.png')} />
            <Skinbox
                    color="#7A02EA"
                    title="Death Metal Krul"
                    text="Epic"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Death_Metal_II_E.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Cyber Krul"
                    text="Legendary"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Cyber.png')} />
            <Skinbox
                        color="#FF9000"
                    title="Cyber Krul Prime"
                        text="Legendary"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Cyber_Prime.png')} />
            <Skinbox
                    color="#FF9000"
                    title="Cyber Krul Prototype"
                    text="Legendary"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Cyber_Prototype.png')} />
            <Skinbox
                    color="red"
                    title="Summer Party Krul"
                    text="Special Edition"
                    image={require('/Users/angelocantone/Documents/vgprowiki/src/images/Skins/Krul_Summer_Party_SE.png')} />
            
        </div>
    </div>
  </div >
  </Layout>
    )

export default Krul