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
      <p style={{
        color:
          props.text === "Rare"
            ? "#0f2046"
            : props.text === "Epic"
              ? "#5c00b3"
              : props.text === "Legendary"
                ? "#FF9000"
                : '#690707',
        background:
          props.text === "Rare"
            ? "#6393F995"
            : props.text === "Epic"
              ? "#c78cff90"
              : props.text === "Legendary"
                ? "#FF900060"
                : "#ff2d2de6",
      }}> {props.text}</p>
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
