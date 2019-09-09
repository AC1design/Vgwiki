import React from "react";
import styled from 'styled-components'

const Link = styled.a`
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
}
  `
const Card = styled.div`
width: 338px;
height: 120px;
border-radius: 10px;
margin-right: 16px
margin-bottom: 16px;
background: url(${props => props.bg});
    background-size: auto auto;
    background-position: right;

display: flex;

    align-items: flex-end;
}
  `

const Title = styled.h1`
font-family: Antonio;
font-weight: 800;
font-size: 30px;
color: #FAFAFA;
letter-spacing: 0;
line-height: 32px;
text-shadow: 0 2px 15px rgba(0,0,0,0.84);
margin: 0px 0px 0px 16px;
  `
const Sub = styled.h2`
font-family: Antonio;
font-weight: 200;
font-size: 30px;
color: #FAFAFA;
letter-spacing: 0;
line-height: 32px;
text-shadow: 0 2px 15px rgba(0,0,0,0.84);
margin: 6px 0px 16px 16px;
`

const MediaControlCard = props => (
  <Link href={props.link}>
    <Card bg={props.image}>
      <div>
        <Title>{props.title}</Title>
        <Sub>Wallpapers</Sub>
      </div>
    </Card>
  </Link>
)
  
export default MediaControlCard
