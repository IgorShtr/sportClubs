import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveActivity } from '../store/reduser';

export const ActivitiesSection = props => {

  const dispatch = useDispatch();
  const availableActivitiesAll = useSelector(state => state.sportClubs.availableSports);
  const availableActivitiesExectCity = useSelector(state => state.sportClubs.availableSportsExactcity);
  const activeActivity = useSelector(state => state.sportClubs.activeActivity);

  const setActive = (e) => {
    const chosenActivity = e.target.getAttribute('data-name');
    dispatch(setActiveActivity(chosenActivity))
  }


  const activities = (availableActivitiesExectCity.length ? availableActivitiesExectCity : availableActivitiesAll).map((activity) => {
    const isActive = (activity === activeActivity) ? true : false;
    return (
      <ActivityItem key={uuidv4()} data-name={activity} onClick={setActive} isActive={isActive}>
        {activity}
      </ActivityItem>
    )
  })


  return (
    <Activities>
      <ActivityList>
        {activities}
      </ActivityList>
      <ResetBtn onClick={() => dispatch(setActiveActivity(""))}>
        Reset activities
          </ResetBtn>
    </Activities>



  )
}

const Activities = styled.div`

`
const ActivityItem = styled.div`
font-size: 14px;
font-family: 'Source Sans Pro', sans-serif;
padding: 7px;
margin: 3px;
cursor: pointer;
box-sizing: border-box;
border-radius: 5px;
border: solid 0.3px grey;
background-color:${props => props.isActive ? "lightgrey" : "none"};
:hover{
  background-color: lightgrey;
}
`;

const ActivityList = styled.div`
border-top: 1px solid grey;
padding-top: 15px;
display: flex;
flex-wrap: wrap;
`;

const ResetBtn = styled.div`
margin: 20px auto;
width: fit-content;
box-sizing: border-box;
border-radius: 5px;
border: solid 0.3px black;
padding: 7px;
cursor: pointer;
color:darkgrey;
`