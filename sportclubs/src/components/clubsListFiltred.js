import React, {useState, useEffect, useLayoutEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const ClubsListFiltered = props =>{
const [clubsList, setClubsList] = useState([]);
const clubs = useSelector(state =>state.sportClubs.availableClubs);
const activeCity = useSelector(state =>state.sportClubs.activeCity);
const activeActivity = useSelector(state =>state.sportClubs.activeActivity);

// useLayoutEffect(()=>{
//   setClubsList(clubs)
// },[])

console.log(activeCity, activeActivity , clubsList) 

useEffect(()=>{
  const filteredBySity =       clubs.filter(it=>{
     const {title} =  it.city;   
   if (title === activeCity){
     return it
   }
  }
  )

const filtered = activeActivity ?  (filteredBySity.length ? filteredBySity : clubs).filter((club)=>{  
  const availableItemActivity = club.activity.map(({slug})=>{return slug});
  const includingCheck = availableItemActivity.filter((activity)=>{return (activity===activeActivity)}); 
  return includingCheck.length
}) : filteredBySity;

(filtered.length || filteredBySity.length) ? setClubsList(filtered) : setClubsList(clubs)

}, [activeCity, activeActivity, clubs])


const clubDitails =clubsList.map(({link, logo, title_short})=>{
  
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
  {clubDitails.length ? clubDitails : (<NoClubMessge>Нет такого вида спорта в Вашем городе</NoClubMessge>)}
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
const NoClubMessge = styled.div`
margin: 20px auto;
font-weight: bold;


`
