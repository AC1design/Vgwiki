import React from 'react'
import '../components/Skinbox.css'
import P from '../components/SkinPColor'
import 'animate.css/animate.min.css'

const skinCosts = {
  rare: '599',
  epic: '1199',
  legendary: '2599',
}

const Skinbox = props => (
  <div>
    <div className="Skinbox">
      <h3>{props.title} </h3>
      <img
        src={require(`./../images/Skins/${props.image}.png`)}
        alt={props.title}
      />
      <P color={props.color}> {props.text}</P>
      {props.price || skinCosts[props.text.toLowerCase()] ? (
        <div className="SkinCost">
          <img
            src={require(`./../images/${props.opals ? 'OPALS' : 'ICE'}.png`)}
            alt='opals'
          />
          <span>{props.price || skinCosts[props.text.toLowerCase()]}</span>
        </div>
      ) : null}
    </div>
  </div>
)

export default Skinbox
