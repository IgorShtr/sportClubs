export const AVAILABLE_CLUBS = "AVAILABLE_CLUBS"

export const availableClubs = payload => ({
  type: AVAILABLE_CLUBS,
  payload
});

export const AVAILABLE_CITIES = "AVAILABLE_CITIES"

export const availableCities = () => ({
  type: AVAILABLE_CITIES,

});



export const ACTIVE_CITY = "ACTIVE_CITY"

export const activeCity = (payload) => ({
  type: ACTIVE_CITY,
  payload

});

export const ACTIVE_ACTIVITY = "ACTIVE_ACTIVITY"

export const activeActivity = (payload) => ({
  type: ACTIVE_ACTIVITY,
  payload

});


export const AVAILABLE_SPORTS = "AVAILABLE_SPORTS"

export const availableSports = () => ({
  type: AVAILABLE_SPORTS,

});

export const AVAILABLE_SPORTS_EXACTCITY = "AVAILABLE_SPORTS_EXACTCITY"

export const availableSportsExactcity = (payload) => ({
  type: AVAILABLE_SPORTS_EXACTCITY,
  payload,

});