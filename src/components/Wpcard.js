import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



const MediaControlCard = props => (
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
      <img src={props.image} style={{
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
        <Typography component="h5" variant="h5" style={{ color: "white", width: '100px', fontSize:'22px' }}>
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
)
  
export default MediaControlCard
