import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'

const Link = styled.a`
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
	transform: scale(1.1, 1.1);
  box-shadow: 0 10px 80px rgba(0, 0, 0, 0.651);
}
  `
const MediaControlCard = props => (
  <Link href={props.link}>
    <Card style={{
      display: "flex",
    width: "280px",
      height:'100px',
    background: "#2b2b2d",
      borderRadius: '16px'
    }}>
      <CardMedia
        style={{
          display: "flex",
          flexDirection: "column"
        }}
    >
      <img src={props.image} alt={props.text} style={{
        width: '100px',
      }}
      />
    </CardMedia>
      <div style={{
        flex: "1 0 auto",
        color: "white"
      }}>
        <CardContent style={{
          width: 180
        }}>
          <Typography component="h5" variant="h5" style={{ color: "white", width: '100px', fontSize: '22px' }} href={props.link}>
            {props.text}
          </Typography>
          <Typography
            variant="subtitle1"
          style={{ color: "grey", fontSize: '12px' }}
          >
            imgur
          </Typography>
        </CardContent>
      </div>
    </Card>
  </Link>
)
  
export default MediaControlCard
