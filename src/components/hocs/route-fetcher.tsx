import * as React from 'react'
import { LoadableComponent } from '@loadable/component'
import { RouteComponentProps } from 'react-router-dom'
import { StaticContext } from 'react-router'

interface RouteFetcherProps {
  routerProps: RouteComponentProps<any, StaticContext, any>
  Component: LoadableComponent<any>
}

const RouteFetcher: React.FunctionComponent<RouteFetcherProps> = ({ routerProps, Component }) => {
  console.log('Route changing', routerProps)

  return <Component />
}

export default RouteFetcher
