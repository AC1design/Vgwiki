import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const Card = styled.div`

width: 280px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-top:16px;
    :hover {
	transform: scale(1.1, 1.1);
  box-shadow: 0 10px 80px rgba(0, 0, 0, 0.651);
`

const Vgpro = props => (
    <a href={"https://vgpro.gg/heroes/" + props.stats}>
        <Card>
            <img src={require('./../images/Group.png')}/>
        </Card>
        </a>
)

export default Vgpro