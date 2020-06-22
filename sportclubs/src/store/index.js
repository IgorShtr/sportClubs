import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sportClubsReduser } from './reduser'

const rootReducer = combineReducers({
  sportClubs: sportClubsReduser,
})
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store;