import { actionCreator } from '../utils/actions'
import ActionTypes from '../constants/action-types'
import { ItemItem } from '../types/item'

export const itemLoading = actionCreator<boolean>(ActionTypes.ITEM_LOADING)
export const itemReceiveData = actionCreator<ItemItem>(ActionTypes.ITEM_RECEIVE_DATA)
