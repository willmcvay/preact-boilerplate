import fetcher from '../utils/fetcher'
import { URLS } from '../constants/api'
import { homeLoading, homeReceiveData } from '../actions/home'
import { HomeItem } from '../reducers/home'
import { put, call, fork, take, all } from '@redux-saga/core/effects'
import ActionTypes from '../constants/action-types'

export const homeDataFetch = function*() {
  yield take(ActionTypes.HOME_REQUEST_DATA)
  yield put(homeLoading(true))

  try {
    const redditData: HomeItem | undefined = yield call(() =>
      fetcher<HomeItem, undefined>({ url: URLS.react, method: 'GET' })
    )

    if (redditData) {
      return yield put(homeReceiveData(redditData))
    }

    throw new Error('Error fetching data')
  } catch (err) {
    console.error(err.message)
  }
}

const homeSagas = function*() {
  yield all([fork(homeDataFetch)])
}

export default homeSagas
