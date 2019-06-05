import * as React from 'react'
import { render } from 'react-dom'
import Router from './router'
import { Provider } from 'react-redux'

import store from './store'

const rootElement = document.querySelector('#root') as Element

render(
  <Provider store={store.reduxStore}>
    <Router />
  </Provider>,
  rootElement
)
