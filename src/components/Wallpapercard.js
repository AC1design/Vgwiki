import React from 'react'
import './Card.css'
import 'animate.css/animate.min.css'

const WPCard = props => (
        <div className="Card">
        <a href={props.link}>
            <h1>props.nome</h1>
            <img src={props.image} alt={props.text} />
            <div className='imgurgr'></div>
            <img style={{width: 'auto', height:'30px', marginTop: '180px', right: '16px', position: 'absolute', zIndex:'1'}} src={require('../images/imgur-logo.png')} alt={props.text} />
            </a>
        </div>
)

export default WPCard