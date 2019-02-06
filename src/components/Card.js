import React from 'react'
import './Card.css'
import 'animate.css/animate.min.css'
const Card = props => (
  <span>
    <div className="Card">
      <a href={props.link}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </a>
    </div>
  </span>
)

export default Card
