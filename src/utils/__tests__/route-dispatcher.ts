import routeDispatcher from '../route-dispatcher'
import Store from '../../core/store'
import Routes from '../../constants/routes'
import { RouteValue } from '../../types/core'

jest.mock('../../utils/fetcher')
jest.mock('../../core/store')
jest.mock('../../thunks/home')
jest.mock('../../thunks/item')

describe('routeDispatcher', () => {
  it('should dispatch to homeDataFetch for the home route', () => {
    routeDispatcher(Routes.HOME as RouteValue)
    expect(Store.dispatch).toHaveBeenCalledWith('HOME CALLED')
  })

  it('should dispatch to itemDataFetch for the item route', () => {
    routeDispatcher(Routes.ITEM as RouteValue)
    expect(Store.dispatch).toHaveBeenCalledWith('ITEM CALLED')
  })
})
