import axios from 'axios';
import {
  availableClubs,
  availableCities,
  availableSports,
  activeCity,
  AVAILABLE_CLUBS,
  AVAILABLE_CITIES,
  ACTIVE_CITY,
  AVAILABLE_SPORTS
} from './actions';


const initialState = {
  availableClubs:[],  
  availableCities: [],
  activeCity: [],
  availableSports: [],
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
        activeCity:  store.availableClubs.filter(it=>{    
          const {title} =  it.city;   
         if (title === payload){
           return it
         }
        }
        )
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
export const setAvailableSports = () => dispatch => {
  dispatch(availableSports());
}