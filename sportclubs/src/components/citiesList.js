import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCity } from '../store/reduser';

export const CitiesSection = props => {

  const dispatch = useDispatch();
  const availableCities = useSelector(state => state.sportClubs.availableCities);
  const chosenCity = useSelector(state => state.sportClubs.activeCity);


  const setActive = (e) => {
    const chosenCity = e.target.getAttribute('data-name');
    dispatch(setActiveCity(chosenCity))
  }


  const cities = availableCities.map((city) => {
    const isActive = (city === chosenCity) ? true : false;
    return (
      <CityItem key={uuidv4()} data-name={city} onClick={setActive} isActive={isActive}>
        {city}
      </CityItem>
    )
  })


  return (
    <CitiesList>
      {cities}
    </CitiesList>
  )
}

const CityItem = styled.div`
font-size: 16px;
font-family: 'Source Sans Pro', sans-serif;
padding: 7px;
margin: 3px;
cursor: pointer;
box-sizing: border-box;
border-radius: 0.5px;
border: ${props => props.isActive ? "solid 0.3px grey" : "solid 0.5px white"};
border-bottom: none;
:hover{
  background-color: lightgrey;
}
`
const CitiesList = styled.div`
display: flex;
flex-wrap: wrap;
`