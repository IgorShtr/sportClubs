import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { mediaMobile } from '../common/mediabrakepoints/mediaBreakPoints';
import { StateContext } from '../common/stateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const NavyDrop = props => {
  const { headerNavy } = props;
  const { isActive, toggleActive } = useContext(StateContext);

  console.log(isActive)
  return (
    isActive ? (
      <DropNavyMobile open={isActive ? true : false} className={isActive ? "active" : ""}>
        <DropNavyContent>
          <NavyItems>{headerNavy}</NavyItems>
          <SignIn>
            <FontAwesomeIcon icon={faSignInAlt} />
            <div> Enter</div>
          </SignIn>
        </DropNavyContent>
      </DropNavyMobile>) :
      null
  )
}

const DropNavyMobile = styled.div`
// width: 100vw;
min-height: 200px;
background-color: #f8f8f8;
overflow-x: auto;
top: 53px;
left:0;
 position: fixed;
 transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
 ${props =>
    props.open &&
    css`
  transform: translateX(0);
  `}

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