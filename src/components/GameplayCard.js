import React from 'react'
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
    :hover {
	transform: scale(1.1, 1.1);
}
`
const Image = styled.img`
height: 100%;
	position: absolute;
	top: 0;
	z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`
const Title = styled.h3`
position:absolute;
color: rgb(255, 255, 255);
	font-size: 28px;
    bottom: 0;
    margin-left: 20px;
    width: 190px;
    text-shadow:2px 2px 20px black;
`




const GPCard = props => (
    <div>
    <div className="Selectan">
        <h1>Gameplay (Coming Soon)</h1>
        </div>
        <div className='CardboxGroupScroll'>
    <div className='CardboxGroup'>
        <Card>
            <Image src={require('./../images/Card.png')} />
            <Title>3v3</Title>
        </Card>
        <Card>
            <Image src={require('./../images/Card5v5.png')} />
            <Title>5v5</Title>
        </Card>
            </div>
        </div>
    </div>
)

export default GPCard
