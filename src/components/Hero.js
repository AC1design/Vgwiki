import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
      to top,
      #1f1f21 1%,
      #1f1f21 1%,
      rgba(25, 26, 27, 0) 100%
    ),
    url(${props => props.bgdesktop}) no-repeat top center;
  height: 100vh;
  @media (max-width: 1024px) {
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
        to top,
        #1f1f21 1%,
        #1f1f21 1%,
        rgba(25, 26, 27, 0) 100%
      ),
      url(${props => props.bgtablet}) no-repeat center top;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
        to top,
        rgba(31, 31, 33, 1) 2%,
        rgba(31, 31, 33, 1) 5%,
        rgba(25, 26, 27, 0) 100%
      ),
      url(${props => props.bgmobile}) no-repeat center top;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 812px) and (orientation: landscape) {
    background: linear-gradient(
        to top,
        #1f1f21 1%,
        #1f1f21 1%,
        rgba(25, 26, 27, 0) 100%
      ),
      url(${props => props.bgdesktop}) no-repeat top center;
    height: 400px;
    background-size: cover;
  }
`
const HeroGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 0px;
  display: flex;
  -webkit-font-smoothing: antialiased;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
    padding: 70px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 480px) {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
const HeroName = styled.h1`
  font-family: 'Antonio';
  margin: 0;
  font-size: 70px;
  font-weight: 700;
  color: rgb(255, 193, 21);
  line-height: 1.2;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-family: Antonio;
    margin: 0;
    font-size: 40px;
    color: rgb(255, 193, 21);
    line-height: 1.2;
  }

  @media only screen and (min-device-width: 480px) and (max-device-width: 812px) and (orientation: landscape) {
    font-family: Antonio;
    margin: 0;
    font-size: 40px;
    color: rgb(255, 193, 21);
    line-height: 1.2;
  }
`
const Roles = styled.h2`
  font-family: sans-serif;
  font-weight: 350;
  font-size: 35px;
  letter-spacing: normal;
  margin: 0;
  color: white;
  line-height: 1.2;
  @media (max-width: 480px) {
    font-size: 20px;
    letter-spacing: normal;
    margin: 0;
    color: white;
    line-height: 1.2;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 812px) and (orientation: landscape) {
    font-size: 20px;
    letter-spacing: normal;
    margin: 0;
    color: white;
    line-height: 1.2;
  }
`
const Descritpion = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.808);
  line-height: 1.5;
  @media (max-width: 480px) {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.808);
    line-height: 1.5;
    width: 290px;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 812px) and (orientation: landscape) {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.808);
    line-height: 1.5;
    width: 290px;
  }
`

const Button = styled.button`
font-size:14px;
 width: 110px;
      height: 35px;
      background: none;
      border-radius: 20px;
      border: 1px solid white;
      color: white;
      font-weight: 600;
      cursor: pointer;
      outline: none;
      margin: 10px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      :hover {
    background: white;
    color: black;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);}
    }
    @media only screen and (min-device-width : 480px)
and (max-device-width : 812px)
and (orientation : landscape) {
           font-size: 12px;
           width: 110px;
      height: 35px;
}
`

class Heroes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={3}>
        <Modal
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.spotlight}
          onClose={() => this.setState({ isOpen: false })}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        />
        <Hero
          bgdesktop={require(`./../images/BG/${
            this.props.heroname
          }_Desktop.jpg`)}
          bgtablet={require(`./../images/BG/${this.props.heroname}_Tablet.jpg`)}
          bgmobile={require(`./../images/BG/${this.props.heroname}_Mobile.jpg`)}
        >
          <HeroGroup>
            <HeroName>{this.props.heroname}</HeroName>
            <Roles>{this.props.role}</Roles>
            <Descritpion>{this.props.description}</Descritpion>
            <Button onClick={this.openModal}>SPOTLIGHT</Button>
          </HeroGroup>
        </Hero>
      </ScrollAnimation>
    )
  }
}

export default Heroes
