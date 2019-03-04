import React from 'react'
import Statbox from '../components/Statbox'
import Skillbox from '../components/Skillbox'
import Talentbox from '../components/Talentbox'
import Skinbox from '../components/SkinBox'
import Heroes from '../components/Hero'
import Models from '../components/Model'
import Layout from '../components/layout'
import Page from 'react-page-loading'
import { heroCards } from '../constants/heroes'

export default props => {
  const hero = heroCards.find(h => h.name === props.location.href.substring(28))
  return (
    <Layout>
      <div style={{ height: '100%' }}>
        <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
          <Heroes
            bgdesktop={require(`./../images/BG/${hero.name}_Desktop.jpg`)}
            bgtablet={require(`./../images/BG/${hero.name}_Tablet.jpg`)}
            bgmobile={require(`./../images/BG/${hero.name}_Mobile.jpg`)}
            heroname={hero.name}
            role={hero.type.join(', ')}
            description={hero.description}
            spotlight={hero.spotlight}
          />
          <div className="Title">
            <h1>STATS (LEVEL 1-12)</h1>
            <div className="line" />
          </div>
          <div className="StatboxGroupScroll">
            <div className="StatboxGroup">
              {hero.stats.map((stat, index) => (
                <Statbox
                  title={stat.name}
                  value={stat.value}
                  color={stat.color}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="Title">
            <h1>3D MODEL</h1>
            <div className="line" />
          </div>
          <Models
            bgmodel={require(`./../images/BG/${hero.name}blurred.jpg`)}
            model={require(`./../images/models/${hero.name}.png`)}
          />
          <div className="Title">
            <h1>SKILLS (CLICK FOR MORE)</h1>
            <div className="line" />
          </div>
          <div className="SkillboxGroupScroll">
            <div className="SkillboxGroup">
              {hero.skills.map((skill, index) => (
                <Skillbox
                  video={
                    skill.video
                      ? skill.video.startsWith('https')
                        ? skill.video
                        : require(`./../images/SkillVideos/${skill.video}.mp4`)
                      : null
                  }
                  title={skill.name}
                  subtitle={skill.type}
                  image={require(`./../images/Ability/${skill.image}.png`)}
                  text={skill.text}
                  stats={skill.stats || []}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="Title">
            <h1>TALENTS (LVL 1 + % PER LVL)</h1>
            <div className="line" />
          </div>
          <div className="TalentboxGroupScroll">
            <div className="TalentboxGroup">
              {hero.talents.map((talent, index) => (
                <Talentbox
                  title={talent.name}
                  image={require(`./../images/Talents/${hero.name}_${
                    talent.type
                  }.png`)}
                  subtitle={talent.type.toUpperCase()}
                  color={talent.color}
                  text={talent.text}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="Title">
            {hero.skins.length ? <h1>SKINS</h1> : null}
            <div className="line" />
          </div>
          <div className="SkinboxGroupScroll">
            <div className="SkinboxGroup">
              {hero.skins.map((skin, index) => (
                <Skinbox
                  color={skin.color}
                  title={skin.name}
                  text={skin.type}
                  image={require(`./../images/Skins/${skin.image}.png`)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </Page>
      </div>
    </Layout>
  )
}
