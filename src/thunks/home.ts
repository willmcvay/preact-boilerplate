import { Dispatch } from 'redux'
import fetcher from '../utils/fetcher'
import { URLS } from '../constants/api'
import { homeLoading, homeReceiveData } from '../actions/home'
import { HomeItem } from '../reducers/home'

export const homeDataFetch = () => async (dispatch: Dispatch) => {
  try {
    dispatch(homeLoading(true))

    const redditData = await fetcher<HomeItem, undefined>({ url: URLS.react, method: 'GET' })

    if (redditData) {
      return dispatch(homeReceiveData(redditData))
    }

    throw new Error('Error fetching data')
  } catch (err) {
    console.error(err.message)
  }
}
