import React from 'react';

import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar1 = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContCent = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const SpanCent = styled.div `
  cursor: pointer;
  margin-right: 5%;
`;

const ContLeft = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const ContRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContMain = styled.div `
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const TippyTop = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;


const TopBar = () => {
  return (
    <TippyTop>

      <ContMain>

        <ContLeft>
          <SpanCent>TOPICS</SpanCent><SpanCent>SEARCH</SpanCent>
        </ContLeft>

        <ContCent>
          <SpanCent>GENERAL</SpanCent><SpanCent>BROWNBAG</SpanCent><SpanCent>RANDOM</SpanCent><SpanCent>MUSIC</SpanCent><SpanCent>ANNOUNCEMENTS</SpanCent>
        </ContCent>

        <ContRight>
          <SpanCent>LOG IN</SpanCent>
        </ContRight>

      </ContMain>

    </TippyTop>
  )
}

export default TopBar;