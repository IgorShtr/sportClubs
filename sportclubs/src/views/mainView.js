import React, { useState, useLayoutEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Layout} from '../common/layout';
import {ClubsListFiltered} from '../components/clubsListFiltred'

export const MainView = props =>{
const [clubsList, setClubsList] = useState([]);
const [filtredClubList, setFiltredClubList] = useState([])
const [shownItems, setShownItems] = useState(73)

useLayoutEffect(()=>{
  axios
  .get('https://instasport.co/dashboard/api/v1/clubs/')
   .then(result => {     
   console.log(result.data)
    setClubsList(result.data);  
    setFiltredClubList(result.data); 
  })
  .catch(err => {
    console.log(err);
  });
}, [])

const loadMore =()=>{
  (filtredClubList.length > (shownItems + 6)) ? 
  setShownItems(shownItems + 6) : 
  setShownItems (filtredClubList.length)
}
console.log(shownItems , filtredClubList.length, (shownItems != filtredClubList.length))
  return (
    <Layout>
      <Container>
        <div>HI THERE</div>
        <ClubsListFiltered clubsList={filtredClubList.slice(0, shownItems)}/>
       { (shownItems != filtredClubList.length) && <LoadMore onClick={loadMore}>&#187;</LoadMore>}
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