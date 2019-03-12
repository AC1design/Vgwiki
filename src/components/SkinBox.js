import React from 'react'
import '../components/Skinbox.css'
import P from '../components/SkinPColor'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const skinCosts = {
  rare: '',
  epic: '',
  legendary: '',
};

const Skinbox = props => (
  <ScrollAnimation animateIn="fadeInRight" animateOnce>
    <div className="Skinbox">
      <img src={require(`./../images/Skins/${props.image}.png`)} alt={props.title} />
      <h3>{props.title} </h3>
      <P color={props.color}> {props.text} </P>
    </div>
  </ScrollAnimation>
)

export default Skinbox
