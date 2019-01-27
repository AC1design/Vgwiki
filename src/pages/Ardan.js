import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'
import Page from 'react-page-loading'


const Ardan = () => (
    <Layout>
        <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <Heroes
        bgdesktop={require("./../images/BG/Ardan_Desktop.jpg")}
        bgtablet={require("./../images/BG/Ardan_Tablet.jpg")}
        bgmobile={require("./../images/BG/Ardan_Mobile.jpg")}
        heroname="ARDAN"
        role='JUNGLE, PROTECTOR'
        description="Protects allies with barriers and traps enemies inside a large cage."
            spotlight="NDKx8m_pfDU">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="838 - 2638"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="3.39 - 7.24"
                color="#4eec8b"
                />
                <Statbox
                title="ENERGY"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="ENERGY REGEN"
                value="-"
                color="#5bbcff"
                />
                <Statbox
                title="WEAPON DAMAGE"
                value="80 - 140"
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
                value="1.8"
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
   bgmodel={require("./../images/BG/Ardanblurred.jpg")}
   model={require("./../images/models/Ardan.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-P-Julias-Gift.mp4"
                title="JULIA'S GIFT"
                subtitle="HEROIC PERK"
                    image={require('./../images/Ability/Ardan-P.png')}
                text="Ardan benefits from purchasing health items. 
• Whenever Ardan takes damage, he heals for 0.8% of his missing health, but no more than 75% of the damage taken. 
• Instead of energy, Ardan uses a yellow meter called Vengeance. Vengeance builds over time and can also be gained with basic attacks, crtical strikes and abilities. 
• Vengeance per attack 5%
• Because Ardan doesn't need regular energy, 5% of bonus energy and 50% of bonus energy recharge are converted to crystal power."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-A-Vanguard.mp4"
                title="VANGUARD"
                subtitle="A ABILITY"
                text="Ardan dashes to protect an ally, granting them a 4s barrier and a burst of move speed. This also slows and damages nearby enemies. 
• Overdrive: At max rank, Vanguard grants 50% Vengeance when cast on an ally. 
• Using this ability on himself results in only half the barrier, speed boost and Vengeance gain. 
• Barrier scales up with 30% of Ardan's bonus health. 
• Any time this ally takes damage, Ardan gains Vengeance."
                    image={require('./../images/Ability/Ardan-A.jpg')}
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CP%'
                        color='#38eeff'
                        stats1='Cooldown'
                        row11='17s'
                        row12='16s'
                        row13='15s'
                        row14='14s'
                        row15='12s'
                        row16=' '
                        stats2='Energy Cost'
                        row21='0'
                        row22='0'
                        row23='0'
                        row24='0'
                        row25='0'
                        row26=' '
                        stats3='Damage'
                        row31='60'
                        row32='100'
                        row33='140'
                        row34='180'
                        row35='220'
                        row36='120%'
                        stats4='Range'
                        row41='7'
                        row42='7'
                        row43='7'
                        row44='7'
                        row45='9'
                        row46=' '
                        stats5='Barrier'
                        row51='80'
                        row52='120'
                        row53='160'
                        row54='200'
                        row55='240'
                        row56=' '
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-B-Blood-for-Blood.mp4"
                title="BLOOD FOR BLOOD"
                subtitle="B ABILITY"
                    image={require('./../images/Ability/Ardan-B.jpg')}
                text="Ardan rushes forward and punches his target. 
• Overdrive: At max rank, Blood for Blood deals additional 15% damage. 
• Blood for Blood can only be activated when Ardan has 100% Vengeance and will consume all of it. 
• Blood for Blood triggers basic-attack effects."
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        lvl4='LVL 4'
                        lvl5='LVL 5'
                        cp='CP%'
                        wp='WP%'
                        color='#38eeff'
                        color2='red'
                        stats1='Cooldown'
                        row11='20s'
                        row12='19s'
                        row13='18s'
                        row14='17s'
                        row15='16s'
                        row16=' '
                        row17=' '
                        stats2='Energy Cost'
                        row21='0'
                        row22='0'
                        row23='0'
                        row24='0'
                        row25='0'
                        row26=' '
                        row27=' '
                        stats3='Damage'
                        row31='60'
                        row32='120'
                        row33='180'
                        row34='250'
                        row35='360'
                        row36='40%'
                        row37='100%'
                        />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/C-Ardan-Gauntlet-Large.mp4"
                title="GAUNTLET"
                subtitle="ULTIMATE"
                    image={require('./../images/Ability/Ardan-C.jpg')}
                text="Ardan leaps to the target location and projects a perimeter around him. Enemy heroes who touch or cross the perimeter are stunned and take crystal damage. 
• If Ardan leaves the perimeter, it is immediately destroyed. 
• Ardan instantly gains full Vengeance upon using this ability."
                        lvl1='LVL 1'
                        lvl2='LVL 2'
                        lvl3='LVL 3'
                        cp='CP%'
                        color='#38eeff'
                        stats1='Cooldown'
                        row11='120s'
                        row12='110s'
                        row13='100s'
                        row16=''
                        stats2='Energy Cost'
                        row21='0'
                        row22='0'
                        row23='0'
                        row26=' '
                        stats3='Damage'
                        row31='400'
                        row32='500'
                        row33='600'
                        row36='250%'
                        stats4='Stun Duration'
                        row41='0.6s'
                        row42='0.9s'
                        row43='1.2s'
                        row46=' '
                        stats5='Duration'
                        row51='6s'
                        row52='6s'
                        row53='6s'
                        row54=' '
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
                title="Vanguardian"
                subtitle="RARE"
                color="#6393F9"
                text="Vanguard (A) provides a full-strength barrier when self-cast."
                text2="• Barrier 120% (+5%)"
                text3="• Damage 20% (+1%)"
                text4="• Cooldown 95% (-1%)"
                image={require('./../images/Talents/Ardan_Rare.png')}
            />
            <Talentbox
                title="Heavy Hitter"
                subtitle="EPIC"
                color="#7A02EA"
                text="Blood for Blood (B) deals much more damage but has 3.5 shorter range."
                text2="• Damage 140% (+15%)"
                text3="• Cooldown 150% (-3%)"
                image={require('./../images/Talents/Ardan_Epic.png')}
            />
            <Talentbox
                title="Knockout Punch"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Blood for Blood (B) also knocks back the target 10 meters."
                text2="• Damage 110% (+20%)"
                text3="• Cooldown 100% (+10%)"
                image={require('./../images/Talents/Ardan_Legendary.png')}
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
                title="Storm Lord Ardan"
                text="Rare"
                image={require('./../images/Skins/Ardan_Stormlord_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Storm Vigil Ardan"
                text="Epic"
                image={require('./../images/Skins/Ardan_Stormlord_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Redemption Ardan"
                text="Legendary"
                image={require('./../images/Skins/Ardan_Stormlord_III_L.png')} />
            <Skinbox
                color="#7A02EA"
                title="Gladiator Ardan"
                text="Epic"
                image={require('./../images/Skins/Ardan_Gladiator_E.png')} />
                <Skinbox
                color="#7A02EA"
                title="Cagefighter Ardan"
                text="Epic"
                image={require('./../images/Skins/Ardan_Cagefighter_Epic.png')} />
            <Skinbox
                color="#FADA5E"
                title="Contender Ardan"
                text="Limited Edition"
                image={require('./../images/Skins/Ardan_Contender.png')} />
        
        </div>
    </div>
    </Page>
  </Layout>
    )

export default Ardan