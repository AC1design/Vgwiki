import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Bgmodel = styled.div`
  background: linear-gradient(
      -180deg,
      #1f1f21 0%,
      rgba(31, 31, 33, 0) 50%,
      #1f1f21 100%
    ),
    url(${props => props.bgmodel}) no-repeat top center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: hidden;
`
const Model = styled.img`
  vertical-align: middle;
  height: 45vh;
  margin-top: 30px;
  -webkit-user-drag: none;
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
      <Model src={require(`./../images/models/${props.heroname}.jpg`)} />
    </ScrollAnimation>
  </Bgmodel>
)

export default Models
