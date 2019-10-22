import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import statsReducer from '../reducers'
import {
  playerStatsSaga,
  vehicleStatsSaga,
  playerVehiclesSaga,
} from '../sagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(
    statsReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )

  sagaMiddleware.run(playerStatsSaga)
  sagaMiddleware.run(vehicleStatsSaga)
  sagaMiddleware.run(playerVehiclesSaga)
  return store
}


export default configureStore
