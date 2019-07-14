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
import { pings } from '../constants/pings'
import { hats } from '../constants/hats'
import Pings from './SocialPings'
import Hats from './Hats';
import AdComponent from './ad';
import WPCard from './Wallpapercard';
import MediaControlCard from './Wpcard';

const tabNames = ['HEROES', 'ITEMS', 'COSMETICS']

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
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: localStorage.getItem('desktopTabIndex') || 0,
    }
  }

  selectTab(index) {
    // update localStorage
    localStorage.setItem('desktopTabIndex', index)
    // Update the state
    return this.setState({ tabIndex: index })
  }
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
        <div className="Selectan">
          <h1 style={{fontSize:'18px'}}>Latest Wallpapers</h1>
          </div>
        <div className="CardboxGroup" style={{marginBottom:'60px'}}>
        <MediaControlCard
            image={require('../images/Wallpaper/miho.png')}
            text='Miho Wallpapers'
          />
          <MediaControlCard
            image={require('../images/Wallpaper/lance.png')}
            text='Lance Wallpapers'
          />
          <MediaControlCard
            image={require('../images/Wallpaper/kestrel.png')}
            text='Kestrel Wallpapers'
          />
        </div>
        <Tabs
          defaultIndex={parseInt(this.state.tabIndex, 10)}
          onSelect={tabIndex => this.selectTab(tabIndex)}
        >
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
                <AdComponent />
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
              <AdComponent/>
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
              <h1>Hats (Click for More)</h1>{' '}
            </div>
            <div className="HatsboxGroup">
              {hats.map((hat, index) => (
                <Hats
                  name={hat.name}
                  hat={require(`./../images/Hats/${hat.hat}.png`)}
                  mat1={require(`./../images/Hats/Materials/${hat.material1}.png`)}
                  qt1={hat.qt1}
                  mat2={require(`./../images/Hats/Materials/${hat.material2}.png`)}
                  qt2={hat.qt2}
                  mat3={require(`./../images/Hats/Materials/${hat.material3}.png`)}
                  qt3={hat.qt3}
                  text={hat.text}
                  key={index}
                />
              ))}
            </div>
            <div className="Selectan">
              <h1>Social Pings</h1>{' '}
            </div>
            <div className="PingboxGroup">
              {pings.map((ping, index) => (
                <Pings
                  bg={require(`./../images/Ping/${ping.id}.jpg`)}
                  namepack= {ping.name}
              ping1 = { require(`./../images/Ping/${ping.id}-ThumbsUp-1.png`)}
              ping2 = {require(`./../images/Ping/${ping.id}-Happy-1.png`)}
              ping3 = {require(`./../images/Ping/${ping.id}-Sad-1.png`)}
                  ping4={require(`./../images/Ping/${ping.id}-Cheers-1.png`)}
                  ping5={require(`./../images/Ping/${ping.id}-OK-1.png`)}
              ping6 = {require(`./../images/Ping/${ping.id}-ThumbsUp-2.png`)}
              ping11 = {require(`./../images/Ping/${ping.id}-ThumbsUp-3.png`)}
              ping7 = {require(`./../images/Ping/${ping.id}-Happy-2.png`)}
              ping12 = {require(`./../images/Ping/${ping.id}-Happy-3.png`)}
              ping8 = {require(`./../images/Ping/${ping.id}-Sad-2.png`)}
              ping13 = {require(`./../images/Ping/${ping.id}-Sad-3.png`)}
              ping9 = {require(`./../images/Ping/${ping.id}-Cheers-2.png`)}
              ping14 = {require(`./../images/Ping/${ping.id}-Cheers-3.png`)}
              ping10 = {require(`./../images/Ping/${ping.id}-OK-2.png`)}
              ping15 = {require(`./../images/Ping/${ping.id}-OK-3.png`)}
                  key={index}
                />
              ))}
            </div>
            <div className="Selectan">
              <h1>Charms</h1>{' '}
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
