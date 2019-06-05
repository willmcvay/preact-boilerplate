import { createStore, applyMiddleware, compose, combineReducers, Store as ReduxStore } from 'redux'
import thunk from 'redux-thunk'
import home from '../reducers/home'
import item from '../reducers/item'

class Store {
  static _instance: Store

  static get instance() {
    if (!Store._instance) {
      Store._instance = new Store()
    }

    return Store._instance
  }

  static isProd = process.env.NODE_ENV === 'production'

  static reducers = combineReducers({
    home,
    item
  })

  static composeEnhancers =
    !Store.isProd && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose

  reduxStore: ReduxStore

  constructor() {
    this.reduxStore = createStore(
      Store.reducers,
      {},
      Store.composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
      )
    )
  }

  hotModuleReloading() {
    const hotModule = (module as any).hot

    if (hotModule) {
      // Enable Webpack hot module replacement for reducers
      hotModule.accept('../reducers', () => {
        this.reduxStore.replaceReducer(Store.reducers)
      })
    }
  }

  get dispatch() {
    return this.reduxStore.dispatch
  }

  get state() {
    return this.reduxStore.getState()
  }
}

export default Store.instance
