import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'
const Card = styled.div`

width: 280px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-top:16px;
    outline: none;
    :hover {
	transform: scale(1.1, 1.1);
  box-shadow: 0 8px 36px rgba(255, 188, 21, 0.36);
}
`

const Vgpro = props => (
    <ScrollAnimation animateIn="fadeInRight" animateOnce>
    <a href={"https://vgpro.gg/heroes/" + props.stats}>
        <Card>
            <img src={require('./../images/Group.png')}
                    alt='VGPRO'
                />
        </Card>
        </a>
    </ScrollAnimation>
)

export default Vgpro