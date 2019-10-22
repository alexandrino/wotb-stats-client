import { combineReducers } from 'redux'
import playerStats from './playerStats'
import playerVehicles from './playerVehicles'
import vehicleStats from './vehicleStats'

const statsReducer = combineReducers({
  playerStats,
  vehicleStats,
  playerVehicles,
})

export default statsReducer
