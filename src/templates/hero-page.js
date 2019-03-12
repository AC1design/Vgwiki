import React from 'react'
import Statbox from '../components/Statbox'
import Skillbox from '../components/Skillbox'
import Talentbox from '../components/Talentbox'
import Skinbox from '../components/SkinBox'
import Heroes from '../components/Hero'
import Models from '../components/Model'
import Layout from '../components/layout'
import Page from 'react-page-loading'
import { graphql } from 'gatsby'
import AdComponent from '../components/ad';

export default function({ data }) {
  const hero = data.allJavascriptFrontmatter.edges.length
    ? data.allJavascriptFrontmatter.edges[0].node.frontmatter
    : null
  if (!hero) return <p>No hero found</p>
  return (
    <Layout>
      <div style={{ height: '100%' }}>
        <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
          <Heroes
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
          <Models heroname={hero.name} />
          <AdComponent/>
          <div className="Title">
            <h1>SKILLS (CLICK FOR MORE)</h1>
            <div className="line" />
          </div>
          <div className="SkillboxGroupScroll">
            <div className="SkillboxGroup">
              {hero.skills.map((skill, index) => (
                <Skillbox
                  video={skill.video}
                  title={skill.name}
                  subtitle={skill.type}
                  image={skill.image}
                  text={skill.text}
                  stats={skill.stats || []}
                  key={index}
                />
              ))}
            </div>
          </div>
          <AdComponent></AdComponent>
          <div className="Title">
            <h1>TALENTS (LVL 1 + % PER LVL)</h1>
            <div className="line" />
          </div>
          <div className="TalentboxGroupScroll">
            <div className="TalentboxGroup">
              {hero.talents.map((talent, index) => (
                <Talentbox
                  title={talent.name}
                  heroname={hero.name}
                  type={talent.type}
                  subtitle={talent.type.toUpperCase()}
                  color={talent.color}
                  text={talent.text}
                  key={index}
                />
              ))}
            </div>
          </div>
          <AdComponent></AdComponent>
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
                  image={skin.image}
                  price={skin.price}
                  key={index}
                />
              ))}
            </div>
          </div>
          <AdComponent/>
        </Page>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query HeroDataByPath($path: String!) {
    allJavascriptFrontmatter(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          frontmatter {
            error
            name
            path
            type
            role
            description
            spotlight
            stats {
              name
              value
              color
            }
            model {
              image
              tmodel
            }
            skills {
              video
              name
              type
              image
              text
              stats {
                name
                amount
                cr
                wr
              }
            }
            talents {
              name
              type
              color
              text
              image
            }
            skins {
              name
              color
              type
              image
            }
          }
        }
      }
    }
  }
`
