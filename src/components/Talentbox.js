import React from 'react'
import 'animate.css/animate.min.css'
import '../components/Talentbox.css'

const Talentbox = props => (
  <div className="Talentbox" animateIn="fadeInRight" animateOnce>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '-10px'
    }}>
      <img src={require(`./../images/Talents/${props.heroname}_${props.type}.png`)} alt={props.title} />
      <div>
    <h1>{props.title}</h1>
    <h2 
      style={{
        color:
          props.subtitle === "RARE"
            ? "#6393F9"
            : props.subtitle === "EPIC"
              ? "#c78cff"
              : "#FF9000",
        background:
          props.subtitle === "RARE"
            ? "#6393F940"
            : props.subtitle === "EPIC"
              ? "#c78cff40"
              : "#FF900040",
          }}> {props.subtitle} </h2>
      </div>
    </div>
    {props.text.map((text, index) => (
      <p style={{
        marginTop: '-5px'}} key={index}>{text}</p>
    ))}
  </div>
)

export default Talentbox
