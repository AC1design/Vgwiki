import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Bgmodel = styled.div`
  background:
    url(${props => props.bgmodel}) no-repeat top center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: hidden;
  margin: 16px;
  border-radius: 26px;
  overflow: visible;
`
const Model = styled.img`
  vertical-align: middle;
  height: 40vh;
  margin-top: -30px;
  -webkit-user-drag: none;
  overflow: visible;
  @media (max-width: 480px) {
    vertical-align: middle;
  }
  @media only screen and (min-device-width: 319px) and (max-device-width: 1024px) and (orientation: landscape) {
    height: 85vh;
  }
`

const Models = props => (
  <Bgmodel bgmodel={require(`./../images/BG/${props.heroname}blurred.jpg`)}>
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={2}>
      <Model src={require(`./../images/models/${props.heroname}.png`)} />
    </ScrollAnimation>
  </Bgmodel>
)

export default Models
