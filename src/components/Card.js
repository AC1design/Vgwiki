import React from 'react'
import './Card.css'
import 'animate.css/animate.min.css'
import { Link } from 'gatsby'
import styled from 'styled-components'


const Cardbox = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Cards = styled.div`

    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
width: 150px;
    height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
  margin-bottom: 16px;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: url(${props => (props.reduce ? props.bg2 : props.bg)}) left center no-repeat;
    ${props => (props.reduce ? 'width: 70px;' : '')}
    ${props => (props.reduce ? 'height: 70px;' : '')}
    ${props => (props.reduce ? 'background-size: contain;' : '')}
    background-size: cover;
    background-position-x: 80%;
`

const Name = styled.h3`
	color: rgb(255, 255, 255);
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 0px;
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
    ${props => (props.hidden ? 'visibility: hidden;' : '')}
`

const Role = styled.p`
${props => (props.hidden ? 'visibility: hidden;' : '')}
	text-transform: uppercase;
    font-weight: 600;
    font-size: 10px;
    margin-top: 6px;
    opacity: 0.7;
`
const Type = styled.img`
${props => (props.showrole ? 'visibility: hidden;' : '')}
position: absolute
width: 30px;
height: 30px;
z-index: 1;
top: -10px;
right: -10px;
overflow: visible;
`

const Card = props => (
  <Link to={props.link}>
    <Cardbox
        className="animated fadeInRight delay-0.4s">
      <Cards
        reduce={props.hideNameAndRole}
        bg={props.image}
        bg2={props.image2}
      />
      <div>
        <div>
        <Name hidden={props.hideNameAndRole}>{props.title}</Name>
          <Type showrole={props.showRole} src={props.roleimg}></Type>
    </div>
        <Role hidden={props.hideNameAndRole}>{props.text}</Role>
      </div>
    </Cardbox>
  </Link>
)

export default Card

/*
const Cardbox = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Card = styled.div`
	width: 150px;
    height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
  margin-bottom: 16px;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`

const Name = styled.h3`
	color: rgb(255, 255, 255);
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 0px;
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
`

const Role = styled.p`
	text-transform: uppercase;
    font-weight: 600;
    font-size: 10px;
    margin-top: 6px;
    opacity: 0.7;
`
const Card = props => (
<Link to={props.link}>
        <Cardbox>
            <Card" bgdesktop={require(`./../images/Cards/${
            this.props.title
          }.png`)}>
    <CardText>
        <Name>{props.title}</Name>
      <Role>{props.text}</Role>
            </CardText>
        </Cardbox>
    </Link>
)

export default Card
*/