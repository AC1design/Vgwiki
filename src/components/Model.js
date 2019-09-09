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
  border-radius: 26px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 480px){
   background: url(${props => props.bgmodel}) no-repeat top center;
   background-repeat: no-repeat;
  background-size: cover;
  margin: 16px;
  }
`
const Model = styled.img`
  vertical-align: middle;
  height: 40vh;
  -webkit-user-drag: none;
  overflow: visible;
  @media (max-width: 480px) {
    vertical-align: middle;
    width: 300px;
    height: 100%;
  }
  @media only screen and (min-device-width: 319px) and (max-device-width: 1024px) and (orientation: landscape) {
    height: 85vh;
  }
`

const Models = props => (
  <Bgmodel bgmodel={require(`./../images/BG/${props.heroname}blurred.jpg`)}>
      <Model src={require(`./../images/models/${props.heroname}.png`)} />
  </Bgmodel>
)

export default Models
