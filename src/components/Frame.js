import React from 'react'
import './Frame.css'
import 'animate.css/animate.min.css'

const Frames = props => (
  <a href={props.link} class="animated zoomIn">
    <img
      className="farmesgrid"
      style={{ overflow: 'visible' }}
      src={props.image}
      alt="hero icon"
    />
    <div className="Role">
      <img
        className={`RoleImage ${
          props.type.includes('PROTECTOR')
            ? 'yellowCircle'
            : props.type.includes('JUNGLE')
            ? 'greenCircle'
            : 'redCircle'
        }`}
        src={props.roleimg}
        alt="hero icon"
      />
    </div>
  </a>
)

export default Frames
