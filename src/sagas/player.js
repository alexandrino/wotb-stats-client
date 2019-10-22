import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../api'

function* fetchPlayerStats() {
  try {
    const stats = yield call(api.fetchPlayerStats, 1033001555)
    yield put({ type: 'GET_PLAYER_STATS_SUCCESS', stats })
  } catch (error) {
    yield put({ type: 'GET_PLAYER_STATS_ERROR', message: error.message })
  }
}

function* fetchPlayerVehicles() {
  try {
    const vehicles = yield call(api.fetchPlayerVehicles, 1033001555)
    yield put({ type: 'GET_PLAYER_VEHICLES_SUCCESS', vehicles })
  } catch (error) {
    yield put({ type: 'GET_PLAYER_VEHICLES_ERROR', message: error.message })
  }
}

function* playerStatsSaga() {
  yield takeEvery('GET_PLAYER_STATS_START', fetchPlayerStats)
}

function* playerVehiclesSaga() {
  yield takeEvery('GET_PLAYER_VEHICLES_START', fetchPlayerVehicles)
}

export {
  playerStatsSaga,
  playerVehiclesSaga,
}
