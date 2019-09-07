import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'

const Link = styled.a`
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
}
  `
const Card = styled.img`
width: 338px;
height: 120px;
border-radius: 10px;
margin-right: 16px
margin-bottom: 16px;
}
  `
const MediaControlCard = props => (
  <Link href={props.link}>
    <Card src={props.image}></Card>
  </Link>
)
  
export default MediaControlCard
