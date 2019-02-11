import React from 'react'
import './HeroFrames.css'
import 'animate.css/animate.min.css'
import { Link } from 'gatsby'

const Frames = props => (
  <Link to={`Hero/?${props.link}`} className="animated zoomIn">
    <div className="role">
      <img src={props.roleimg} alt={props.roleimg} />
    </div>
    <img
      className="framesgrid"
      style={{ overflow: 'visible' }}
      src={props.image}
      alt={props.image}
    />
  </Link>
)

export default Frames
