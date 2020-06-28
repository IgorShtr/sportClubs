import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { StateContext } from '../common/stateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const NavyDrop = props => {
  const { headerNavy } = props;
  const { isActive} = useContext(StateContext);  
  return (
    <DropNavyMobile open={isActive ? true : false} className={isActive ? "active" : ""}>
      <DropNavyContent>
        <NavyItems>{headerNavy}</NavyItems>
        <SignIn>
          <FontAwesomeIcon icon={faSignInAlt} />
          <div> Enter</div>
        </SignIn>
      </DropNavyContent>
    </DropNavyMobile>

  )
}

const DropNavyMobile = styled.div`
min-height: 200px;
background-color: #f8f8f8;
overflow-x: auto;
top: ${props => props.open ? "53px" : "-200px"}; 
left:0;
 position: absolute;
 z-index:2; 
 transition-property: top;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  z-index:1;
`
const DropNavyContent = styled.div`
 padding-top: 10px;
  height: 150px;
  width: 100vw;
  color: #777; 
  font-size: 14px; 
`
const NavyItems = styled.div`
font-size: 12px;
`

const SignIn = styled.div`
display: flex;
align-items: center;
margin-top: 5px;
margin-left: 20px;
cursor:pointer;
>div{ 
  margin-left: 5px; 
}
`