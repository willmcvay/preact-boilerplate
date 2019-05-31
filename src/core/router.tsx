import { h } from 'preact'
import { Route, Router as PreactRouter, RouterOnChangeArgs } from 'preact-router'
import Home from '../components/pages/home'
import Item from '../components/pages/item'
import routeFetcher from '../utils/route-fetcher'

const Router = () => (
  <PreactRouter onChange={routeFetcher}>
    <Route path="/" component={Home} />
    <Route path="/item/" component={Item} />
  </PreactRouter>
)

export default Router
