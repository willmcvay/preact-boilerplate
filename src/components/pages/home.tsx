import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Menu, Divider, Loader, Dimmer } from 'semantic-ui-react'
import { ReduxState } from '../../types/core'
import { HomeState } from '../../reducers/home'
import { homeClearData } from '../../actions/home'
import { homeDataFetch } from '../../sagas/home'
import Routes from '../../constants/routes'

export interface HomeMappedActions {
  homeClearData: () => void
  homeDataFetch: () => void
}

export interface HomeMappedProps {
  homeState: HomeState
}
export type HomeProps = HomeMappedActions & HomeMappedProps

export const Home: React.FunctionComponent<HomeProps> = ({ homeClearData, homeDataFetch, homeState }) => (
  <Container text>
    <Header as="h1">React JS</Header>
    <Menu>
      <Menu.Item>
        <a onClick={homeClearData}>Clear All</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={homeDataFetch}>Fetch All</a>
      </Menu.Item>
      <Menu.Item>
        <Link to={Routes.ITEM}>Item Page</Link>
      </Menu.Item>
    </Menu>
    {homeState.loading ? (
      <Container>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Container>
    ) : (
      homeState.homeData &&
      homeState.homeData.data.children.map(child => (
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

const mapStateToProps = (state: ReduxState): HomeMappedProps => ({
  homeState: state.home
})

const mapDispatchToProps = (dispatch: any): HomeMappedActions => ({
  homeClearData: () => dispatch(homeClearData(null)),
  homeDataFetch: () => dispatch(homeDataFetch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
