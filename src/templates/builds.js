import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImgHero from 'gatsby-image'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import 'animate.css/animate.min.css'
import AdComponent from '../components/ad'

const Hero = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  background-size: cover;
`

const HeroContainer = styled.div`
  position: absolute;
  height: 100vh;
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
  margin: 0 auto;
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
  font-weight: 800;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.808);
  -webkit-font-smoothing: antialiased;
  background: rgba(255, 255, 255, 0.274);
  width: 50px;
  margin: 6px;
  margin-top: 5px;
`
const GroupH1 = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`

const H1 = styled.h1`
  font-family: Antonio;
  color: white;
  margin-left: 16px;
`

const BuildGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
  max-width: 1366px;
`

const Build = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  width: auto;
  @media (max-width: 1080px) {
    width: 100%;
  }
`

const BuildTitle = styled.h1`
  font-size: 16px;
  font-family: Antonio;
  color: white;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  height: auto;
  overflow: hidden;
  border-radius: 26px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: #2b2b2d;
  margin: 0 auto;
`

const ImageGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-content: center;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
`

const ItemImg = styled.img`
  width: 50px;
`
const ItemName = styled.p`
  text-align: center;
  margin-top: 0px;
  color: white;
  font-size: 12px;
  width: 50px;
  margin-top: 16px;
`

export default function({ data }) {
  const build = data.allJavascriptFrontmatter.edges.length
    ? data.allJavascriptFrontmatter.edges[0].node.frontmatter
    : null
  if (!build) return <p>No build found</p>
  return (
    <Layout>
      <MediaQuery query="(min-width: 721px)">
        <Hero>
          <HeroContainer>
            <ImgHero
              imgStyle={{ objectPosition: 'center top' }}
              style={{ height: '100vh' }}
              className="Img"
              fluid={data.imageOne.childImageSharp.fluid}
            />
            <Gradient />
          </HeroContainer>
          <HeroGroup>
            <UserImg
              src={require('../images/Contentcreators/download.jpg')}
            ></UserImg>
            <HeroGrouph1>{build.title.toUpperCase()}</HeroGrouph1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <HeroGroupP>{build.version}</HeroGroupP>
              <HeroGroupP>WP</HeroGroupP>
              <HeroGroupP>CP</HeroGroupP>
            </div>
          </HeroGroup>
          <p
            className="animate infinite pulse"
            style={{
              position: 'absolute',
              bottom: 16,
              textAlign: 'center',
              color: 'white',
              width: '100%',
              fontStyle: 'italic',
            }}
          >
            {' '}
            Scroll for more{' '}
          </p>
        </Hero>
      </MediaQuery>
      <MediaQuery query="(max-width: 720px)">
        <Hero>
          <HeroContainer>
            <ImgHero
              imgStyle={{ objectPosition: 'center top' }}
              style={{ height: '100vh' }}
              className="Img"
              fluid={data.imageTwo.childImageSharp.fluid}
            />
            <Gradient />
          </HeroContainer>
          <HeroGroup>
            <UserImg
              src={require(`../images/Contentcreators/${build.creatorImage}.jpg`)}
            ></UserImg>
            <HeroGrouph1>{build.title}</HeroGrouph1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <HeroGroupP>{build.version}</HeroGroupP>
              <HeroGroupP>WP</HeroGroupP>
              <HeroGroupP>CP</HeroGroupP>
            </div>
          </HeroGroup>
          <p
            className="animate infinite pulse"
            style={{
              position: 'absolute',
              bottom: 16,
              textAlign: 'center',
              color: 'white',
              width: '100%',
              fontStyle: 'italic',
            }}
          >
            {' '}
            Scroll for more{' '}
          </p>
        </Hero>
      </MediaQuery>
      <AdComponent />
      <GroupH1>
        <H1> Build</H1>
      </GroupH1>
			<BuildGroup>
				{build.builds.map(b => (
					<Build>
          <BuildTitle>{b.name}</BuildTitle>
          <Box>
						<ImageGroup>
							{b.items.map((item, itemIndex) => (
								<Item key={itemIndex}>
                <ItemImg src={require(`../images/Items/${item.image}.png`)}></ItemImg>
                <ItemName>{item.name}</ItemName>
              </Item>
							))}
            </ImageGroup>
          </Box>
        </Build>
				))}
      </BuildGroup>
    </Layout>
  )
}

export const postQuery = graphql`
  query BuildsDataByPath($path: String!) {
    allJavascriptFrontmatter(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          frontmatter {
            error
            name
            path
            builds {
							name
							items {
								name
								image
							}
						}
						creatorImage
						title
						version
          }
        }
      }
    }

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
