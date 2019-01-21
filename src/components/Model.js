import React from 'react'
import styled from 'styled-components'


const Bgmodel = styled.div`
background: linear-gradient(-180deg, #1F1F21 0%, rgba(31,31,33,0.00) 50%, #1F1F21 100%),  url(${props => props.bgmodel}) no-repeat top center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: hidden;
`
const Model = styled.img`
vertical-align: middle;
height: 45vh;
    margin-top: 30px;
    @media (max-width:480px) {
      vertical-align: middle;
    }
`

const Models = props => (
    <Bgmodel bgmodel={props.bgmodel}>
    <Model src={props.model}></Model>
    </Bgmodel>
)


export default Models