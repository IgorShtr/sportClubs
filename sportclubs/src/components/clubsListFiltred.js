import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
// import {connect} from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const ClubsListFiltered = props =>{
const {clubsList}=props;
const clubDitails =clubsList.map(({link, logo, title_short})=>{
  console.log(link)
return (
  <ClubItemData>
      <ClubLogoLink key={uuidv4()} to={link}>  
      <img src={logo} alt="not found"></img>    
  </ClubLogoLink>
   <div>{title_short}</div> 
  </ClubItemData>
    
)

})
return (
  <ClubListStyles>
  {clubDitails}
  </ClubListStyles>
)
}

const ClubListStyles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const ClubItemData = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
width: fit-content;
margin: 10px;
div:last-child{
  color: #333;
  font-size: 14px;
}
`
const ClubLogoLink = styled(NavLink)`
margin: 15px;
text-decoration:none;
margin:0;
margin-bottom: 10px;
width: fit-content;
img{
  width: 205px;
  height: 205px;
}
`
