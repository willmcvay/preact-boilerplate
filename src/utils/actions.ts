import { ActionCreator, Action } from '../types/core'

export const actionCreator = <T>(type: string): ActionCreator<T> =>
  Object.assign((data: T): any => ({ type, data }), { type })

export const isType = <T>(action: Action<any>, actionCreator: ActionCreator<T>): action is Action<T> =>
  action.type === actionCreator.type
