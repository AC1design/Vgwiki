import React from 'react'
import '../components/Talentbox.css'
import H2 from './TalentH2Color'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Talentbox = props => (
  <ScrollAnimation className="Talentbox" animateIn="fadeInRight" animateOnce>
    <img src={props.image} alt={props.title} />
    <h1>{props.title}</h1>
    <H2 color={props.color}> {props.subtitle} </H2>
    <p>{props.text}</p>
    <p>{props.text2}</p>
    <p>{props.text3}</p>
    <p>{props.text4}</p>
    <p>{props.text5}</p>
  </ScrollAnimation>
)

export default Talentbox
