import React from 'react'
import './HeroFrames.css'
import "animate.css/animate.min.css";
import { Link } from "gatsby"

const Frames = props => (
    <Link to={props.link} class="animated zoomIn">
    <div className='role'><img src={props.roleimg}></img></div>
<img className='framesgrid' style={{ overflow: 'visible' }} src={props.image}></img>

          </Link>
)

export default Frames