import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/Tab.css'
import React from 'react'
import Card from './Card'
import Itemsbox from './Item'
import MediaQuery from 'react-responsive'
import 'animate.css/animate.min.css'
import Emojibox from './Emoji'
import { heroCards, heroTabs } from '../constants/heroes'
import { itemTabs, itemBoxes } from '../constants/items'
import { charms } from '../constants/charms'

const tabNames = ['HEROES', 'ITEMS', 'EMOJI CHARMS']

const makeHeroCard = (hero, index) => (
  <Card
    title={hero.name}
    text={hero.type.join(', ')}
    image={require(`./../images/Cards/${hero.name}_Card.jpg`)}
    link={hero.name}
    key={index}
  />
)

const makeItemBox = (item, index) => (
  <Itemsbox
    itemimg={require(`./../images/Items/${item.image}.png`)}
    itemname={item.name}
    class={item.class}
    tier={item.tier}
    color={item.color}
    cost={item.cost}
    tag={item.tag}
    description={item.description}
    tip={item.tip}
    builtfrom={item.item1 ? 'BUILT FROM' : null}
    buildsto={item.item4 ? 'BUILDS INTO' : null}
    item1={item.item1 ? require(`./../images/Items/${item.item1}.png`) : null}
    item2={item.item2 ? require(`./../images/Items/${item.item2}.png`) : null}
    item3={item.item3 ? require(`./../images/Items/${item.item3}.png`) : null}
    item4={item.item4 ? require(`./../images/Items/${item.item4}.png`) : null}
    item5={item.item5 ? require(`./../images/Items/${item.item5}.png`) : null}
    item6={item.item6 ? require(`./../images/Items/${item.item6}.png`) : null}
    item7={item.item7 ? require(`./../images/Items/${item.item7}.png`) : null}
    item8={item.item8 ? require(`./../images/Items/${item.item8}.png`) : null}
    item9={item.item9 ? require(`./../images/Items/${item.item9}.png`) : null}
    key={index}
  />
)

class Tabsind extends React.Component {
  makeHeroCard = (hero, index) => (
    <Card
      title={hero.name}
      text={hero.type.join(', ')}
      image={require(`./../images/Cards/${hero.name}_Card.jpg`)}
      link={`/${hero.name}/`}
      key={index}
    />
  )

  makeItemBox = (item, index) => (
    <Itemsbox
      itemimg={require(`./../images/Items/${item.image}.png`)}
      itemname={item.name}
      class={item.class}
      tier={item.tier}
      color={item.color}
      cost={item.cost}
      tag={item.tag}
      description={item.description}
      tip={item.tip}
      builtfrom={item.item1 ? 'BUILT FROM' : null}
      buildsto={item.item4 ? 'BUILDS INTO' : null}
      item1={item.item1 ? require(`./../images/Items/${item.item1}.png`) : null}
      item2={item.item2 ? require(`./../images/Items/${item.item2}.png`) : null}
      item3={item.item3 ? require(`./../images/Items/${item.item3}.png`) : null}
      item4={item.item4 ? require(`./../images/Items/${item.item4}.png`) : null}
      item5={item.item5 ? require(`./../images/Items/${item.item5}.png`) : null}
      item6={item.item6 ? require(`./../images/Items/${item.item6}.png`) : null}
      item7={item.item7 ? require(`./../images/Items/${item.item7}.png`) : null}
      item8={item.item8 ? require(`./../images/Items/${item.item8}.png`) : null}
      item9={item.item9 ? require(`./../images/Items/${item.item9}.png`) : null}
      key={index}
    />
  )

  render() {
    return (
      <MediaQuery query="(min-width: 1367px)">
        <Tabs>
          <TabList>
            {tabNames.map((tabName, index) => (
              <Tab key={index}>{tabName}</Tab>
            ))}
          </TabList>
          <TabPanel className="HeroesPanel">
            <div className="Selectan">
              <h1>Select an Hero</h1>
              <Tabs>
                <TabList className="Subcategory">
                  {heroTabs.map((tab, index) => (
                    <Tab key={index}>{tab}</Tab>
                  ))}
                </TabList>
                <TabPanel className="AllHeroes">
                  <div className="CardboxGroup">
                    {heroCards.map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
                <TabPanel className="Assassins">
                  <div className="CardboxGroup">
                    {heroCards
                      .filter(hero => hero.type.includes('ASSASSIN'))
                      .map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
                <TabPanel className="Mages">
                  <div className="CardboxGroup">
                    {heroCards
                      .filter(hero => hero.type.includes('MAGE'))
                      .map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
                <TabPanel className="Protectors">
                  <div className="CardboxGroup">
                    {heroCards
                      .filter(hero => hero.type.includes('PROTECTOR'))
                      .map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
                <TabPanel className="Snipers">
                  <div className="CardboxGroup">
                    {heroCards
                      .filter(hero => hero.type.includes('SNIPER'))
                      .map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
                <TabPanel className="Warriors">
                  <div className="CardboxGroup">
                    {heroCards
                      .filter(hero => hero.type.includes('WARRIOR'))
                      .map((hero, index) => makeHeroCard(hero, index))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="Selectan">
              <h1>Select an Item</h1>{' '}
            </div>
            <Tabs>
              <TabList className="Subcategory">
                {itemTabs.map((tab, index) => (
                  <Tab key={index}>{tab}</Tab>
                ))}
              </TabList>
              <TabPanel className="All">
                <div className="ItemboxGroup">
                  {itemBoxes.map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
              <TabPanel className="Crystal">
                <div className="ItemboxGroup">
                  {itemBoxes
                    .filter(item => item.class === 'CRYSTAL')
                    .map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
              <TabPanel className="Weapon">
                <div className="ItemboxGroup">
                  {itemBoxes
                    .filter(item => item.class === 'WEAPON')
                    .map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
              <TabPanel className="Defense">
                <div className="ItemboxGroup">
                  {itemBoxes
                    .filter(item => item.class === 'DEFENSE')
                    .map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
              <TabPanel className="Utility">
                <div className="ItemboxGroup">
                  {itemBoxes
                    .filter(item => item.class === 'UTILITY')
                    .map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
              <TabPanel className="Consumable">
                <div className="ItemboxGroup">
                  {itemBoxes
                    .filter(item => item.class === 'CONSUMABLE')
                    .map((item, index) => makeItemBox(item, index))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <div className="Selectan">
              <h1>Select an Item</h1>{' '}
            </div>
            <div className="EmojiboxGroup">
              {charms.map((charm, index) => (
                <Emojibox
                  itemimg={require(`./../images/Emoji/${charm.image}.png`)}
                  itemname={charm.name}
                  key={index}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </MediaQuery>
    )
  }
}
export default Tabsind
