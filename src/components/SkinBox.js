import React from 'react'
import '../components/Skinbox.css'
import P from '../components/SkinPColor'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const skinCosts = {
  rare: '599',
  epic: '1199',
  legendary: '2599',
}

const Skinbox = props => (
  <ScrollAnimation animateIn="fadeInRight" animateOnce>
    <div className="Skinbox">
      <img
        src={require(`./../images/Skins/${props.image}.png`)}
        alt={props.title}
      />
      <h3>{props.title} </h3>
      <P color={props.color}> {props.text}</P>
      {props.price || skinCosts[props.text.toLowerCase()] ? (
        <div className="SkinCost">
          <img
            src={require(`./../images/${props.opals ? 'OPALS' : 'ICE'}.png`)}
          />
          <span>{props.price || skinCosts[props.text.toLowerCase()]}</span>
        </div>
      ) : null}
    </div>
  </ScrollAnimation>
)

export default Skinbox
