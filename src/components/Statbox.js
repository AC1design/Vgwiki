import React from 'react'
import '../components/Statbox.css'
import H2 from './TalentH2Color'
import "animate.css/animate.min.css";

const Statbox = props => (
	<div className="Statbox">
			<h3 style={{ display: 'flex', flexDirection: 'column' }}>{props.value.split('-')[0]}
				<span style={{ color: "#ffffff60", fontSize: '14px', marginTop: '6px' }}>-{props.value.split('-')[1]}</span>
			</h3>
		<H2 color={props.color}> {props.title} </H2>
	</div>
)

export default Statbox