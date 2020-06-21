import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
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
    <Logo>
      <div>Logo</div>
      <div>Instasport</div>  
    </Logo>
        
      <Navy>
        <NavyItemsList>{HeaderNavy}</NavyItemsList>
        <div>Enter</div>
      </Navy>  

   
  </HederContainer>  

    </>
  )
};

const HederContainer = styled.div`
min-height: 50px;
display: flex;
align-items: center;
background-color: #f8f8f8;
border-color: #e7e7e7;
margin-bottom: 20px;
color: lightgrey;
font-size: 18px;
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

`
const HeaderNavyItem = styled(NavLink)`
margin-left: 20px;
display: flex;
color: #777;
// line-height: 20px;
text-decoration:none;
`

const Logo = styled.div`
display: flex;
`

 const NavyItemsList = styled.div`
 display: flex;
 `

 