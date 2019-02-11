import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Bgmodel = styled.div`
background: linear-gradient(-180deg, #1F1F21 0%, rgba(31,31,33,0.00) 50%, #1F1F21 100%),  url(${props => props.bgmodel}) no-repeat top center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: hidden;
`
const Model = styled.img`
vertical-align: middle;
height: 45vh;
    margin-top: 30px;
    @media (max-width:480px) {
      vertical-align: middle;
    }
     @media only screen and (min-device-width : 319px)
and (max-device-width : 1024px)
and (orientation : landscape) {
  height: 85vh;
}
`

const Models = props => (
    <Bgmodel bgmodel={props.bgmodel}>
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={2}>
    <Model src={props.model}></Model>
    </ScrollAnimation>
    </Bgmodel>
    
)


export default Models