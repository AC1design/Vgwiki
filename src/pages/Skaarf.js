import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout';


const Skaarf = () => (
    <Layout>
<div style={{ height: "100%" }}>
    <Heroes
        bgdesktop={require("./../images/BG/Skaarf_Desktop.jpg")}
        bgtablet={require("./../images/BG/Skaarf_Tablet.jpg")}
        bgmobile={require("./../images/BG/Skaarf_Mobile.jpg")}
        heroname="SKAARF"
        role='LANE, MAGE'
        description="Spits long-range fireballs and incinerates entire teams."
                spotlight="AlXyClywtNQ">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="638 - 2112"
                color="#4eec8b"
            />
            <Statbox
                title="HEALTH REGEN"
                value="3.55 - 7.4"
                color="#4eec8b"
            />
            <Statbox
                title="ENERGY"
                value="200 - 464"
                color="#5bbcff"
            />
            <Statbox
                title="ENERGY REGEN"
                value="1.33 - 3.09"
                color="#5bbcff"
            />
            <Statbox
                title="WEAPON DAMAGE"
                value="80 - 154"
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
                value="5.5"
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
   bgmodel={require("./../images/BG/Skaarfblurred.jpg")}
   model={require("./../images/models/Skaarf.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-P-Fan-the-Flames.mp4"
                                    title="FAN THE FLAMES"
                                    subtitle="HEROIC PERK"
                        image={require('./../images/Ability/Skaarf-P.jpg')}
                                    text="Skaarf's abilities burn targets and his basic attacks deal bonus crystal damage to burning targets.
                
                  Burn: 8 damage per second for 4s.
                  Basic attacks: 2% (+2% of crystal power) of the target's max health as crystal damage.
                  • This damage can crit for 2x.
                  • Deals reduced damage to Kraken and structures."
            />
            <Skillbox
            video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-A-Spitfire.mp4"
                                title="SPITFIRE"
                                subtitle="A ABILITY"
                                text="Skaarf spits a fireball that collides with the first hero, structure or boss monster it hits.
            
              • The fireball damages and passes through smaller minions.
              • Each time it passes through a unit, its damate is reduced to 85% of before.
              • Deals 50% less damage damage to minions."
                        image={require('./../images/Ability/Skaarf-A.jpg')}
            
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-B-Goop.mp4"
                                    title="GOOP"
                                    subtitle="B ABILITY"
                        image={require('./../images/Ability/Skaarf-B.jpg')}
                                    text="Skaarf hurls a goop onto the target location. Enemies walking through the sticky substance are slowed. Any of Skaarf's flames will ignite the puddle, dealing burst damage and burning enemies over time.
                
                 • A flaming puddle does not slow enemies as much as a goop puddle.
                 • Deals half damage to minions and Kraken."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-C-Dragons-Breath.mp4"
                                    title="DRAGON BREATH"
                                    subtitle="ULTIMATE"
                        image={require('./../images/Ability/Skaarf-C.jpg')}
                                    text="Skaarf inhales for 1.5s, then exhales a huge flames for 3s. Skaarf may move freely while spewing fire.
                
                  • Skaarf gains a quick burst of move speed when exhaling.
                 • While inhaling or exhaling, enemies moving against the current are slowed while allies moving with it are sped up.
                 • Skaarf temporarily gains fortified health while channeling.
                 • Deals 50% damage to non-heroes."
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
                title="Splitfire"
                subtitle="RARE"
                color="#6393F9"
                text="Spitfire (A) shoots three fireballs in a cone."
                text2="• Damage 60% (+2%)"
                image={require('./../images/Talents/Skaarf_Rare.png')}
            />
            <Talentbox
                title="Flash Fire"
                subtitle="EPIC"
                color="#7A02EA"
                text="Dragon Breath (Ult) has a quicker start but shorter duration."
                text2="• Cooldown 60% (-3%)"
                text3="• Damage 110% (+10%)"
                image={require('./../images/Talents/Skaarf_Epic.png')}
            />
            <Talentbox
                title="Flaming Sludge"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Spitfire (A) creates a Goop (B) pool when it expires."
                text2="• Spitfire Damage 30% (+5%)"
                text3="• Burning Goop Damage 60% (+10%)"
                text4="• Range 9"
                image={require('./../images/Talents/Skaarf_Legendary.png')}
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
                title="Water Dragon Skaarf"
                text="Rare"
                image={require('./../images/Skins/Skaarf_Water_Dragon.png')} />
                <Skinbox
                color="#7A02EA"
                title="Cloud Dragon Skaarf"
                text="Epic"
                image={require('./../images/Skins/Skaarf_Cloud_Dragon.png')} />
                <Skinbox
                color="#FF9000"
                title="Ice Dragon Skaarf"
                text="Legendary"
                image={require('./../images/Skins/Skaarf_Ice_Dragon.png')} />
                <Skinbox
                color="#FF9000"
                title="Rainbow Skaarf"
                text="Legendary"
                image={require('./../images/Skins/Skaarf_Rainbow_White.png')} />
                <Skinbox
                color="red"
                title="Rainbow Tabby Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Rainbow_Tabby.png')} />
                <Skinbox
                color="red"
                title="Rainbow Bengal Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Rainbow_Bengal.png')} />
                <Skinbox
                color="red"
                title="Green Sparkler Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Sparkler_Green_SE.png')} />
                <Skinbox
                color="red"
                title="Purple Sparkler Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Sparkler_Purple_SE.png')} />
                <Skinbox
                color="red"
                title="Blue Sparkler Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Sparkler_Blue_SE.png')} />
                <Skinbox
                color="red"
                title="Red Sparkler Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Sparkler_Red_SE.png')} />
                <Skinbox
                color="red"
                title="Gold Sparkler Skaarf"
                text="Special Edition"
                image={require('./../images/Skins/Skaarf_Sparkler_Gold_SE.png')} />
        </div>
    </div>
  </div >
  </Layout>
    )

export default Skaarf