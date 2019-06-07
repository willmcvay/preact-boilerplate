import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReduxState, ReduxDispatch } from '../../types/core'
import { HomeState } from '../../reducers/home'
import { homeClearData } from '../../actions/home'
import { homeDataFetch } from '../../thunks/home'
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
  <>
    <h1>React JS</h1>
    <div>
      <a onClick={homeClearData}>Clear All</a>
    </div>
    <div>
      <a onClick={homeDataFetch}>Fetch All</a>
    </div>
    <div>
      <Link to={Routes.ITEM}>Item Page</Link>
    </div>
    {homeState.homeData &&
      homeState.homeData.data.children.map(child => (
        <div key={child.data.id}>
          <a target="_blank" href={child.data.url}>
            {child.data.title}
          </a>
        </div>
      ))}
  </>
)

const mapStateToProps = (state: ReduxState): HomeMappedProps => ({
  homeState: state.home
})

const mapDispatchToProps = (dispatch: ReduxDispatch): HomeMappedActions => ({
  homeClearData: () => dispatch(homeClearData(null)),
  homeDataFetch: () => dispatch(homeDataFetch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
