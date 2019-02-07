import React from 'react'
import './Card.css'
import "animate.css/animate.min.css";
import { Link } from "gatsby"

const Card = props => (
	<span>
		<div className="Card" >
	<Link to={props.link}>
			<img src={props.image} />
			<h3>{props.title}</h3>
			<p>{props.text}</p>
			</Link>
	</div>
	</span>
)

export default Card