import React from 'react'
import Layout from '../components/layout'
import Tabsind from '../components/Tab';
import MediaQuery from 'react-responsive';
import MobileHeroesTab from '../components/MobileHeroesTabs';
import MobileItemsTab from '../components/MobileItemsTabs';
import Page from 'react-page-loading'
import Charms from '../components/MobileCharmsTab';
import AdComponent from '../components/ad';
import Frames from '../components/Frame'

const IndexPage = () => (
  <Layout>
    <meta name="theme-color" content="#1f1f21" />
    <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1}>
    <div className="Hero" >
      <div className="HeroGroup">
        <h1>VAINGLORY WIKI</h1>
        <p>UPDATE 3.10</p>
      </div>
    </div>
    
    <Tabsind></Tabsind>
    <div className='mobile'>
<MediaQuery query="(max-width: 1366px)">
      <MobileHeroesTab></MobileHeroesTab>
      <Frames></Frames>
      <div className='adbox'><AdComponent></AdComponent></div>
      <MobileItemsTab></MobileItemsTab>
      <Charms></Charms>
</MediaQuery></div>
      
      
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Page>
  </Layout>
)

export default IndexPage
