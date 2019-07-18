import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImgHero from 'gatsby-image'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import AdComponent from '../components/ad';


const Hero = styled.div`
text-align: center;
position: relative;
  height: 100vh;
  background-size: cover;
`

const HeroContainer = styled.div`
position: absolute;
  height:100vh;
  width: 100%;
  z-index: -1;
`

const Gradient = styled.div`
position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  background: linear-gradient(rgba(31, 31, 33, 0.15) 0%, #1f1f21 100%);
  pointer-events: none;
`

const UserImg = styled.img`
margin-bottom: 24px;
width: 100px;
heigth: 100px;
border-radius: 50px;
`


const HeroGroup = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const HeroGrouph1 = styled.h1`
text-align: center;
    font-family: Antonio;
    font-size: 36px;
    margin:0 auto;
    color: rgba(255, 255, 255, 0.808);
    line-height: 1.2;
   -webkit-font-smoothing: antialiased;
   margin-bottom: 16px;
   @media (max-width: 480px) {
       width: 280px;
     }
`

const HeroGroupP = styled.p`
    padding: 10px;
    border-radius: 10px;
    font-weight:800;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.808);
    -webkit-font-smoothing: antialiased;
    background: rgba(255, 255, 255, 0.274);
    width: 50px;
    margin: 6px;
    margin-top: 5px;
`

const BuildGroup = styled.div`
display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
  max-width: 1366px;
`


const Box = styled.div`
flex-grow: 1;
    height: auto;
    overflow: hidden;
    border-radius: 26px;
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
     background-color: #2B2B2D;
     margin: 0 auto;
     margin-top: 16px;
     margin-right: 16px;
     @media (max-width: 480px) {
       width: 100%;
     }
`

const ImageGroup = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`

const ItemImg = styled.img`
width: 50px;
margin: 16px;
`



const BuildPage = props => (
  <Layout>
    <MediaQuery query="(min-width: 721px)">
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={3}>
        <Hero>
          <HeroContainer>
            <ImgHero
              imgStyle={{ objectPosition: "center top" }}
              style={{ height: '100vh' }}
              className="Img"
              fluid={props.data.imageOne.childImageSharp.fluid}
            />
            <Gradient />
          </HeroContainer>
          <HeroGroup>
            <UserImg src={require('../images/Contentcreators/download.jpg')}></UserImg>
            <HeroGrouph1>MIHO COMPLITE GUIDE UPDATE 4.5</HeroGrouph1>
            <div style={{
              display: 'flex', justifyContent: 'center'
            }}>
              <HeroGroupP>4.5</HeroGroupP>
              <HeroGroupP>WP</HeroGroupP>
              <HeroGroupP>CP</HeroGroupP>
            </div>
          </HeroGroup>
          <img class="animated infinite pulse" style={{ position: 'absolute', bottom: 16, width: '50px', textAlign: 'center' }} className='arrowscroll' src={require('../images/arrow.png')}></img>
        </Hero>
      </ScrollAnimation>
    </MediaQuery>
    <MediaQuery query="(max-width: 720px)">
      <Hero>
        <HeroContainer>
          <ImgHero
            imgStyle={{ objectPosition: "center top" }}
            style={{ height: '100vh' }}
            className="Img"
            fluid={props.data.imageTwo.childImageSharp.fluid}
          />
          <Gradient />
        </HeroContainer>
        <HeroGroup>
          <UserImg src={require('../images/Contentcreators/download.jpg')}></UserImg>
          <HeroGrouph1>MIHO COMPLITE GUIDE 4.5</HeroGrouph1>
          <div style={{
            display: 'flex', justifyContent: 'center'
          }}>
            <HeroGroupP>4.5</HeroGroupP>
            <HeroGroupP>WP</HeroGroupP>
            <HeroGroupP>CP</HeroGroupP>
          </div>
        </HeroGroup>
      </Hero>
    </MediaQuery>
    <AdComponent />
    <div className='Title'>
      <h1>Build</h1>
    </div>
    <BuildGroup>
      <Box>
        <ImageGroup>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
        </ImageGroup>
      </Box>
      <Box>
        <ImageGroup>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
        </ImageGroup>
      </Box>
      <Box>
        <ImageGroup>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
          <ItemImg src={require('../images/Items/aegis.png')}></ItemImg>
        </ImageGroup>
      </Box>
    </BuildGroup>
  </Layout>
)

export default BuildPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "45bgdesktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "45bgmobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
  `