import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mediaMobile } from '../common/mediabrakepoints/mediaBreakPoints'
import { ActionState } from '../common/stateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { NavyBtn } from '../components/navyBtn';
import { NavyDrop } from '../components/navyDrop';



export const Header = props => {
  const navyContent = ["Клубы", "Анонсы", "Блог"]
  const headerNavy = navyContent.map((it) => {
    return (
      <HeaderNavyItem to="#" key={uuidv4()}>
        {it}
      </HeaderNavyItem>
    )
  })
  return (<>
    <HederContainer>
      <ActionState>
        <Logo>
          <FontAwesomeIcon icon={faCheck} />
          <div>Instasport</div>
        </Logo>

        <Navy>
          <NavyItemsList>{headerNavy}</NavyItemsList>
          <SignIn>
          <FontAwesomeIcon icon={faSignInAlt}/>
            <div> Enter</div>
          </SignIn>
        </Navy>
        <NavyMobile>
          <NavyBtn />
        </NavyMobile>
        <NavyDrop headerNavy={headerNavy} />
      </ActionState>

    </HederContainer>

  </>
  )
};

const HederContainer = styled.div`
position: fixed;
top:0;
left:0;
width: 100vw;
min-height: 50px;
display: flex;
align-items: center;
background-color: #f8f8f8;
border-color: #e7e7e7;
border-top: solid 0.5px grey;
border-bottom: solid 0.5px grey;
margin-bottom: 20px;
color: lightgrey;
font-size: 18px;
${mediaMobile(`
  justify-content: space-between;
`)}
`
const Navy = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-grow:1;
font-size: 12px;
color: #777;
div:last-child{
  margin-right:20px;
}
${mediaMobile(`
  display: none;
`)}
`
const HeaderNavyItem = styled(NavLink)`
margin-left: 20px;
display: flex;
color: #777;
text-decoration:none;
:hover{
  color:black;
}
${mediaMobile(`
 padding: 10px;
`)}
`

const Logo = styled.div`
display: flex;
margin-left:15px;
`

const NavyItemsList = styled.div`
 display: flex;
 `


const NavyMobile = styled.div`
   display:none;
   ${mediaMobile(`
  display: block;
  div{
    margin-right:20px;
    font-size: 12px;
    color: #777;
  }
`)}
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

