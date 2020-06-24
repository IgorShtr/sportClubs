import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../common/stateContext';

export const NavyBtn = () => {

  const { isActive, toggleActive } = useContext(StateContext); 
  return (

    <HeaderMenu
      onClick={() => toggleActive()}>
      <OpenMenu
        className={isActive ? "active" : ""}>
        <Bar />
        <Bar />
      </OpenMenu>  
    </HeaderMenu>

  )
}

const HeaderMenu = styled.div`
display:flex;
align-self: flex-end;
cursor: pointer;
& p{
  margin:0;
  font-weight: 500;
  font-size: 20px;
  color: #ABABAB;

}
`
const OpenMenu = styled.div`
width: 28px;
height: 28px;
// background: darkgrey;
border: solid 1px  darkgrey;
border-radius: 10%;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
justify-content: center;
align-items: center;
margin-right: 10px;
transition: all 0.3 ease-in-out;
span {
  transition: all 0.3s ease-in-out;
}

&.active {
  span:first-child {
    transform: rotate(45deg) translate(2px, 2px);
  }
  span:last-child {
    transform: rotate(-45deg) translate(2px,-3px);
  }
}
`
const Bar = styled.span`
width: 20px;
height: 2px;
margin: 2px;
background: darkgrey;
border-radius: 2px;
`