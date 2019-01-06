import React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import Itemsbox from '../components/Item';
import Tabsind from '../components/Tab';
import MediaQuery from 'react-responsive';
import StickyFooter from 'react-sticky-footer';
import MobileHeroesTab from '../components/MobileHeroesTabs';
import MobileItemsTab from '../components/MobileItemsTabs';
import AdComponent from '../components/ad';

const IndexPage = () => (
  <Layout>
    <meta name="theme-color" content="#1f1f21" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>VAINGLORYWIKI</h1>
        <p>UPDATE 3.8</p>
      </div>
      <svg width="100%" height="145" viewBox="0 0 100% 200" fill="none">
  <path fill="#1f1f21">
  <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
    values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

    M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
 
    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
  </path>
</svg>
    </div>
    <AdComponent></AdComponent>
    <Tabsind></Tabsind>
<MediaQuery query="(max-width: 1366px)">
      
      <MobileHeroesTab></MobileHeroesTab>
      <MobileItemsTab></MobileItemsTab> 
</MediaQuery>
    <StickyFooter
    className="footer"
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: "#2B2B2D",
        padding: "1rem",
        fontSize:"12px",
        color:"white",
        textAlign:"center",
        marginTop:"50px"
      }}
      stickyStyles={{
        backgroundColor: "#2B2B2D",
        padding: "1rem",
        fontSize: "12px",
        color: "white",
        textAlign: "center",
        marginTop: "50px"
      }}
      
    >
      © 2018 Copyright: <a href="https://twitter.com/AngeloCant1">AngeloC</a>
</StickyFooter>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  </Layout>
)

export default IndexPage
