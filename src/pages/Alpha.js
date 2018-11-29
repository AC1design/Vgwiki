import React from 'react'
import Statbox from '../components/Statbox';
import Skillbox from '../components/Skillbox';
import Talentbox from '../components/Talentbox';
import Skinbox from '../components/SkinBox';
import Heroes from '../components/Hero';
import Models from '../components/Model'
import Layout from '../components/layout'

const Alpha = () => (
    <Layout>
<meta name="theme-color" content="#1f1f21"/>
    <Heroes
        bgdesktop={require("./../images/BG/Alpha_Desktop.jpg")}
        bgtablet={require("./../images/BG/Alpha_Tablet.jpg")}
        bgmobile={require("./../images/BG/Alpha_Mobile.jpg")}
        heroname="ALPHA"
        role='JUNGLER, WARRIOR'
        description="Killing machine who can resurrect herself."
            spotlight="bZOG2BzWE2o">
    </Heroes>
    <div className="Title">
        <h1>STATS (LEVEL 1-12)</h1>
        <div className="line" />
    </div>
    <div className="StatboxGroupScroll">
        <div className="StatboxGroup">
            <Statbox
                title="HEALTH"
                value="761 - 2537"
                color="#4eec8b"
                />
                <Statbox
                title="HEALTH REGEN"
                value="3.14 - 6.99 "
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
                value="83 - 124"
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
                value="2.1"
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
   bgmodel={require("./../images/BG/Alphablurred.jpg")}
   model={require("./../images/models/Alpha.png")}>
   </Models>
    <div className="Title">
        <h1>SKILLS (CLICK FOR MORE)</h1>
        <div className="line">
        </div>
    </div>
    <div className="SkillboxGroupScroll">
        <div className="SkillboxGroup">
            <Skillbox
                title="INFINITE REBOOT"
                subtitle="HEROIC PERK"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/Alpha-Icon_Perk.jpg'
                text="Instead of dying, Alpha initiates 3.5s reboot sequence. If her reboot health is not destroyed before time runs out, she will return to life.
                When alive, Alpha's special energy bar shows the time until Infinite Reboot is available. When rebooting, the bar counts down to when she will revive.
    
                • Reboot health: 600-2600 (level 1-12) (+65% of Bonus Max Energy)
                • Reboot Duration: 3.5s
                • Alpha revives with her Prime Directive & Core Charge ability cooldowns refreshed.
                "
            />
            <Skillbox
                title="PRIME DIRECTIVE"
                subtitle="A ABILITY"
                text="Alpha scans for enemies along a path. If she scans an enemy, that enemy is slowed and Alpha instantly dashes behind them, dealing damage to the target and all enemies within 4.5 meters (50% damage to minions). This also removes the negative effects of Core Overload (without removing the positive effects), dealing increased damage based on the number of stacks removed."
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/Alpha-Icon_A.jpg'
                boxShadow="10px 20px 30px white"
            />
            <Skillbox
                title="CORE CHARGE"
                subtitle="B ABILITY"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/Alpha-Icon_B.jpg'
                text="Alpha lunges forward, and basic attacks her target. This ability costs 2% of her current health and applies Core Overload to herself, which will increase her damage output.

                Core Overload (status effect): Each stack increases health cost of Core Charge by 2%, but also increases the damage. Also causes basic attacks to heal her. This healing is reduced against lane minions. Lasts 8.0s, stacking up to 3 times. Basic attacks refresh the duration.
                
                • Attack has a small AOE, hitting nearby targets for crystal damage.
                • Basic attacks reduce the cooldown of this ability."
            />
            <Skillbox
                title="TERMINATION PROTOCOL"
                subtitle="ULTIMATE"
                image='https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/Alpha-Icon_C.jpg'
                text="Alpha starts her self-destruct sequence, exploding after 3s and then ressurrecting herself with Infinite Reboot.

                • At the start of the ability, she gains a burst of move speed that decays rapidly.
                • She also gains a large health barrier. If enemies break this barrier, she explodes early.
                • This ability can only be activated while Infinite Reboot is available.
                • Upgrading this ability reduces the cooldown of Infinite Reboot.
                • Barrier: 400-1000 (level 1-12)
                • Explosion radions: 4.5 meters"
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
                title="Core Overclock"
                subtitle="RARE"
                color="#6393F9"
                text="Beneficial Core Overload (B) stacks boost attack speed. Alpha passively gains weapon power."
                text2="• Attack Speed/Stack +15%"
                text3="• Passive Weapon Power +5% (+1%)"
                image={require('./../images/Talents/Alpha_Rare.png')}
            />
            <Talentbox
                title="Prime Time"
                subtitle="EPIC"
                color="#7A02EA"
                text="Prime Directive (A) grants Alpha bonus fortified health for every negative Core Overload stack from Core Charge (B) she expends. Longer cooldown."
                text2="• Health Fort/Stack 15% (+2.5%)"
                text3="• Duration 3s"
                text4="• Cooldown 100% (-3%)"
                image={require('./../images/Talents/Alpha_Epic.png')}
            />
            <Talentbox
                title="Acceleration"
                subtitle="LEGENDARY"
                color="#FF9000"
                text="Termination Protocol (Ult) has a stronger barrier and grants Alpha increased move speed instead of slowing her. Shorter cooldown."
                text2="• Cooldown 80%"
                text3="• Bonus Move Speed 2"
                text4="• Barrier 125%"
                image={require('./../images/Talents/Alpha_Legendary.png')}
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
                title="Broken Doll Alpha"
                text="Rare"
                image={require('./../images/Skins/Alpha_Broken_Doll_I_R.png')} />
            <Skinbox
                color="#7A02EA"
                title="Toy Box Alpha"
                text="Epic"
                image={require('./../images/Skins/Alpha_Broken_Doll_II_E.png')} />
            <Skinbox
                color="#FF9000"
                title="Clockwork Heart Alpha"
                text="Legendary"
                image={require('./../images/Skins/Alpha_Broken_Doll_Legendary.png')} />
            <Skinbox
                color="#6393F9"
                title="Heartless Alpha"
                text="Rare"
                image={require('./../images/Skins/Alpha_Heartless_Rare.png')} />
        </div>
    </div>
  </Layout>
    )

export default Alpha