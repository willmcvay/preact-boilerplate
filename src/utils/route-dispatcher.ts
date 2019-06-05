import { RouteValue } from '../types/core'
import Routes from '../constants/routes'

const routeDispatcher = (route: RouteValue) => {
  switch (route) {
    case Routes.HOME:
      break
    case Routes.ITEM:
      break
    default:
      console.error('Route not found, nothing to fetch')
  }
}

export default routeDispatcher
