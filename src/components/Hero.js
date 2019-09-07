import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'
import 'animate.css/animate.min.css'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${props => props.bgdesktop}) no-repeat top center;
  height: 100vh;
    background-size: cover !important;
  border-radius: 0px 0px 26px 26px;

  @media (max-width: 1024px) {
    background: url(${props => props.bgtablet}) no-repeat center top;
  }
  @media (max-width: 480px) {
    background: url(${props => props.bgmobile}) no-repeat center top;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 812px) and (orientation: landscape) {
    background: url(${props => props.bgdesktop}) no-repeat top center;
    height: 400px;
  }
`
const HeroGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 150px 0px;
  display: flex;
  -webkit-font-smoothing: antialiased;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;

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
    padding: 70px 0px;
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
    text-shadow: 0 5px 10px rgba(0,0,0,1);
    font-weight: 600;
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
 border: none;
      height: 35px;
      background: #1f1f21;
      color: white;
      font-weight: 600;
      cursor: pointer;
      outline: none;
      margin: 10px;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);}
    border-radius: 50px;
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
      <div>
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
      </div>
    )
  }
}

export default Heroes
