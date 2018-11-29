import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model';
import Layout from '../components/layout'


const Ardan = () => (
    <Layout>
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
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/Ardan_P_JuliasGift.png'
                text="Ardan benefits from purchasing health items.
                Whenever Ardan takes damage, he heals for 0.8% of his missing health, but no more than 75% of the damage taken.
                Instead of energy, Ardan uses a yellow meter called Vengeance. Vengeance builds over time and can also be gained with basic attacks, crtical strikes and abilities.
                Because Ardan doesn't need regular energy, 5% of bonus energy and 50% of bonus energy recharge are converted to crystal power."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-A-Vanguard.mp4"
                title="VANGUARD"
                subtitle="A ABILITY"
                text="Ardan dashes to protect an ally, granting them a 4s barrier and a burst of move speed. This also slows and damages nearby enemies.
                Overdrive: At max rank, Vanguard grants 30% Vengeance when cast on an ally.
                • Using this ability on himself results in only half the barrier, speed boost and Vengeance gain.
                • Barrier scales up with 30% of Ardan's bonus health.
                • Any time this ally takes damage, Ardan gains Vengeance."
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/ArdanAVanguard.png'
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-B-Blood-for-Blood.mp4"
                title="BLOOD FOR BLOOD"
                subtitle="B ABILITY"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/ArdanBBloodforBlood.png'
                text="Ardan rushes forward and punches his target.
                • Overdrive: At max rank, Blood for Blood deals additional 40% damage.
                • Blood for Blood can only be activated when Ardan has 100% Vengeance and will consume all of it.
                • Blood for Blood triggers basic-attack effects."
            />
            <Skillbox
                video="https://www.vainglorygame.com/wp-content/uploads/2015/05/C-Ardan-Gauntlet-Large.mp4"
                title="GAUNTLET"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/ArdanCGauntlet.png'
                text="Ardan leaps to the target location and projects a perimeter around him. Enemy heroes who touch or cross the perimeter are stunned and take crystal damage.
                • If Ardan leaves the perimeter, it is immediately destroyed.
                • Ardan instantly gains full Vengeance upon using this ability."
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
  </Layout>
    )

export default Ardan