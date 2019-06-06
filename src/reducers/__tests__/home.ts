import homeReducer, { defaultState } from '../home'
import { ActionType } from '../../types/core'
import ActionTypes from '../../constants/action-types'

describe('home reducer', () => {
  it('should return default state if action not matched', () => {
    const newState = homeReducer(undefined, { type: 'UNKNOWN' as ActionType, data: undefined })
    expect(newState).toEqual(defaultState)
  })

  it('should set loading to true when HOME_LOADING action is called', () => {
    const newState = homeReducer(undefined, { type: ActionTypes.HOME_LOADING as ActionType, data: true })
    const expected = {
      ...defaultState,
      loading: true
    }
    expect(newState).toEqual(expected)
  })

  it('should set home item data when HOME_RECEIVE_DATA action is called', () => {
    const data = {
      name: 'Bob'
    }
    const newState = homeReducer(undefined, { type: ActionTypes.HOME_RECEIVE_DATA as ActionType, data })
    const expected = {
      ...defaultState,
      homeData: data
    }
    expect(newState).toEqual(expected)
  })
})
