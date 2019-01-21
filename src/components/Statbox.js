import React from 'react'
import '../components/Statbox.css'
import H2 from './TalentH2Color'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Statbox = props => (
	<ScrollAnimation animateIn="fadeInUp" animateOnce>
	<div className="Statbox">
	    <h3>{props.value}</h3>
		<H2 color={props.color}> {props.title} </H2>
	</div>
	</ScrollAnimation>
)

export default Statbox