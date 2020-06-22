import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {mediaMobile} from '../common/mediabrakepoints/mediaBreakPoints'
import {ActionState}  from '../common/stateContext'
// import {connect} from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';



export const Header =props => {
 const navyContent = ["Клубы", "Анонсы", "Блог"]
 const HeaderNavy = navyContent.map((it)=>{
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
      <div>Logo</div>
      <div>Instasport</div>  
    </Logo>
        
      <Navy>
        <NavyItemsList>{HeaderNavy}</NavyItemsList>
        <div>Enter</div>
      </Navy>  
      <NavyMobile>
      <div>Enter</div>
      </NavyMobile>
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
margin-bottom: 20px;
color: lightgrey;
font-size: 18px;
${mediaMobile(  `
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
${mediaMobile(  `
  display: none;
`)}
`
const HeaderNavyItem = styled(NavLink)`
margin-left: 20px;
display: flex;
color: #777;
text-decoration:none;
`

const Logo = styled.div`
display: flex;
`

 const NavyItemsList = styled.div`
 display: flex;
 `

  
 const NavyMobile = styled.div`{
   display:none;
   ${mediaMobile(  `
  display: block;
  div{
    margin-right:20px;
    font-size: 12px;
    color: #777;
  }
`)}
 }`

 