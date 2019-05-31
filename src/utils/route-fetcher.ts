import { RouterOnChangeArgs } from 'preact-router'

const routeFetcher = (event: RouterOnChangeArgs) => {
  console.log('Route changing', event)
}

export default routeFetcher
