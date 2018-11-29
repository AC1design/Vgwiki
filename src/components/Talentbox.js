import React from 'react'
import '../components/Talentbox.css'
import H2 from './TalentH2Color'

const Talentbox = props => (
	<div className="Talentbox">
		<img src={props.image} />
		<h1>{props.title}</h1>
		<H2 color={props.color}> {props.subtitle} </H2>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
		<p>{props.text4}</p>
		<p>{props.text5}</p>
	</div>
)

export default Talentbox