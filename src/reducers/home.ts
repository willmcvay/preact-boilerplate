import { Action } from '../types/core'
import { isType } from '../utils/actions'
import { homeLoading, homeReceiveData } from '../actions/home'
import { HomeState } from '../types/home'

export const defaultState: HomeState = {
  loading: false,
  homeData: null
}

const homeReducer = (state: HomeState = defaultState, action: Action<any>): HomeState => {
  if (isType(action, homeLoading)) {
    return {
      ...state,
      loading: action.data
    }
  }

  if (isType(action, homeReceiveData)) {
    return {
      ...state,
      loading: false,
      homeData: action.data
    }
  }

  return state
}

export default homeReducer
