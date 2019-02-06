import React from 'react'
import './Frame.css'

const Frames = props => (
                    <a href={props.link}> 
<img className='farmesgrid' style={{ overflow: 'visible' }} src={props.image}></img>
          </a>     
               
)

export default Frames