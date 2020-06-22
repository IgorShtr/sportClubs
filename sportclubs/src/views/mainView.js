import React, { useState, useLayoutEffect, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {  useDispatch, useSelector } from 'react-redux';
import {setAvailableClubs} from '../store/reduser'
import {Layout} from '../common/layout';
import {ClubsListFiltered} from '../components/clubsListFiltred';
import {CitiesSection} from '../components/citiesList';
import {ActivitiesSection} from '../components/activitiesList'


export const MainView = props =>{
const [filtredClubList, setFiltredClubList] = useState([]);
const [shownItems, setShownItems] = useState(6);
const [activeCity, setActiveCity] = useState("")
const dispatch = useDispatch();  
const clubs = useSelector(state =>state.sportClubs.availableClubs);

useLayoutEffect(()=>{
    dispatch(setAvailableClubs()); 
}, [])


console.log(shownItems , filtredClubList.length, (shownItems != filtredClubList.length), filtredClubList)

const loadMore =()=>{
  (filtredClubList.length > (shownItems + 6)) ? 
  setShownItems(shownItems + 6) : 
  setShownItems (filtredClubList.length)
}


  return (
    <Layout>
      <Container>
        <CitiesSection setActiveCity={setActiveCity}/>
        <ActivitiesSection/>
        <ClubsListFiltered clubsList={[]}/>
       { (shownItems !== filtredClubList.length) && <LoadMore onClick={loadMore}>Load more;</LoadMore>}
      </Container>
    </Layout>
  )
}

 const Container = styled.div`
  margin: 0 auto;
  width: 85%;
 `
 const LoadMore = styled.button`
width: 40px;
margin: 0;
font-size: 36px;
text-align: center;
`