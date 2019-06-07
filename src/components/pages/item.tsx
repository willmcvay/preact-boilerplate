import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReduxState, ReduxDispatch } from '../../types/core'
import { ItemState } from '../../reducers/item'
import { itemClearData } from '../../actions/item'
import { itemDataFetch } from '../../thunks/item'
import Routes from '../../constants/routes'

export interface ItemMappedActions {
  itemClearData: () => void
  itemDataFetch: () => void
}

export interface ItemMappedProps {
  itemState: ItemState
}
export type ItemProps = ItemMappedActions & ItemMappedProps

export const Item: React.FunctionComponent<ItemProps> = ({ itemClearData, itemDataFetch, itemState }) => (
  <>
    <h1>Node JS</h1>
    <div>
      <a onClick={itemClearData}>Clear All</a>
    </div>
    <div>
      <a onClick={itemDataFetch}>Fetch All</a>
    </div>
    <div>
      <Link to={Routes.HOME}>Home Page</Link>
    </div>
    {itemState.itemData &&
      itemState.itemData.data.children.map(child => (
        <div key={child.data.id}>
          <a target="_blank" href={child.data.url}>
            {child.data.title}
          </a>
        </div>
      ))}
  </>
)

const mapStateToProps = (state: ReduxState): ItemMappedProps => ({
  itemState: state.item
})

const mapDispatchToProps = (dispatch: ReduxDispatch): ItemMappedActions => ({
  itemClearData: () => dispatch(itemClearData(null)),
  itemDataFetch: () => dispatch(itemDataFetch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
