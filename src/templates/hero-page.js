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
import StickyFooter from 'react-sticky-footer'

export default function({ data }) {
  const hero = data.allJavascriptFrontmatter.edges.length
    ? data.allJavascriptFrontmatter.edges[0].node.frontmatter
    : null
  if (!hero) return <p>No hero found</p>
  return (
    <Layout>
      <div style={{ height: '100%' }}>
        <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={4}>
          <Heroes
            style={{ zIndex: '-10000' }}
            heroname={hero.name}
            role={hero.type.join(', ')}
            description={hero.description}
            spotlight={hero.spotlight}
          />
          <div style={{ marginTop: '-50px', zIndex: '10000', background: '#1f1f21', paddingTop: '6px', borderRadius: '26px 26px 0px 0px'}}>
          <div style={{ width: '80px' , height: '6px', background: 'white', margin: '0 auto', marginTop: '16px', borderRadius: '50px', opacity: '0.5'}}></div>
            <div className="Title">
            <h1>Stats (Lvl 1-12)</h1>
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
            <h1>3D Model</h1>
            <div className="line" />
          </div>
          <Models heroname={hero.name} />
          <div className="Title">
            <h1>Skills</h1>
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
          <div className="Title">
            <h1>Talents (Lvl 1 + % per Lvl)</h1>
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
          <div className="Title">
            {hero.skins.length ? <h1>Skins</h1> : null}
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
                  opals={skin.opals}
                  key={index}
                />
              ))}
            </div>
            </div>
          </div>
          <StickyFooter
            className="footer"
            bottomThreshold={50}
            normalStyles={{
              backgroundColor: '#2B2B2D',
              padding: '1rem',
              fontSize: '12px',
              color: 'white',
              textAlign: 'center',
              marginTop: '50px',
            }}
            stickyStyles={{
              backgroundColor: '#2B2B2D',
              padding: '1rem',
              fontSize: '12px',
              color: 'white',
              textAlign: 'center',
              marginTop: '50px',
            }}
          >
            <p>Copyright © 2019 VGWIKI</p>
            <p>VGWIKI is not affiliated or part of Super Evil Megacorp. All Vainglory copyrights and art assets belong to Super Evil Megacorp.</p>
            Made by
{' '}
            <a href="https://twitter.com/AngeloCant1">AngeloC</a>
            <a style={{ marginLeft: '16px' }} href='https://www.termsfeed.com/privacy-policy/b38962cdaa462299f0b57bf61cc6dbef'>Privacy Policy</a>
          <h1 style={{ fontSize: '14px' }}>Cookie Declaration</h1>
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/723cc8d9-3751-4bf3-826f-a7fa548b4a79/cd.js" type="text/javascript" async></script>
            <a href="javascript: Cookiebot.renew()">Change your consent</a>
            <a style={{ marginLeft: '16px'}} href="javascript: Cookiebot.withdraw()">Revoke your consent</a>
          </StickyFooter>
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
              price
              opals
            }
          }
        }
      }
    }
  }
`
