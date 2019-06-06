import { HomeState } from './home'
import { ItemState } from './item'

export interface ReduxState {
  home: HomeState
  item: ItemState
}
