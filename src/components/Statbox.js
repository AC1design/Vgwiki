import React from 'react'
import '../components/Statbox.css'
import H2 from './TalentH2Color'

const Statbox = props => (
	<div className="Statbox">
	    <h3>{props.value}</h3>
		<H2 color={props.color}> {props.title} </H2>
	</div>
)

export default Statbox