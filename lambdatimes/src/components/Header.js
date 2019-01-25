import React from 'react';

import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import { injectGlobal } from "styled-components";


injectGlobal`
  body {
    @import url('https://fonts.googleapis.com/css?family=Anton');
    font-family: 'Anton', sans-serif;

    @import url('https://fonts.googleapis.com/css?family=Monoton');
    font-family: 'Monoton', cursive;
  }
`




const Headdy = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
`;

const JediMindTrick = styled.h1 `
font-size: 60px;
  font-family: Monoton, Anton, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const StarTrekSucks = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
padding: 10px;
`;


const Header = () => {
  return (
    <Headdy>
      <StarTrekSucks>SMARCH 32, 2018</StarTrekSucks>
      <JediMindTrick>Lambda Times</JediMindTrick>
      <StarTrekSucks>98°</StarTrekSucks>
    </Headdy>
  )
}

export default Header