import { itemLoading, itemReceiveData } from '../item'
import ActionTypes from '../../constants/action-types'

describe('home actions', () => {
  it('should create a itemLoading action', () => {
    expect(itemLoading.type).toEqual(ActionTypes.ITEM_LOADING)
    expect(itemLoading(true).data).toEqual(true)
  })

  it('should create a itemReceiveData action', () => {
    const name = 'Bob'
    expect(itemReceiveData.type).toEqual(ActionTypes.ITEM_RECEIVE_DATA)
    expect(itemReceiveData({ name }).data.name).toEqual(name)
  })
})
