import React from 'react'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flipper'

const HatBox = styled.div`
width: 190px;
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #2B2B2D;
    background-size: cover;
    text-align:center;
`
const NameHat = styled.h1`
color:white;
witht: 180px;
     font-size: 18px;
     margin-bottom: 16px;
`
const MaterialsGroup = styled.div`
 display: grid;
    grid-template-columns: repeat(3, 35px);
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    justify-content: center;
    text-align: center;
    vertical-align:middle;
    padding: 6px;
`

const HatImg = styled.img`
height: 55px;
margin-top: 16px;
filter: drop-shadow(0px 2px 3px #3A3A33);
-webkit-user-drag: none;
`
const MatImg = styled.img`
height: 35px;
filter: drop-shadow(0px 2px 3px #3A3A33);
-webkit-user-drag: none;
border-radius: 100px;
border: 2px solid white;
box-shadow: 0px 0px 10px white;
`

class Hat extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            open: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };


    render() {
        return (
            <ReactCardFlip height='120px' >
                <HatBox onClick={this.handleClick} key="front">
                    <HatImg src={this.props.hat}></HatImg>
                    <NameHat>{this.props.name}</NameHat>
                    </HatBox>
                <HatBox key="back" onClick={this.handleClick}>
                    <NameHat style={{ marginBottom: '5px', textAlign: 'center', marginLeft: '0'}}>Materials</NameHat>
                    <MaterialsGroup style={{marginLeft:'-5px'}}>
                            <MatImg src={this.props.mat1}></MatImg>
                        <MatImg src={this.props.mat2}></MatImg>
                        <MatImg src={this.props.mat3}></MatImg>
                    </MaterialsGroup>
                    <MaterialsGroup style={{padding:'0', marginTop:'-5px'}}>
                        <p style={{ fontSize:'12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px',  color: 'white', padding: '3px'}}>{this.props.qt1}</p>
                        <p style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px', color: 'white', padding: '3px'}}>{this.props.qt2}</p>
                        <p style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.274)', borderRadius: '50px', color: 'white', padding: '3px'}}>{this.props.qt3}</p>
                    </MaterialsGroup>
                    </HatBox>
            </ReactCardFlip>
        )
    }
}

export default Hat

    