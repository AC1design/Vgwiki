import React from 'react'
import styled from 'styled-components'

const HatBox = styled.div`
width: 165px;
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #2b2b2d;
    background-size: cover;
    text-align:center;
    margin: 0px 16px 16px 0px;
`
const NameHat = styled.h1`
color:white;
witht: 180px;
     font-size: 18px;
`
const MaterialsGroup = styled.div`
 display: grid;
    grid-template-columns: repeat(3, 35px);
    grid-column-gap: 8px;
    grid-row-gap: 10px;
    justify-content: center;
    text-align: center;
    vertical-align:middle;
    margin-bottom: 16px;
`

const HatImg = styled.img`
height: 55px;
filter: drop-shadow(0px 2px 3px #3A3A33);
-webkit-user-drag: none;
`
const MatImg = styled.img`
height: 30px;
filter: drop-shadow(0px 2px 3px #3A3A33);
-webkit-user-drag: none;
border-radius: 100px;
border: 2px solid white;
box-shadow: 0px 0px 10px white;
`
const MaterialText = styled.h3`
font-size: 12px;
color: #ffffff40;
margin-bottom: 16px;
`

class Hat extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <HatBox onClick={this.handleClick} className='animated fadeInRight delay-0.4s'>
                    <div style={{ background: '#15151bbf', padding: '16px 16px 6px 16px', overflow: 'visible', borderRadius: '26px 26px 0px 26px'}}>
                    <HatImg src={this.props.hat}></HatImg>
                        <NameHat>{this.props.name}</NameHat>
                    </div>
                    <MaterialText>Materials</MaterialText>
                    <MaterialsGroup style={{ marginBottom: '0px' }}>
                        <MatImg src={this.props.mat1}></MatImg>
                        <MatImg src={this.props.mat2}></MatImg>
                        <MatImg src={this.props.mat3}></MatImg>
                    </MaterialsGroup>
                    <MaterialsGroup>
                        <p style={{ fontSize:'12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px',  color: 'white', padding: '3px'}}>{this.props.qt1}</p>
                        <p style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px', color: 'white', padding: '3px'}}>{this.props.qt2}</p>
                        <p style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px', color: 'white', padding: '3px'}}>{this.props.qt3}</p>
                    </MaterialsGroup>
                </HatBox>
            </div>
        )
    }
}

export default Hat

    