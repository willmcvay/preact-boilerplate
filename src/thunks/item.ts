import { Dispatch } from 'redux'
import fetcher from '../utils/fetcher'
import { URLS } from '../constants/api'
import { itemLoading, itemReceiveData } from '../actions/item'
import { ItemItem } from '../types/item'

export const itemDataFetch = () => async (dispatch: Dispatch) => {
  try {
    dispatch(itemLoading(true))

    const redditData = await fetcher({ url: URLS.node, method: 'GET' })

    if (redditData) {
      dispatch(itemReceiveData(redditData as ItemItem))
    }
  } catch (err) {
    console.error(err.message)
  }
}
