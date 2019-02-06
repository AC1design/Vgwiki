import React from 'react'
import './Frame.css'
import "animate.css/animate.min.css";

const Frames = props => (
    <a href={props.link} class="animated zoomIn"> 
<img className='farmesgrid' style={{ overflow: 'visible' }} src={props.image}></img>
<div className='role'><img src={props.roleimg}></img></div>
          </a>
)

export default Frames