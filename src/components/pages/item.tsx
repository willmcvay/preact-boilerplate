import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Header, Menu, Divider, Loader, Dimmer } from 'semantic-ui-react'
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
  <Container text>
    <Header as="h1">Node JS</Header>
    <Menu>
      <Menu.Item>
        <a onClick={itemClearData}>Clear All</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={itemDataFetch}>Fetch All</a>
      </Menu.Item>
      <Menu.Item>
        <Link to={Routes.HOME}>Home Page</Link>
      </Menu.Item>
    </Menu>
    {itemState.loading ? (
      <Container>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Container>
    ) : (
      itemState.itemData &&
      itemState.itemData.data.children.map(child => (
        <div key={child.data.id}>
          <a target="_blank" href={child.data.url}>
            {child.data.title}
          </a>
          <Divider />
        </div>
      ))
    )}
  </Container>
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
