import { RouteValue } from '../types/core'
import Routes from '../constants/routes'
import Store from '../core/store'
import { homeDataFetch } from '../thunks/home'
import { itemDataFetch } from '../thunks/item'

const routeDispatcher = (route: RouteValue) => {
  switch (route) {
    case Routes.HOME:
      Store.dispatch(homeDataFetch())
      break
    case Routes.ITEM:
      Store.dispatch(itemDataFetch())
      break
    default:
      console.error('Route not found, nothing to fetch')
  }
}

export default routeDispatcher
