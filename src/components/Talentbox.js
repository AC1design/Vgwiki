import React from 'react'
import '../components/Talentbox.css'
import H2 from './TalentH2Color'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const Talentbox = props => (
  <ScrollAnimation className="Talentbox" animateIn="fadeInRight" animateOnce>
    {console.log(props.image)}
    <img src={require(props.image)} alt={props.title} />
    <h1>{props.title}</h1>
    <H2 color={props.color}> {props.subtitle} </H2>
    {props.text.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </ScrollAnimation>
)

export default Talentbox
