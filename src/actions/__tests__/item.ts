import { itemLoading, itemReceiveData } from '../item'
import ActionTypes from '../../constants/action-types'
import { itemDataStub } from '../../thunks/__stubs__/item'

describe('home actions', () => {
  it('should create a itemLoading action', () => {
    expect(itemLoading.type).toEqual(ActionTypes.ITEM_LOADING)
    expect(itemLoading(true).data).toEqual(true)
  })

  it('should create a itemReceiveData action', () => {
    expect(itemReceiveData.type).toEqual(ActionTypes.ITEM_RECEIVE_DATA)
    expect(itemReceiveData(itemDataStub).data).toEqual(itemDataStub)
  })
})
