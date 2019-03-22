import React, { Component } from 'react';
import AdBlockDetect from 'react-ad-block-detect';
import styled from 'styled-components'

const Overlay = styled.div`
background: #1f1f1fe8;
width: 100%;
height:100%;
position: fixed;
z-index: 100000
overlay: hidden;
`

const Img = styled.img`
width: 320px;
height: auto;
position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
-webkit-user-drag: none;

  @media(max-width:480px) {
  width: 250px;
}
`

const H1 = styled.h1`
font-family: 'Antonio';
  margin: 0 auto;
  font-size: 40px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  text-transform: uppercase;
  text-align:center;
  margin-top: 10%
`

class AdBlockDet extends Component {
    render() {
        return (
            <AdBlockDetect>
                <Overlay>
                    <Img src={require('./../images/addetect.png')}></Img>
                    <H1>AdBlock Detected</H1>
                </Overlay>
            </AdBlockDetect>
        );
    }
}

export default AdBlockDet