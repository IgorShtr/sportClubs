import React, { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';


import { setAvailableClubs } from '../store/reduser'
import { Layout } from '../common/layout';
import { ClubsListFiltered } from '../components/clubsListFiltred';
import { CitiesSection } from '../components/citiesList';
import { ActivitiesSection } from '../components/activitiesList';
import { NavyDrop } from '../components/navyDrop'
import { ActionState } from '../common/stateContext'


export const MainView = props => {
  const [filtredClubList, setFiltredClubList] = useState([]);
  const [shownItems, setShownItems] = useState(6);
  const [activeCity, setActiveCity] = useState("")
  const dispatch = useDispatch();
  const clubs = useSelector(state => state.sportClubs.availableClubs);

  useLayoutEffect(() => {
    dispatch(setAvailableClubs());
  }, [])


  const loadMore = () => {
    (filtredClubList.length > (shownItems + 6)) ?
      setShownItems(shownItems + 6) :
      setShownItems(filtredClubList.length)
  }


  return (
    <Layout>
      <Container>
        <Slogan>
          <p>Для записи на тренировку теперь достаточно пару касаний!</p>
          <p>-Instasport</p>
        </Slogan>
        <ActionState>
          <CitiesSection setActiveCity={setActiveCity} />
          <ActivitiesSection />
          <ClubsListFiltered />
        </ActionState>

      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 85%;
`
const Slogan = styled.div`
margin: 10px auto;
padding: 30px 0;
border-left: solid 5px lightgrey;
p{
  font-family: 'Source Sans Pro', sans-serif;
  text-align: right;
  font-weight: 700;
  color: darkgrey;
}
p:first-child{
  font-size: 12px;
}
p:last-child{
  font-size: 9px;
}
`