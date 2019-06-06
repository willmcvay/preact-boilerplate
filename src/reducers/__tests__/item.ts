import itemReducer, { defaultState } from '../item'
import { ActionType } from '../../types/core'
import ActionTypes from '../../constants/action-types'

describe('item reducer', () => {
  it('should return default state if action not matched', () => {
    const newState = itemReducer(undefined, { type: 'UNKNOWN' as ActionType, data: undefined })
    expect(newState).toEqual(defaultState)
  })

  it('should set loading to true when ITEM_LOADING action is called', () => {
    const newState = itemReducer(undefined, { type: ActionTypes.ITEM_LOADING as ActionType, data: true })
    const expected = {
      ...defaultState,
      loading: true
    }
    expect(newState).toEqual(expected)
  })

  it('should set item item data when ITEM_RECEIVE_DATA action is called', () => {
    const data = {
      name: 'Bob'
    }
    const newState = itemReducer(undefined, { type: ActionTypes.ITEM_RECEIVE_DATA as ActionType, data })
    const expected = {
      ...defaultState,
      itemData: data
    }
    expect(newState).toEqual(expected)
  })
})
