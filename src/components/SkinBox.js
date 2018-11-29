import React from 'react'
import '../components/Skinbox.css'
import P from '../components/SkinPColor'

const Skinbox = props => (
	<div className="Skinbox">
		  <img src={props.image}/> 
		  <h3>{props.title} </h3>
		  <P color={props.color}> {props.text} </P>
	</div>
)

export default Skinbox

