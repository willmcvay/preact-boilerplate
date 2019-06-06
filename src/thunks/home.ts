import { Dispatch } from 'redux'
import fetcher from '../utils/fetcher'
import { URLS } from '../constants/api'
import { homeLoading, homeReceiveData } from '../actions/home'
import { HomeItem } from '../types/home'

export const homeDataFetch = () => async (dispatch: Dispatch) => {
  try {
    dispatch(homeLoading(true))

    const redditData = await fetcher({ url: URLS.react, method: 'GET' })

    if (redditData) {
      dispatch(homeReceiveData(redditData as HomeItem))
    }
  } catch (err) {
    console.error(err.message)
  }
}
