import { Action } from '../types/core'
import { isType } from '../utils/actions'
import { itemLoading, itemReceiveData } from '../actions/item'
import { ItemState } from '../types/item'

export const defaultState: ItemState = {
  loading: false,
  itemData: null
}

const itemReducer = (state: ItemState = defaultState, action: Action<any>): ItemState => {
  if (isType(action, itemLoading)) {
    return {
      ...state,
      loading: action.data
    }
  }

  if (isType(action, itemReceiveData)) {
    return {
      ...state,
      loading: false,
      itemData: action.data
    }
  }

  return state
}

export default itemReducer
