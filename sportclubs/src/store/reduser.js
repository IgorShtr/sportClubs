import axios from 'axios';
import {
  availableClubs,
  availableCities,
  availableSports,
  activeCity,
  availableSportsExactcity,
  activeActivity,
  AVAILABLE_CLUBS,
  AVAILABLE_CITIES,
  ACTIVE_CITY,
  ACTIVE_ACTIVITY,
  AVAILABLE_SPORTS,
  AVAILABLE_SPORTS_EXACTCITY,
} from './actions';


const initialState = {
  availableClubs:[],  
  availableCities: [],
  activeCity: [],
  availableSports: [],
  availableSportsExactcity:[], 
  activeActivity: "",
  paginationPage: 1,
  

};

export function sportClubsReduser(store = initialState, { type, payload }) {
  switch (type) {
    case AVAILABLE_CLUBS: {
      return {
        ...store,
        availableClubs: payload
      }
    }
    case AVAILABLE_CITIES: {
      return {
        ...store,
        availableCities:  Array.from(new Set(
          store.availableClubs.map(({city})=>{
          const {title} = city;
          return  title
        })
          ))
      }
    }
     case ACTIVE_CITY: {       
      return {
        ...store,
        activeCity:  payload   
      }
    }
    case ACTIVE_ACTIVITY: {       
      return {
        ...store,
        activeActivity:  payload
      }
    }
    case AVAILABLE_SPORTS: {
      const activitiesArrey =store.availableClubs.map(({activity})=>{
        const slugs = activity.map(({slug})=> {return slug})
       return slugs
       });
       const activities = Array.from(new Set (activitiesArrey.reduce((a,b)=>a.concat(b), [])))
      return {
        ...store,
        availableSports: activities
    
      }
    }
    case AVAILABLE_SPORTS_EXACTCITY: {
      const activitiesArrey =store.activeCity.map(({activity})=>{
        const slugs = activity.map(({slug})=> {return slug})
       return slugs
       });
       const activities = Array.from(new Set (activitiesArrey.reduce((a,b)=>a.concat(b), [])))
      return {
        ...store,
        availableSportsExactcity: activities
    
      }
    }
    default:
      return store;

  }
}

export const setAvailableClubs = () => dispatch => {
  axios
    .get(`https://instasport.co/dashboard/api/v1/clubs/`)
    .then(result => {  
      dispatch(availableClubs(result.data));
      dispatch(availableCities());
      dispatch(availableSports());
    })
    .catch(err => {
      console.log(err);
    });

};



export const setActiveCity = city => dispatch => {
  dispatch(activeCity(city));
}
export const setActiveActivity = (activity) => dispatch => {
  dispatch(activeActivity(activity));
}

export const setAvailableSportsExactcity  = () => dispatch => {
  dispatch(availableSportsExactcity());
}