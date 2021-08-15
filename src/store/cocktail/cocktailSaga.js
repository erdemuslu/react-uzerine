import { call, put, takeEvery } from 'redux-saga/effects'
import { getCocktailList } from '../../service'
import { getCocktailRequestSuccess } from './cocktailAction'

function* fetchData() {
  try {
    const data = yield call(getCocktailList)
    yield put(getCocktailRequestSuccess(data))
  } catch (err) {
    console.log('err', err)
  }
}

export default function* cocktailSaga() {
  yield takeEvery('GET_COCKTAIL_REQUEST', fetchData)
}
