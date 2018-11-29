import React from 'react'
import H2 from './TalentH2Color'
import './../components//Item.css'

const Itemsbox = props => (
	<div className="Itembox">
		<div className="ImageCost">
			<img src={props.itemimg} />
			<div className="Cost">
				<p>{props.cost}</p>
			</div>
		</div>
		<H2 color={props.color}> {props.class} </H2>
		<h3>{props.tier}</h3>
		<h1>{props.itemname}</h1>
		<div className="Tag">
			<h4>{props.tag}</h4>
		</div>
	</div>
)

		
		
		
export default Itemsbox