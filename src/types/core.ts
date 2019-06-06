import Routes from '../constants/routes'
import ActionTypes from '../constants/action-types'

export interface Action<T> {
  readonly type: ActionType
  readonly data: T
}

export interface ActionCreator<T> {
  readonly type: string
  (data: T): Action<T>
}

export type RouteValue = keyof typeof Routes

export type ActionType = keyof typeof ActionTypes

export interface FetcherParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
}
