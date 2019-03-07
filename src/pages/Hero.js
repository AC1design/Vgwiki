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
  const hero = props.location.href
    ? heroCards.find(h => h.name === props.location.href.substring(28))
    : heroCards[0]
  let path = `${hero.name}`
  return (
    <Layout>
      <div style={{ height: '100%' }}>
        <Page loader={'bar'} color={'#A9A9A9'} size={4} duration={1}>
            <Heroes
              bgdesktop={require(`./../images/BG/` + path + `_Desktop.jpg`)}
              bgtablet={require(`./../images/BG/` + path + `_Desktop.jpg`)}
              bgmobile={require(`./../images/BG/` + path + `_Desktop.jpg`)}
              heroname={hero.name}
              role={hero.type.join(', ')}
              description={hero.description}
              spotlight={hero.spotlight}
            />
        </Page>
      </div>
    </Layout>
  )
}
