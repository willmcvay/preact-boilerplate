import { itemDataFetch } from '../item'
import ActionTypes from '../../constants/action-types'
import * as fetcher from '../../utils/fetcher'
import { URLS } from '../../constants/api'
import { itemDataStub } from '../__stubs__/item'

jest.mock('../../utils/fetcher')

const mockDispatch = jest.fn()

describe('item thunks', () => {
  describe('itemDataFetch', () => {
    it('should receive data', async () => {
      const fetcherSpy = jest.spyOn(fetcher, 'default').mockReturnValue(Promise.resolve(itemDataStub))

      await itemDataFetch()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledTimes(2)
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ITEM_LOADING,
        data: true
      })
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ITEM_RECEIVE_DATA,
        data: itemDataStub
      })
      expect(fetcherSpy).toHaveBeenCalledTimes(1)
      expect(fetcherSpy).toHaveBeenCalledWith({
        url: URLS.node,
        method: 'GET'
      })
    })

    it('should thow and catch an error if no data returned', async () => {
      const fetcherSpy = jest.spyOn(fetcher, 'default').mockReturnValue(Promise.resolve(undefined))
      const consoleSpy = jest.spyOn(console, 'error')

      await itemDataFetch()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledTimes(1)
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ITEM_LOADING,
        data: true
      })

      expect(fetcherSpy).toHaveBeenCalledTimes(1)
      expect(fetcherSpy).toHaveBeenCalledWith({
        url: URLS.node,
        method: 'GET'
      })

      expect(consoleSpy).toHaveBeenCalledTimes(1)
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching data')
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })
})
