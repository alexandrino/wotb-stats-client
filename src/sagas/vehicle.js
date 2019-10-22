import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../api'

function* fetchPlayerStats({ vehicleId }) {
  const { REACT_APP_PLAYER_ID: playerId } = process.env

  try {
    const id = `${playerId}-${vehicleId}`
    const stats = yield call(api.fetchVehicleStats, id)
    yield put({ type: 'GET_VEHICLE_STATS_SUCCESS', stats })
  } catch (error) {
    yield put({ type: 'GET_VEHICLE_STATS_ERROR', message: error.message })
  }
}

function* vehicleStatsSaga() {
  yield takeEvery('GET_VEHICLE_STATS_START', fetchPlayerStats)
}


export default vehicleStatsSaga
