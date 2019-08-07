import { combineReducers } from 'redux'
import playerStats from './playerStats'
import playerVehicles from './playerVehicles'

const statsReducer = combineReducers({
  playerStats,
  playerVehicles,
})

export default statsReducer
