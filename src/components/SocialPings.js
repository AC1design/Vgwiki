import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

const Pingsbox = styled.div`
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: url(${props => props.bg}) no-repeat top center;
  background-size: cover;
  padding: 16px;
  margin-right: 16px;
`
const Namepack = styled.h1`
  color: white;
  font-size: 16px;
`
const Pingsgroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 35px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  justify-content: center;
  text-align: center;
`
const PingImg = styled.img`
  height: 35px;
  filter: drop-shadow(0px 2px 3px #3a3a33);
  -webkit-user-drag: none;
  &:hover {
    transform: scale(2, 2);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 1;
  }
  &:focus {
    transform: scale(2, 2);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 1;
  }
`

const Pings = props => (
  <div className='animated fadeInRight delay-0.4s'>
    <Pingsbox bg={props.bg}>
    <Pingsgroup>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping1}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping2}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping3}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping4}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping5}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping6}  />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping7}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping8}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping9}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping10}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping11}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping12}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping13}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping14}  />
        </ScrollAnimation >
        <ScrollAnimation animateIn="zoomIn" animateOnce>
          <PingImg src={props.ping15}  />
        </ScrollAnimation >
    </Pingsgroup>
    </Pingsbox>
    <Namepack>{props.namepack}</Namepack>
  </div>
)

export default Pings
