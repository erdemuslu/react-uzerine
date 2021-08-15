import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cocktailReducer from './cocktail/cocktailReducer'
import cocktailSaga from './cocktail/cocktailSaga'

const INITIAL_STATE = {
  drinks: {}
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  cocktailReducer,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(cocktailSaga)

export default store
