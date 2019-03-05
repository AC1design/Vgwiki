import React from 'react'
import styled from 'styled-components'

const Pingsbox = styled.div`
width: 300px;
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: url(${props => props.bg}) no-repeat top center;
    background-size: cover;
`
const Namepack = styled.h1`
color:white;
     font-size: 18px;
     margin:25px;
     text-shadow: 0 2px 6px rgb(0, 0, 0);
`
const Pingsgroup = styled.div`
 display: grid;
    grid-template-columns: repeat(5, 35px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    justify-content: center;
    text-align: center;
    padding-bottom: 20px
`
const PingImg = styled.img`
height: 35px;
filter: drop-shadow(0px 2px 3px #3A3A33);
&:hover{
     transform: scale(2, 2);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
&:focus{
     transform: scale(2, 2);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
`

const Pings = props => (
    <Pingsbox bg={props.bg}>
        <Namepack>{props.namepack}</Namepack>
        <Pingsgroup>
            <PingImg src={props.ping1}></PingImg>
            <PingImg src={props.ping2}></PingImg>
            <PingImg src={props.ping3}></PingImg>
            <PingImg src={props.ping4}></PingImg>
            <PingImg src={props.ping5}></PingImg>
            <PingImg src={props.ping6}></PingImg>
            <PingImg src={props.ping7}></PingImg>
            <PingImg src={props.ping8}></PingImg>
            <PingImg src={props.ping9}></PingImg>
            <PingImg src={props.ping10}></PingImg>
            <PingImg src={props.ping11}></PingImg>
            <PingImg src={props.ping12}></PingImg>
            <PingImg src={props.ping13}></PingImg>
            <PingImg src={props.ping14}></PingImg>
            <PingImg src={props.ping15}></PingImg>
            </Pingsgroup>
    </Pingsbox>

)

export default Pings